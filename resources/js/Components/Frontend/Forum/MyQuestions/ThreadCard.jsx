import React, { useState } from "react";
import {
  MessageCircle,
  ShieldCheck,
  Clock,
  Trash2,
} from "lucide-react";
import { usePage, router } from '@inertiajs/react';

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
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  
  const { auth } = usePage().props;
  const currentUser = auth?.user;
  
  const {
    id,
    title,
    content: excerpt,
    user: {
      name: authorName,
      role: authorType,
    },
    answers = [],
    created_at,
  } = thread;

  const isOwner = currentUser && thread.user_id === currentUser.id;
  const isSuperAdmin = currentUser?.role === 'super_admin';
  const canDelete = isOwner || isSuperAdmin;

  const repliesCount = answers?.length || 0;
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
    : "Student";

  const categories = thread.category_id 
    ? JSON.parse(thread.category_id) 
    : [];

  const categoryLabel = categories.length > 0 
    ? categories.join(', ') 
    : null;

  const hasCounselorReply = answers?.length > 0;

  // ✅ SAME DELETE FUNCTIONALITY - INSTANT REMOVAL
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (!canDelete) return;
    
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      confirmDelete();
    }
  };

  const confirmDelete = () => {
    setIsDeleting(true);
    
    // ✅ INSTANTLY HIDE THE CARD
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

  return (
    <article className="forum-thread-card" aria-label={title}>
      <div className="forum-thread-link d-flex">
        {/* Right: content */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Top row: name + role + time + optional pin */}
          <div className="d-flex flex-column gap-1 mb-1">
            <div className="d-flex align-items-center gap-1">
              {relativeTime && (
                <span className="forum-thread-time d-inline-flex align-items-center">
                  <Clock size={12} className="me-1" />
                  {relativeTime}
                </span>
              )}
            </div>
          </div>

          {/* Question title (acts like the main post text on X) */}
          <h2 className="forum-thread-title mb-1">{title}</h2>

          {/* Optional description / extra context */}
          {excerpt && (
            <p className="forum-thread-excerpt mb-2">{excerpt}</p>
          )}

          {/* Category + counselor badge row */}
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

          {/* Bottom row: left meta + right actions */}
          <div className="forum-thread-footer d-flex align-items-center ">
            <div className="forum-thread-footer-right d-flex align-items-center gap-2">
              {/* View Replies */}
              <button
                type="button"
                className="btn btn-sm btn-outline-primary forum-thread-replies-btn"
                onClick={onViewReplies}
              >
                <MessageCircle size={14} className="me-1" />
                View replies ({repliesCount})
              </button>

              {/* ✅ DELETE BUTTON - SAME AS PREVIOUS COMPONENT */}
              {canDelete && (
                <button
                  type="button"
                  className={`btn btn-sm forum-thread-report-btn ${isDeleting ? "deleting" : ""}`}
                  onClick={handleDeleteClick}
                  disabled={isDeleting}
                  aria-label={
                    isDeleting 
                      ? `Deleting: ${title}`
                      : `Delete this question: ${title}`
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
    </article>
  );
}
