import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  ShieldCheck,
  Clock,
  Bookmark,
  BookmarkCheck,
  Flag
} from "lucide-react";
import AvatarCircle from "@/Components/Frontend/Forum/AvatarCircle";

function getRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = (date - now) / 1000;
  const absDiff = Math.abs(diff);

  const units = [
    { max: 60, value: 1, name: "second" },
    { max: 3600, value: 60, name: "minute" },
    { max: 86400, value: 3600, name: "hour" },
    { max: 604800, value: 86400, name: "day" },
    { max: 2629800, value: 604800, name: "week" },
    { max: 31557600, value: 2629800, name: "month" },
    { max: Infinity, value: 31557600, name: "year" }
  ];

  const unit = units.find(u => absDiff < u.max);
  const value = Math.round(diff / unit.value);

  return new Intl.RelativeTimeFormat("en", { numeric: "auto" })
    .format(value, unit.name);
}

export default function ThreadCard({
  thread,
  onViewReplies,
  onReply,
  onToggleBookmark,
  onReportQuestion,
  onRequireLogin,
}) {
  const [localIsBookmarked, setLocalIsBookmarked] = useState(false);
  const [bookmarkError, setBookmarkError] = useState(null);
  const errorTimeoutRef = useRef(null);
  
  // Destructure thread data from API
  const {
    id,
    title,
    content,
    user,
    answers = [],
    category_id,
    created_at,
    isBookmarked: serverBookmark,
    isReported,
    reports = []
  } = thread;

  // Extract user info
  const authorName = user?.name || "Anonymous";
  const authorType = user?.role || "student";
  const avatarUrl = user?.avatar || null;
  
  // Calculate derived values
  const repliesCount = answers?.length || 0;
  const relativeTime = getRelativeTime(created_at);
  
  // Check if there's any counselor reply
  const hasCounselorReply = answers?.some(answer => 
    answer.user?.role === "counselor" || answer.is_verified_by_counselor
  );
  
  // Parse category label (handles both string and JSON string)
  
  const categories = thread.category_id 
    ? JSON.parse(thread.category_id) 
    : [];

  // Join all categories with comma and space
  const categoryLabel = categories.length > 0 
      ? categories.join(', ') 
      : null;
  
  // Extract excerpt from content (first 150 chars)
  const excerpt = content && content.length > 150 
    ? content.substring(0, 150) + "..." 
    : content;

  // Sync local bookmark state with server
  useEffect(() => {
    setLocalIsBookmarked(serverBookmark || false);
  }, [serverBookmark]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, []);

  const authorLabel = authorType === "counselor" 
    ? "Counselor" 
    : authorType === "parent" 
    ? "Parent" 
    : "Student";

  const clearError = () => {
    setBookmarkError(null);
  };

  const handleToggleBookmark = async (e) => {
    e.stopPropagation();
    
    // Clear any existing timeout
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
    }
    
    // Clear previous error immediately
    setBookmarkError(null);
    
    // Backward compatibility - call parent callback
    if (typeof onToggleBookmark === "function") {
      onToggleBookmark(id);
    }
    
    // Instant UI feedback (optimistic update)
    const previousState = localIsBookmarked;
    setLocalIsBookmarked(!previousState);
    
    // API call
    const endpoint = `/questions/${id}/bookmark`;
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
          'Accept': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json();
      
      // ✅ TEMP DEBUG - Remove after testing
      console.log('📋 Bookmark Response:', {
        ok: response.ok,
        data,
        previousState,
        expectedToggle: !previousState
      });
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to bookmark');
      }
      
      // ✅ FIXED: Handle missing data.status gracefully
      const newBookmarkState = data.status !== undefined ? data.status : !previousState;
      setLocalIsBookmarked(newBookmarkState);
      
    } catch (error) {
      console.error('Bookmark error:', error);
      
      // ✅ FIXED: Only revert on critical auth errors
      if (error.message?.toLowerCase().includes('login') || 
          error.message?.toLowerCase().includes('auth')) {
        setLocalIsBookmarked(previousState);
        setBookmarkError(error.message || 'Please login to bookmark');
      } else {
        // Keep optimistic state for network/other errors
        setBookmarkError(error.message || 'Something went wrong');
      }
      
      errorTimeoutRef.current = setTimeout(clearError, 3000);
    }
  };


  const handleReport = (e) => {
    e.stopPropagation();
    if (typeof onReportQuestion === "function") {
      onReportQuestion(thread);
    }
  };

  const handleReply = (e) => {
    e.stopPropagation();
    if (typeof onReply === "function") {
      onReply();
    }
  };

  const handleViewReplies = (e) => {
    e.stopPropagation();
    if (typeof onViewReplies === "function") {
      onViewReplies();
    }
  };

  return (
    <article className="forum-thread-card" aria-label={title}>
      <div className="forum-thread-link d-flex">
        {/* Left: avatar */}
        <div className="me-2 mt-1">
          <AvatarCircle name={authorName} imageUrl={avatarUrl} size={36} />
        </div>

        {/* Right: content */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Top row: name + role + time */}
          <div className="d-flex flex-column gap-1 mb-1">
            <span className="forum-thread-author-name">{authorName}</span>
            <div className="d-flex align-items-center gap-1">
              <span className="forum-thread-author-type-badge">
                {authorLabel}
              </span>
              <span className="forum-thread-time d-inline-flex align-items-center">
                <Clock size={12} className="me-1" />
                {relativeTime}
              </span>
            </div>
          </div>

          {/* Question title */}
          <h2 className="forum-thread-title mb-1">{title}</h2>

          {/* Excerpt */}
          {excerpt && (
            <p className="forum-thread-excerpt mb-2">{excerpt}</p>
          )}

          {/* Category + counselor badge */}
          <div className="d-flex align-items-center flex-wrap gap-1 mb-2">
            {categoryLabel && (
              <span className="forum-thread-category">
                {categoryLabel}
              </span>
            )}
            {hasCounselorReply && (
              <span className="forum-thread-pill forum-thread-pill-expert">
                <ShieldCheck size={12} className="me-1" />
                Counselor replied
              </span>
            )}
          </div>

          {/* Footer: actions */}
          <div className="forum-thread-footer d-flex align-items-center">
            <div className="forum-thread-footer-right d-flex align-items-center gap-2">
              {/* Bookmark Button with Error Message */}
              <div className="position-relative">
                <button
                  type="button"
                  className={`btn btn-sm forum-thread-bookmark-btn ${localIsBookmarked ? "active" : ""}`}
                  onClick={handleToggleBookmark}
                  aria-pressed={localIsBookmarked ? "true" : "false"}
                  aria-label={
                    localIsBookmarked
                      ? `Remove bookmark for: ${title}`
                      : `Bookmark this question: ${title}`
                  }
                  title={bookmarkError ? bookmarkError : (localIsBookmarked ? "Remove bookmark" : "Add bookmark")}
                >
                  {localIsBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                </button>
                {bookmarkError && (
                  <div className="position-absolute bottom-100 start-0 mb-1 p-2 bg-danger text-white rounded small" style={{zIndex: 1000, minWidth: '200px'}}>
                    {bookmarkError}
                  </div>
                )}
              </div>

              {/* Report */}
              <button
                type="button"
                className={`btn btn-sm forum-thread-report-btn ${isReported ? "reported" : ""}`}
                onClick={handleReport}
                aria-pressed={isReported ? "true" : "false"}
                aria-label={
                  isReported
                    ? `You have reported this question: ${title}`
                    : `Report this question: ${title}`
                }
              >
                <Flag size={13} className="me-1" />
                {isReported ? "Reported" : "Report"}
              </button>

              {/* Reply */}
               <button
                type="button"
                className="btn btn-sm btn-link forum-answer-report-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof onReply === "function") onReply();
                }}
              >
                Reply
              </button>

              {/* View Replies */}
              <button
                type="button"
                className="btn btn-sm btn-outline-primary forum-thread-replies-btn"
                onClick={handleViewReplies}
              >
                <MessageCircle size={14} className="me-1" />
                View replies ({repliesCount})
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
