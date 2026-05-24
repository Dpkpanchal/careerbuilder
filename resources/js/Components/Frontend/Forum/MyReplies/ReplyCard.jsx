import React, { useState } from "react";
import { MessageCircle, Clock, Trash2, AlertTriangle } from "lucide-react";
import { router } from '@inertiajs/react';

export default function ReplyCard({ reply, onViewThread, counsellor_id }) {
  const {
    replyContent,
    replyRelativeTime,
    threadTitle,
    threadExcerpt,
    threadTotalReplies,
    isQuestionAuthor,
    isAnswerAuthor,
    isReplyAuthor,
    parentAnswerContent,
    parentAnswerAuthor,
    id: replyId, // ✅ Add reply ID from props
  } = reply;

  // ✅ Delete states
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  // fallback static description
  const staticDescription =
    "Here is the question description. (Static placeholder — replace once backend provides real data.)";

  const excerpt = threadExcerpt || staticDescription;

  // Expandable states
  const [showFullQuestion, setShowFullQuestion] = useState(false);
  const [showFullReply, setShowFullReply] = useState(false);

  const QUESTION_LIMIT = 180;
  const REPLY_LIMIT = 200;

  // Truncation logic
  const questionTooLong = excerpt.length > QUESTION_LIMIT;
  const questionText =
    !showFullQuestion && questionTooLong
      ? excerpt.slice(0, QUESTION_LIMIT) + "…"
      : excerpt;

  const replyTooLong = replyContent.length > REPLY_LIMIT;
  const replyText =
    !showFullReply && replyTooLong
      ? replyContent.slice(0, REPLY_LIMIT) + "…"
      : replyContent;

  // Determine badge label
  const getBadgeLabel = () => {
    if (isQuestionAuthor) return "You asked this question";
    if (isAnswerAuthor) return "Your answer";
    if (isReplyAuthor) return "Your reply";
    return "Your reply";
  };

  // ✅ DELETE HANDLER
  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    
    if (window.confirm(`Are you sure you want to delete your reply in "${threadTitle}"? This action cannot be undone.`)) {
      confirmDelete();
    }
  };

  const confirmDelete = () => {
    setIsDeleting(true);
    setDeleteError(null);

    // ✅ OPTIMISTIC: Hide card immediately
    const cardElement = document.querySelector(`article[aria-label="${threadTitle.replace(/"/g, '\\"')}"]`);
    if (cardElement) {
      cardElement.style.opacity = '0.5';
      cardElement.style.pointerEvents = 'none';
    }

    // ✅ Inertia DELETE request
    router.delete(`/answers/${replyId}`, {
      preserveState: true,
      preserveScroll: true,
      onSuccess: () => {
        // Success - card already hidden
        console.log('Reply deleted successfully');
      },
      onError: (errors) => {
        console.error('Delete failed:', errors);
        setDeleteError('Failed to delete reply. Please try again.');
        
        // Restore card
        if (cardElement) {
          cardElement.style.opacity = '1';
          cardElement.style.pointerEvents = 'auto';
        }
        setIsDeleting(false);
      },
      onFinish: () => {
        setIsDeleting(false);
      }
    });
  };

  return (
    <article className="forum-thread-card" aria-label={threadTitle}>
      <div className="forum-thread-link d-flex">
        <div className="flex-grow-1 d-flex flex-column">

          {/* Time */}
          <div className="d-flex gap-1 mb-1">
            {replyRelativeTime && (
              <span className="forum-thread-time d-inline-flex align-items-center">
                <Clock size={12} className="me-1" />
                {replyRelativeTime}
              </span>
            )}
          </div>

          {/* Question title */}
          <h2 className="forum-thread-title mb-1">{threadTitle}</h2>

          {/* Question description */}
          <p className="forum-thread-excerpt mb-0">{questionText}</p>

          {questionTooLong && (
            <button
              type="button"
              className="reply-show-more-btn"
              onClick={() => setShowFullQuestion(!showFullQuestion)}
            >
              {showFullQuestion ? "Show less" : "Show more"}
            </button>
          )}

          {/* Your reply */}
          <div className="mt-3">
            <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis mb-1">
              {getBadgeLabel()}
            </span>

            {/* Show context for replies */}
            {isReplyAuthor && parentAnswerAuthor && (
              <div className="mb-1 small text-muted">
                <em>Replying to {parentAnswerAuthor}</em>
              </div>
            )}

            <p className="forum-thread-excerpt mb-0">{replyText}</p>

            {replyTooLong && (
              <button
                type="button"
                className="reply-show-more-btn"
                onClick={() => setShowFullReply(!showFullReply)}
              >
                {showFullReply ? "Show less" : "Show more"}
              </button>
            )}
          </div>

          {/* Footer */}
          <div className="forum-thread-footer d-flex align-items-center mt-3">
            <div className="forum-thread-footer-right d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-primary forum-thread-replies-btn"
                onClick={onViewThread}
              >
                <MessageCircle size={14} className="me-1" />
                View thread
                {typeof threadTotalReplies === "number"
                  ? ` (${threadTotalReplies})`
                  : ""}
              </button>
              
              {/* ✅ DELETE BUTTON - Fully functional */}
              {!counsellor_id && (
                <button
                  type="button"
                  className={`btn btn-sm btn-outline-danger ${isDeleting ? 'disabled opacity-50' : ''}`}
                  onClick={handleDeleteClick}
                  disabled={isDeleting}
                  title={isDeleting ? "Deleting..." : "Delete reply"}
                >
                  {isDeleting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 size={14} className="me-1" />
                      Delete
                    </>
                  )}
                </button>
              )}
            </div>
            
            {/* ✅ Delete Error */}
            {deleteError && (
              <div className="mt-2 p-2 bg-danger-subtle border border-danger-subtle rounded text-danger small">
                <AlertTriangle size={12} className="me-1" />
                {deleteError}
                <button 
                  className="btn-close btn-close-sm ms-2" 
                  onClick={() => setDeleteError(null)}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </article>
  );
}
