import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, ShieldCheck, Clock, Bookmark, BookmarkCheck, Flag } from "lucide-react";
import { usePage } from '@inertiajs/react';
import AvatarCircle from "./AvatarCircle";
import AuthModal from "@/Components/Frontend/Forum/AuthModal"; 



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
  const [authOpen, setAuthOpen] = useState(false);
  
  const {
    id,
    title,
    content: excerpt,
    user: {
      name: authorName,
      role: authorType,
    },
    answers = [],
    isReported = false,
    reports = [],
    created_at,
  } = thread;

  const serverIsBookmarked = thread.isBookmarked || false;

  useEffect(() => {
    setLocalIsBookmarked(serverIsBookmarked);
  }, [serverIsBookmarked]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, []);

  const { auth } = usePage().props;
  const currentUser = auth?.user;
  const isOwner = currentUser && thread.user_id === currentUser.id;
  
  const isBookmarked = localIsBookmarked;
  const repliesCount = answers?.length || 0;
  const relativeTime = getRelativeTime(created_at);
  console.log('authorType', authorType);  
  const authorLabel = authorType === "counselor" 
    ? "Counselor" 
    : authorType === "parent" 
    ? "Parent"
    : authorType === "student" 
    ? "Student" 
    : authorType === "teacher" 
    ? "Teacher" 
    : authorType === "user" 
    ? "User" 
    : "Student";
  //console.log('mubeen', thread.category_id);
  // Parse the JSON array
  const categories = thread.category_id 
      ? JSON.parse(thread.category_id) 
      : [];

  // Join all categories with comma and space
  const categoryLabel = categories.length > 0 
      ? categories.join(', ') 
      : null;

  const hasCounselorReply = answers?.length > 0;

  const clearError = () => {
    setBookmarkError(null);
  };

  const handleToggleBookmark = async (e) => {
    e.stopPropagation();
    
     if (!auth?.user) {
      setAuthOpen(true); // Open auth modal instead of showing error
      return;
    }
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
    const previousState = isBookmarked;
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
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to bookmark');
      }
      
      if (data.success) {
        // Use server response
        setLocalIsBookmarked(data.status);
      } else {
        // Handle login requirement
        if (data.requires_login) {
          setBookmarkError(data.message);
          
          // Set timeout to clear error after 3 seconds
          errorTimeoutRef.current = setTimeout(clearError, 3000);
          
          // Call parent login handler if provided
          if (typeof onRequireLogin === "function") {
            onRequireLogin(data.message);
          } else {
            // Fallback: show alert or redirect
            if (window.confirm(`${data.message} Click OK to log in.`)) {
              window.location.href = '/login';
            }
          }
          
          // Revert to previous state
          setLocalIsBookmarked(previousState);
        } else {
          // Other error
          setBookmarkError(data.message);
          // Set timeout to clear error after 3 seconds
          errorTimeoutRef.current = setTimeout(clearError, 3000);
          setLocalIsBookmarked(previousState);
        }
      }
    } catch (error) {
      console.error('Bookmark error:', error);
      setBookmarkError(error.message);
      // Set timeout to clear error after 3 seconds
      errorTimeoutRef.current = setTimeout(clearError, 3000);
      // Revert state on error
      setLocalIsBookmarked(previousState);
    }
  };

  const handleReport = (e) => {
    e.stopPropagation();
      if (!auth?.user) {
        setAuthOpen(true); // Open auth modal instead of showing error
        return;
      }
    if (typeof onReportQuestion === "function") {
      onReportQuestion(thread);
    }
  };

  return (
    <article className="forum-thread-card" aria-label={title}>
      <div className="forum-thread-link d-flex">
        {/* Left: avatar */}
        <div className="me-2 mt-1">
          <AvatarCircle name={authorName} imageUrl={null} size={36} />
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
               {!isOwner && (
                  <div className="position-relative">
                  
                      <button
                        type="button"
                        className={`btn btn-sm forum-thread-bookmark-btn ${isBookmarked ? "active" : ""}`}
                        onClick={handleToggleBookmark}
                        aria-pressed={isBookmarked ? "true" : "false"}
                        aria-label={
                          isBookmarked
                            ? `Remove bookmark for: ${title}`
                            : `Bookmark this question: ${title}`
                        }
                        title={bookmarkError ? bookmarkError : (isBookmarked ? "Remove bookmark" : "Add bookmark")}
                      >
                        {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                      </button>
                  
                    {/* {bookmarkError && (
                      <div className="position-absolute bottom-100 start-0 mb-1 p-2 bg-danger text-white rounded small" style={{zIndex: 1000, minWidth: '200px'}}>
                        {bookmarkError}
                      </div>
                    )} */}
                  </div>
              )}
              {/* Report */}
              {!isOwner && (
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
              )}
              {!isOwner && (
                <button
                  type="button"
                  className="btn btn-sm btn-link forum-answer-report-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                      if (!auth?.user) {
                        setAuthOpen(true); // Open auth modal instead of showing error
                        return;
                      }
                    if (typeof onReply === "function") onReply();
                  }}
                >
                  Reply
                </button>
              )}

              {/* View Replies */}
              <button
                type="button"
                className="btn btn-sm btn-outline-primary forum-thread-replies-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof onViewReplies === "function") onViewReplies();
                }}
              >
                <MessageCircle size={14} className="me-1" />
                View replies ({repliesCount})
              </button>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        initialMode="login"
      />

    </article>
  );
}