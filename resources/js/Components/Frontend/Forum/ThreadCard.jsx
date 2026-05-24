import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, ShieldCheck, Clock, Bookmark, BookmarkCheck, Flag, Trash2 } from "lucide-react";
import { usePage, router } from '@inertiajs/react';
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
  isOptimistic = false,
}) {
  const [localIsBookmarked, setLocalIsBookmarked] = useState(false);
  const [bookmarkError, setBookmarkError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [repliesCount, setRepliesCount] = useState(0); // ✅ NEW: Local optimistic count
  const errorTimeoutRef = useRef(null);
  const [authOpen, setAuthOpen] = useState(false);
  
  const isOptimisticThread = isOptimistic || thread.isOptimistic || thread.is_temp;
  
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
    user_id, // ✅ Needed for isOwner check
  } = thread;

  const serverIsBookmarked = thread.isBookmarked || false;

  // ✅ Sync bookmark state from props
  useEffect(() => {
    setLocalIsBookmarked(serverIsBookmarked);
  }, [serverIsBookmarked]);

  // ✅ NEW: Sync replies count from props (when real data updates)
  useEffect(() => {
    setRepliesCount(answers.length || 0);
  }, [answers]);

  // ✅ Cleanup timeout
  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, []);

  const { auth } = usePage().props;
  const currentUser = auth?.user;
  
  const isOwner = currentUser && user_id === currentUser.id;
  const isSuperAdmin = currentUser?.role === 'super_admin';
  const canDelete = isOwner || isSuperAdmin;
  
  const isBookmarked = localIsBookmarked;
  const relativeTime = getRelativeTime(created_at);
  
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
    : authorType === "super_admin" 
    ? "Super Admin"
    : "Student";
  
  const categories = thread.category_id 
    ? JSON.parse(thread.category_id) 
    : [];
  const categoryLabel = categories.length > 0 ? categories.join(', ') : null;
  const hasCounselorReply = answers?.length > 0;

  const clearError = () => {
    setBookmarkError(null);
  };

  // ✅ FIXED Bookmark handler
  const handleToggleBookmark = async (e) => {
    e.stopPropagation();
    if (isOptimisticThread) return;
    if (!auth?.user) {
      setAuthOpen(true);
      return;
    }
    
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
    }
    setBookmarkError(null);
    
    if (typeof onToggleBookmark === "function") {
      onToggleBookmark(id);
    }
    
    const previousState = isBookmarked;
    setLocalIsBookmarked(!previousState); // Optimistic update
    
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
      
      // Handle missing data.status gracefully
      const newBookmarkState = data.status !== undefined ? data.status : !previousState;
      setLocalIsBookmarked(newBookmarkState);
      
    } catch (error) {
      console.error('Bookmark error:', error);
      
      if (error.message?.includes('login') || error.message?.includes('auth')) {
        setLocalIsBookmarked(previousState);
        setAuthOpen(true);
      } else {
        setBookmarkError(error.message || 'Something went wrong');
      }
      
      errorTimeoutRef.current = setTimeout(clearError, 3000);
    }
  };

  // ✅ FIXED - INSTANT REMOVAL (NO BLUR!)
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (isOptimisticThread || !canDelete) return;
    
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      confirmDelete();
    }
  };

  const confirmDelete = () => {
    setIsDeleting(true);
    
    // HIDE CARD COMPLETELY - NO BLUR!
    const cardElement = document.querySelector(`article[aria-label="${title.replace(/"/g, '\\"')}"]`);
    if (cardElement) {
      cardElement.style.display = 'none';
    }
    
    router.delete(`/questions/${id}`, {
      preserveState: true,
      preserveScroll: true,
      onFinish: () => {
        setIsDeleting(false);
      },
      onError: (errors) => {
        console.error('❌ Delete failed:', errors);
        setIsDeleting(false);
        if (cardElement) {
          cardElement.style.display = '';
        }
        alert('Delete failed. Please try again.');
      }
    });
  };

  const handleReport = (e) => {
    e.stopPropagation();
    if (isOptimisticThread) return;
    if (!auth?.user) {
      setAuthOpen(true);
      return;
    }
    if (typeof onReportQuestion === "function") {
      onReportQuestion(thread);
    }
  };

  const handleViewReplies = (e) => {
    e.stopPropagation();
    if (isOptimisticThread) return;
    if (typeof onViewReplies === "function") {
      onViewReplies();
    }
  };

  // ✅ FIXED: Optimistic reply count increment
  const handleReply = (e) => {
    e.stopPropagation();
    if (isOptimisticThread) return;
    if (!auth?.user) {
      setAuthOpen(true);
      return;
    }
    
    // ✅ INSTANTLY increment replies count for UI feedback
    setRepliesCount((prev) => prev + 1);
    
    if (typeof onReply === "function") {
      onReply();
    }
  };

  return (
    <article className="forum-thread-card" aria-label={title}>
      <div className="forum-thread-link d-flex">
        <div className="me-2 mt-1">
          <AvatarCircle name={authorName} imageUrl={null} size={36} />
        </div>

        <div className="flex-grow-1 d-flex flex-column">
          <div className="d-flex flex-column gap-1 mb-1">
            <span className="forum-thread-author-name">{authorName}</span>
            <div className="d-flex align-items-center gap-1">
              <span className="forum-thread-author-type-badge">{authorLabel}</span>
              <span className="forum-thread-time d-inline-flex align-items-center">
                <Clock size={12} className="me-1" />
                {relativeTime}
              </span>
            </div>
          </div>

          <h2 className="forum-thread-title mb-1">{title}</h2>

          {excerpt && <p className="forum-thread-excerpt mb-2">{excerpt}</p>}

          <div className="d-flex align-items-center flex-wrap gap-1 mb-2">
            {categoryLabel && (
              <span className="forum-thread-category">{categoryLabel}</span>
            )}
            {hasCounselorReply && !isOptimisticThread && (
              <span className="forum-thread-pill forum-thread-pill-expert">
                <ShieldCheck size={12} className="me-1" />
                Counselor replied
              </span>
            )}
          </div>

          <div className="forum-thread-footer d-flex align-items-center">
            <div className="forum-thread-footer-right d-flex align-items-center gap-2">
              {!isOwner && !isOptimisticThread && (
                <div className="position-relative">
                  <button
                    type="button"
                    className={`btn btn-sm forum-thread-bookmark-btn ${isBookmarked ? "active" : ""}`}
                    onClick={handleToggleBookmark}
                    disabled={isOptimisticThread}
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
                </div>
              )}

              {!isOwner && !isOptimisticThread && (
                <button
                  type="button"
                  className={`btn btn-sm forum-thread-report-btn ${isReported ? "reported" : ""}`}
                  onClick={handleReport}
                  disabled={isOptimisticThread}
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

              {!isOwner && !isOptimisticThread && (
                <button
                  type="button"
                  className="btn btn-sm btn-link forum-answer-report-btn"
                  onClick={handleReply}
                  disabled={isOptimisticThread}
                >
                  Reply
                </button>
              )}

              {/* ✅ FIXED: Uses local repliesCount - shows INSTANTLY */}
              {repliesCount > 0 && (
                <button
                  type="button"
                  className={`btn btn-sm ${
                    isOptimisticThread ? 'btn-outline-secondary' : 'btn-outline-primary'
                  } forum-thread-replies-btn`}
                  onClick={handleViewReplies}
                  disabled={isOptimisticThread}
                >
                  <MessageCircle size={14} className="me-1" />
                  View replies ({isOptimisticThread ? 0 : repliesCount})
                </button>
              )}

              {canDelete && !isOptimisticThread && (
                <button
                  type="button"
                  className={`btn btn-sm forum-thread-report-btn ${isDeleting ? "deleting" : ""}`}
                  onClick={handleDeleteClick}
                  disabled={isOptimisticThread || isDeleting}
                  aria-label={
                    isDeleting ? `Deleting: ${title}` : `Delete this question: ${title}`
                  }
                  title="Delete question"
                >
                  <Trash2 size={13} className="me-1" />
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} initialMode="login" />
    </article>
  );
}
