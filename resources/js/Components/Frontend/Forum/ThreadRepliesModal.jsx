"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, ShieldCheck, ThumbsUp, Flag, Trash2, Send } from "lucide-react";
import AvatarCircle from "@/Components/Frontend/Forum/AvatarCircle";
import ReportDialog from "@/Components/Frontend/Forum/ReportDialog";
import { usePage } from '@inertiajs/react';

/**
 * Helper: rank by role so we can sort counselor replies on top
 */
function getRoleRank(item) {
  if (item.user?.role === "counselor" && item.is_verified_by_counselor) return 0;
  if (item.user?.role === "counselor") return 1;
  return 2; // everyone else
}

/**
 * Helper: sort list => counselors (verified first) on top
 */
function sortByRole(list = []) {
  const arr = [...list];
  arr.sort((a, b) => {
    const ra = getRoleRank(a);
    const rb = getRoleRank(b);
    if (ra !== rb) return ra - rb;
    // fallback: newer first by id if numeric, else keep original
    if (typeof a.id === "number" && typeof b.id === "number") {
      return b.id - a.id;
    }
    return 0;
  });
  return arr;
}

/**
 * Get relative time for display
 */
function getRelativeTime(dateString) {
  if (!dateString) return "Recently";
  
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

  try {
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" })
      .format(value, unit.name);
  } catch (error) {
    return "Recently";
  }
}

/**
 * Recursive component to display nested replies
 */
function NestedReply({
  reply,
  depth = 0,
  answerIndex,
  onReply,
  onToggleHelpful,
  onReport,
  onDelete,
  replyContext,
  setReplyContext,
  replyInputText,
  setReplyInputText,
  handleSendInlineReply,
  canReplyToAnswer,
  isLoggedIn,
  auth,
  allReplies,
  parentReplyId = null
}) {
  // Get child replies (replies that have this reply as parent)
  const childReplies = allReplies.filter(r => r.parent_reply_id === reply.id);
  
  const repAuthorLabel =
    reply.authorType === "counselor" ? "Counselor" :
    reply.authorType === "parent" ? "Parent" :
    reply.authorType === "student" ? "Student" :
    reply.authorType === "teacher" ? "Teacher" : "User";

  const isInlineForThisReply =
    replyContext &&
    replyContext.answerIndex === answerIndex &&
    replyContext.replyId === reply.id;

  const canReplyToThisReply = isLoggedIn && reply.user_id !== auth.user.id;

  // Calculate margin for nesting - using inline style to not affect CSS classes
  const marginLeft = depth * 24;

  return (
    <div style={{ marginLeft: `${marginLeft}px` }}>
      <article
        className="forum-answer-card forum-answer-card-nested"
      >
        {/* Reply header */}
        <div className="forum-answer-header">
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <AvatarCircle
              name={reply.authorName || reply.user?.name}
              imageUrl={reply.avatarUrl || reply.user?.avatar}
              size={28}
            />

            <div className="d-flex flex-column">
              <span className="forum-answer-author">
                {reply.authorName || reply.user?.name}
              </span>
              <div className="d-flex align-items-center gap-1 forum-answer-role-container">
                <span className="forum-answer-role">
                  {repAuthorLabel}
                </span>
                {reply.authorType === "counselor" &&
                  reply.isCounselorVerified && (
                    <>
                      <span className="forum-answer-role-separator">·</span>
                      <div className="d-flex align-items-center gap-1 forum-counselor-verified">
                        <ShieldCheck
                          size={13}
                          className="forum-verified-icon"
                        />
                        <span className="forum-verified-text">
                          Verified
                        </span>
                      </div>
                    </>
                  )}
                {reply.inReplyToName && (
                  <>
                    <span className="forum-answer-role-separator">·</span>
                    <span className="forum-answer-inreply">
                      replying to {reply.inReplyToName}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {reply.relativeTime && (
            <span className="forum-answer-time">
              {reply.relativeTime}
            </span>
          )}
        </div>

        <div className="forum-answer-body">
          {reply.content
            .split("\n\n")
            .map((para, idx2) => (
              <p key={idx2} className="mb-2">
                {para}
              </p>
            ))}
        </div>

        {/* Reply footer with actions */}
        <div className="forum-answer-footer">
          <div className="d-flex align-items-center flex-wrap gap-2">
            {/* Helpful */}
            <button
              type="button"
              className={
                "btn btn-sm btn-outline-light border-0 forum-answer-upvote-btn" +
                (reply.isHelpful ? " active" : "")
              }
              onClick={() => onToggleHelpful(answerIndex, reply.id)}
              aria-pressed={!!reply.isHelpful}
            >
              <ThumbsUp size={14} className="me-1" />
              {reply.upvotes || 0} helpful
            </button>

            {/* Report */}
            {isLoggedIn && reply.user_id !== auth.user.id && (
              <button
                type="button"
                className={
                  "btn btn-sm forum-answer-report-btn" +
                  (reply.isReported ? " reported" : "")
                }
                onClick={() => onReport(answerIndex, reply.id)}
                disabled={reply.isReported}
              >
                <Flag size={13} className="me-1" />
                {reply.isReported ? "Reported" : "Report"}
              </button>
            )}

            {/* Reply */}
            {canReplyToThisReply && (
              <button
                type="button"
                className="btn btn-sm btn-link p-0 forum-answer-reply-btn"
                onClick={() => onReply(answerIndex, reply.id, reply.authorName || reply.user?.name)}
              >
                Reply
              </button>
            )}

            {/* Delete */}
            {isLoggedIn && reply.user_id === auth.user.id && (
              <button
                type="button"
                className="btn btn-sm btn-link p-0 forum-answer-delete-btn text-danger"
                onClick={() => onDelete(answerIndex, reply.id)}
              >
                <Trash2 size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Inline reply form for this reply */}
        {isInlineForThisReply && canReplyToThisReply && (
          <div className="forum-answer-inline-reply mt-2">
            <textarea
              className="form-control forum-answer-inline-textarea"
              rows={2}
              placeholder={`Replying to ${reply.authorName || reply.user?.name}…`}
              value={replyInputText}
              onChange={(e) => setReplyInputText(e.target.value)}
              autoFocus
            />
            <div className="d-flex justify-content-end gap-2 mt-1">
              <button
                type="button"
                className="btn btn-light btn-sm"
                onClick={() => {
                  setReplyContext(null);
                  setReplyInputText("");
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => handleSendInlineReply(answerIndex, reply.id)}
                disabled={!replyInputText.trim()}
              >
                Reply
              </button>
            </div>
          </div>
        )}
      </article>

      {/* Render child replies */}
      {childReplies.length > 0 && (
        <div style={{ marginTop: "8px" }}>
          {childReplies.map((childReply) => (
            <NestedReply
              key={childReply.id}
              reply={childReply}
              depth={depth + 1}
              answerIndex={answerIndex}
              onReply={onReply}
              onToggleHelpful={onToggleHelpful}
              onReport={onReport}
              onDelete={onDelete}
              replyContext={replyContext}
              setReplyContext={setReplyContext}
              replyInputText={replyInputText}
              setReplyInputText={setReplyInputText}
              handleSendInlineReply={handleSendInlineReply}
              canReplyToAnswer={canReplyToAnswer}
              isLoggedIn={isLoggedIn}
              auth={auth}
              allReplies={allReplies}
              parentReplyId={reply.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Footer for an answer or a nested reply (helpful / report / reply / delete)
 */
function ReplyFooter({
  item,
  indexLabel,
  onToggleHelpful,
  onReport,
  onReply,
  onDelete,
  isDeleting = false,
  isBeingDeleted = false,
  disabledReply = false,
}) {
  const { auth } = usePage().props;
  const currentUser = auth?.user;
  
  // Check if current user owns this item based on user_id
  const isOwner = currentUser && item.user_id === currentUser.id;
  
  // Check if item is reported
  const isReported = item.isReported || false;
  
  return (
    <div className="forum-answer-footer">
      <div className="d-flex align-items-center flex-wrap gap-2">
        {/* Helpful */}
        <button
          type="button"
          className={
            "btn btn-sm btn-outline-light border-0 forum-answer-upvote-btn" +
            (item.isHelpful ? " active" : "")
          }
          onClick={onToggleHelpful}
          aria-pressed={!!item.isHelpful}
          aria-label={
            item.isHelpful
              ? `Remove helpful mark from this reply (${item.upvotes} helpful)`
              : `Mark this reply as helpful (${item.upvotes} helpful)`
          }
        >
          <ThumbsUp size={14} className="me-1" />
          {item.upvotes} helpful
        </button>

        {/* Report */}
        {!isOwner && (
          <button
            type="button"
            className={
              "btn btn-sm forum-answer-report-btn" +
              (item.isReported ? " reported" : "")
            }
            onClick={onReport}
            aria-pressed={item.isReported ? "true" : "false"}
            aria-label={
              item.isReported
                ? "You have reported this reply"
                : "Report this reply"
            }
            disabled={isReported}
          >
            <Flag size={13} className="me-1" />
            {item.isReported ? "Reported" : "Report"}
          </button>
        )}

        {/* Reply */}
        {!isOwner && (
          <button
            type="button"
            className="btn btn-sm btn-link p-0 forum-answer-reply-btn"
            onClick={onReply}
            disabled={disabledReply}
            title={disabledReply ? "You cannot reply to your own content" : ""}
          >
            Reply
          </button>
        )}

        {/* Delete (only for own replies) */}
        {isOwner && (
          <button
            type="button"
            className="btn btn-sm btn-link p-0 forum-answer-delete-btn text-danger"
            onClick={onDelete}
            title="Delete your answer"
            aria-label="Delete this answer"
            disabled={isDeleting && isBeingDeleted}
          >
            {isDeleting && isBeingDeleted ? (
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            ) : (
              <Trash2 size={13} />
            )}
          </button>
        )}
      </div>

      {indexLabel && (
        <span className="forum-answer-index small text-muted">
          {indexLabel}
        </span>
      )}
    </div>
  );
}

export default function ThreadRepliesModal({ thread, answers, onClose }) {
  const dialogRef = useRef(null);
  const replyTextareaRef = useRef(null);

  const [localAnswers, setLocalAnswers] = useState([]);
  const [questionReplyText, setQuestionReplyText] = useState("");
  const [isSavingQuestionReply, setIsSavingQuestionReply] = useState(false);
  const [replyContext, setReplyContext] = useState(null); // Changed to { answerIndex, replyId, inReplyToName }
  const [replyInputText, setReplyInputText] = useState("");
  const [reportTarget, setReportTarget] = useState(null);
  const [loginMessage, setLoginMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [isOwnQuestion, setIsOwnQuestion] = useState(false);
  
  const { auth } = usePage().props;

  // Check if user is logged in
  const isLoggedIn = auth?.user;

  // Check if the current user is the question author
  useEffect(() => {
    if (thread && auth?.user) {
      const threadUserId = thread.user_id || thread.user?.id;
      setIsOwnQuestion(threadUserId === auth.user.id);
    }
  }, [thread, auth]);

  // Function to show login message
  const showLoginMessage = (action = "perform this action") => {
    setLoginMessage(`To ${action}, please sign in using the 'Ask a Question' button.`);
    setTimeout(() => setLoginMessage(""), 3000);
  };

  // Lock scroll + ESC + initialize answers
  useEffect(() => {
    document.body.classList.add("forum-modal-open");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Initialize local answers from props
    const initial = sortByRole(answers || []).map((answer) => {
      // Check if current user owns this answer
      const isMine = auth?.user && answer.user_id === auth.user.id;
      
      // Process replies to ensure they have parent_reply_id
      const processedReplies = (answer.replies || []).map(reply => ({
        ...reply,
        id: reply.id,
        authorName: reply.user?.name || "Anonymous",
        authorType: reply.user?.role || "student",
        isCounselorVerified: reply.is_verified_by_counselor || false,
        relativeTime: getRelativeTime(reply.created_at),
        upvotes: reply.upvotes || 0,
        content: reply.content,
        avatarUrl: reply.user?.avatar || null,
        isHelpful: reply.is_helpful || false,
        isReported: reply.reports && reply.reports.length > 0,
        parent_reply_id: reply.parent_reply_id || null,
        inReplyToName: reply.inReplyToName || reply.in_reply_to_name || null,
        user_id: reply.user_id,
        isMine: reply.user_id === auth?.user?.id || false,
        canDelete: reply.user_id === auth?.user?.id || false,
      }));
      
      return {
        id: answer.id,
        authorName: answer.user?.name || "Anonymous",
        authorType: answer.user?.role || "student",
        isCounselorVerified: answer.is_verified_by_counselor || false,
        relativeTime: getRelativeTime(answer.created_at),
        upvotes: answer.upvotes || 0,
        content: answer.content,
        avatarUrl: answer.user?.avatar || null,
        isHelpful: answer.is_helpful || false,
        isReported: answer.reports && answer.reports.length > 0,
        replies: sortByRole(processedReplies),
        showAllReplies: false,
        isMine: isMine || false,
        canDelete: isMine || false,
        user_id: answer.user_id,
        user: answer.user || {
          name: answer.user?.name || "Anonymous",
          role: answer.user?.role || "student",
          id: answer.user_id,
          avatar: answer.user?.avatar || null
        },
        replies_count: answer.replies_count || processedReplies.length
      };
    });

    setLocalAnswers(initial);
    setQuestionReplyText("");
    setReplyContext(null);
    setReplyInputText("");
    setReportTarget(null);
    setLoginMessage("");

    // Focus on reply textarea if logged in and not own question
    if (isLoggedIn && !isOwnQuestion) {
      setTimeout(() => {
        if (replyTextareaRef.current) {
          replyTextareaRef.current.focus();
        }
      }, 100);
    }

    return () => {
      document.body.classList.remove("forum-modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, thread?.id, answers, auth?.user, isOwnQuestion]);

  if (!thread) return null;

  const dialogTitleId = `thread-dialog-title-${thread.id}`;
  const hasAnswers = localAnswers && localAnswers.length > 0;

  // Extract question info
  const questionContent = thread.content;

  // Handle textarea click when not logged in or own question
  const handleTextareaClick = () => {
    if (!isLoggedIn) {
      showLoginMessage("post a reply");
    } else if (isOwnQuestion) {
      alert("You cannot reply to your own question. Please wait for others to answer.");
    }
  };

  /* -----------------------------
   * REPLY TO QUESTION (top input) - API INTEGRATION
   * --------------------------- */
  const handleSendQuestionReply = async () => {
    if (!isLoggedIn) {
      showLoginMessage("post or reply to questions");
      return;
    }

    if (isOwnQuestion) {
      alert("You cannot reply to your own question. Please wait for others to answer.");
      return;
    }

    const trimmed = questionReplyText.trim();
    if (!trimmed) return;

    setIsSavingQuestionReply(true);

    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      const response = await fetch(`/threads/${thread.id}/replies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken || ''
        },
        body: JSON.stringify({ content: trimmed }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || result.error || 'Failed to save reply');
        return;
      }

      if (result.success && result.answer) {
        const newAnswer = {
          id: result.answer.id,
          authorName: result.answer.user?.name || auth.user.name,
          authorType: result.answer.user?.role || "student",
          isCounselorVerified: result.answer.is_verified_by_counselor || false,
          relativeTime: "Just now",
          upvotes: result.answer.upvotes || 0,
          content: result.answer.content,
          avatarUrl: result.answer.user?.avatar || null,
          isHelpful: result.answer.is_helpful || false,
          isReported: result.answer.reports && result.answer.reports.length > 0,
          replies: [],
          showAllReplies: false,
          isMine: true,
          canDelete: true,
          user_id: auth.user.id,
          user: result.answer.user || {
            name: auth.user.name,
            role: auth.user.role,
            id: auth.user.id,
            avatar: auth.user.avatar
          },
          replies_count: 0
        };
        
        setLocalAnswers((prev) => sortByRole([newAnswer, ...prev]));
        setQuestionReplyText("");
      }

    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsSavingQuestionReply(false);
    }
  };

  /* -----------------------------
   * INLINE REPLY TO ANSWER/REPLY
   * --------------------------- */
  const openInlineReply = (answerIndex, replyId = null, inReplyToName = null) => {
    if (!isLoggedIn) {
      showLoginMessage("reply to answers");
      return;
    }

    const parent = localAnswers[answerIndex];
    
    // Check if user is trying to reply to their own answer
    if (replyId === null && parent?.user_id === auth.user.id) {
      alert("You cannot reply to your own answer.");
      return;
    }
    
    setReplyContext({ answerIndex, replyId, inReplyToName });
    setReplyInputText("");
  };

  const handleSendInlineReply = async (answerIndex, parentReplyId = null) => {
    if (!isLoggedIn) {
      showLoginMessage("reply to answers");
      return;
    }

    const trimmed = replyInputText.trim();
    if (!trimmed) return;

    const parent = localAnswers[answerIndex];
    
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      const payload = {
        content: trimmed,
        answer_id: parent.id,
        parent_reply_id: parentReplyId,
        in_reply_to_name: replyContext?.inReplyToName || null
      };

      const response = await fetch(`/threads/${thread.id}/nested/replies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken || ''
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || result.message || 'Failed to post reply');
        return;
      }

      if (result.success && result.reply) {
        // Add the new reply to state
        setLocalAnswers(prev => prev.map((ans, i) => {
          if (i !== answerIndex) return ans;
          
          const newReply = {
            id: result.reply.id,
            authorName: result.reply.user?.name || auth.user.name,
            authorType: result.reply.user?.role || "student",
            isCounselorVerified: result.reply.is_verified_by_counselor || false,
            relativeTime: "Just now",
            upvotes: result.reply.upvotes || 0,
            content: result.reply.content,
            avatarUrl: result.reply.user?.avatar || null,
            isHelpful: result.reply.is_helpful || false,
            isReported: result.reply.reports && result.reply.reports.length > 0,
            parent_reply_id: parentReplyId,
            inReplyToName: replyContext?.inReplyToName || null,
            user_id: auth.user.id,
            isMine: true,
            canDelete: true,
          };
          
          // Add to replies array
          const updatedReplies = [newReply, ...ans.replies];
          
          return {
            ...ans,
            replies: updatedReplies,
            replies_count: (ans.replies_count || 0) + 1
          };
        }));

        setReplyContext(null);
        setReplyInputText("");
      }

    } catch (error) {
      console.error('Error posting reply:', error);
      alert('Network error. Please check your connection.');
    }
  };

  /* -----------------------------
   * HELPFUL TOGGLE
   * --------------------------- */
  const toggleHelpfulAnswer = async (answerIndex) => {
    if (!isLoggedIn) {
      showLoginMessage("mark answers as helpful");
      return;
    }
    
    const answer = localAnswers[answerIndex];
    const newHelpfulState = !answer.isHelpful;
    
    // Optimistic update
    setLocalAnswers((prev) =>
      prev.map((ans, i) => {
        if (i !== answerIndex) return ans;
        return {
          ...ans,
          isHelpful: newHelpfulState,
          upvotes: ans.upvotes + (newHelpfulState ? 1 : -1),
        };
      })
    );

    // API call to update helpful status
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      const response = await fetch(`/answers/${answer.id}/toggle-helpful`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken || ''
        },
        body: JSON.stringify({ is_helpful: newHelpfulState }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Revert optimistic update on error
        setLocalAnswers((prev) =>
          prev.map((ans, i) => {
            if (i !== answerIndex) return ans;
            return {
              ...ans,
              isHelpful: !newHelpfulState,
              upvotes: ans.upvotes + (newHelpfulState ? -1 : 1),
            };
          })
        );
        alert(result.message || result.error || 'Failed to update helpful status');
      }
    } catch (error) {
      console.error('Network error:', error);
      setLocalAnswers((prev) =>
        prev.map((ans, i) => {
          if (i !== answerIndex) return ans;
          return {
            ...ans,
            isHelpful: !newHelpfulState,
            upvotes: ans.upvotes + (newHelpfulState ? -1 : 1),
          };
        })
      );
      alert('Network error. Please check your connection.');
    }
  };

  const toggleHelpfulReply = async (answerIndex, replyId) => {
    if (!isLoggedIn) {
      showLoginMessage("mark replies as helpful");
      return;
    }
    
    setLocalAnswers(prev =>
      prev.map((ans, i) => {
        if (i !== answerIndex) return ans;
        
        const updatedReplies = ans.replies?.map(reply => {
          if (reply.id === replyId) {
            const isHelpful = !reply.isHelpful;
            return {
              ...reply,
              isHelpful,
              upvotes: (reply.upvotes || 0) + (isHelpful ? 1 : -1)
            };
          }
          return reply;
        }) || [];
        
        return {
          ...ans,
          replies: updatedReplies
        };
      })
    );

    // API call to update helpful status for reply
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      const reply = localAnswers[answerIndex]?.replies?.find(r => r.id === replyId);
      if (!reply) return;
      
      const response = await fetch(`/replies/${replyId}/toggle-helpful`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken || ''
        },
        body: JSON.stringify({ is_helpful: !reply.isHelpful }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Revert optimistic update on error
        setLocalAnswers(prev =>
          prev.map((ans, i) => {
            if (i !== answerIndex) return ans;
            
            const updatedReplies = ans.replies?.map(r => {
              if (r.id === replyId) {
                return {
                  ...r,
                  isHelpful: !r.isHelpful,
                  upvotes: (r.upvotes || 0) + (r.isHelpful ? -1 : 1)
                };
              }
              return r;
            }) || [];
            
            return {
              ...ans,
              replies: updatedReplies
            };
          })
        );
        alert(result.message || result.error || 'Failed to update helpful status');
      }
    } catch (error) {
      console.error('Network error:', error);
      setLocalAnswers(prev =>
        prev.map((ans, i) => {
          if (i !== answerIndex) return ans;
          
          const updatedReplies = ans.replies?.map(r => {
            if (r.id === replyId) {
              return {
                ...r,
                isHelpful: !r.isHelpful,
                upvotes: (r.upvotes || 0) + (r.isHelpful ? -1 : 1)
              };
            }
            return r;
          }) || [];
          
          return {
            ...ans,
            replies: updatedReplies
          };
        })
      );
      alert('Network error. Please check your connection.');
    }
  };

  /* -----------------------------
   * DELETE ANSWER
   * --------------------------- */
  const deleteAnswer = async (answerIndex) => {
    if (!isLoggedIn) {
      showLoginMessage("delete answers");
      return;
    }
    
    const answer = localAnswers[answerIndex];
    
    if (!answer.isMine) {
      alert("You can only delete your own answers");
      return;
    }
    
    if (!window.confirm('Are you sure you want to delete this answer? This action cannot be undone.')) {
      return;
    }
    
    setIsDeleting(true);
    setDeletingId(answer.id);
    
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      const response = await fetch(`/answers/${answer.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken || ''
        },
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || result.error || 'Failed to delete answer');
        return;
      }

      if (result.success) {
        setLocalAnswers(prev => prev.filter((ans, i) => i !== answerIndex));
        
        if (replyContext && replyContext.answerIndex === answerIndex) {
          setReplyContext(null);
          setReplyInputText("");
        }
        
        alert("Answer deleted successfully");
      }

    } catch (error) {
      console.error('Delete error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setIsDeleting(false);
      setDeletingId(null);
    }
  };

  /* -----------------------------
   * DELETE REPLY
   * --------------------------- */
  const deleteReply = async (answerIndex, replyId) => {
    if (!isLoggedIn) {
      showLoginMessage("delete replies");
      return;
    }
    
    if (!window.confirm('Are you sure you want to delete this reply? This action cannot be undone.')) {
      return;
    }
    
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
      
      const response = await fetch(`/threads/${replyId}/nested/replies`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken || '',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          reply_id: replyId
        })
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        alert(result.message || result.error || 'Failed to delete reply');
        return;
      }

      if (result.success) {
        // Update local state only if API call succeeds
        setLocalAnswers(prev => prev.map((ans, i) => {
          if (i !== answerIndex) return ans;
          
          const updatedReplies = ans.replies?.filter(reply => reply.id !== replyId) || [];
          
          return {
            ...ans,
            replies: updatedReplies,
            replies_count: Math.max(0, (ans.replies_count || 0) - 1)
          };
        }));
        
        if (replyContext && replyContext.answerIndex === answerIndex && replyContext.replyId === replyId) {
          setReplyContext(null);
          setReplyInputText("");
        }
        
        alert("Reply deleted successfully");
      }

    } catch (error) {
      console.error('Error deleting reply:', error);
      alert('Error deleting reply: ' + error.message);
    }
  };

  /* -----------------------------
   * REPORT (opens dialog) - FIXED VERSION
   * --------------------------- */
  const openReportAnswer = (answerIndex) => {
    if (!isLoggedIn) {
      showLoginMessage("report content");
      return;
    }
    
    const answer = localAnswers[answerIndex];
    if (answer.isReported) return;
    
    // FIXED: Set proper report target with targetType and questionId
    setReportTarget({ 
      type: "answer", 
      answerIndex, 
      targetId: answer.id, // This should be the answer ID
      targetLabel: "this answer",
      content: answer.content || "",
      targetType: "answer", // Explicitly set targetType
      questionId: answer.id // Pass the target ID as questionId
    });
  };

  const openReportReply = (answerIndex, replyId) => {
    if (!isLoggedIn) {
      showLoginMessage("report content");
      return;
    }
    
    const answer = localAnswers[answerIndex];
    const reply = answer.replies?.find(r => r.id === replyId);
    
    if (reply?.isReported) return;
    
    // FIXED: Set proper report target with targetType and questionId
    setReportTarget({ 
      type: "reply", 
      answerIndex, 
      replyId,
      targetId: replyId, // This should be the reply ID
      targetLabel: "this reply",
      content: reply?.content || "",
      targetType: "reply", // Explicitly set targetType
      questionId: replyId // Pass the target ID as questionId
    });
  };

  const handleConfirmReport = ({ reason, details, targetType, targetId }) => {
    if (!reportTarget) return;

    // Optimistic update - mark as reported in UI
    if (reportTarget.type === "answer") {
      const idx = reportTarget.answerIndex;
      setLocalAnswers((prev) =>
        prev.map((ans, i) =>
          i === idx ? { ...ans, isReported: true } : ans
        )
      );
    } else if (reportTarget.type === "reply") {
      const { answerIndex, replyId } = reportTarget;
      
      setLocalAnswers((prev) =>
        prev.map((ans, i) => {
          if (i !== answerIndex) return ans;
          
          const updatedReplies = ans.replies?.map(reply => {
            if (reply.id === replyId) {
              return { ...reply, isReported: true };
            }
            return reply;
          }) || [];
          
          return {
            ...ans,
            replies: updatedReplies
          };
        })
      );
    }
    
    // Close the report dialog
    setReportTarget(null);
  };

  const handleCloseReportDialog = () => {threadTotalReplies
    setReportTarget(null);
  };

  /* -----------------------------
   * SHOW MORE / FEWER REPLIES
   * --------------------------- */
  const toggleShowAllReplies = (answerIndex) => {
    setLocalAnswers((prev) =>
      prev.map((ans, i) =>
        i === answerIndex
          ? { ...ans, showAllReplies: !ans.showAllReplies }
          : ans
      )
    );
  };

  /* -----------------------------
   * RENDER
   * --------------------------- */
  return (
    <div
      className="forum-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogTitleId}
      onClick={onClose}
    >
      <div
        className="forum-modal-dialog"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="forum-modal-header">
          <div>
            <h2 id={dialogTitleId} className="forum-modal-title">
              {thread.title}
            </h2>
            
            {/* Question content */}
            {questionContent && (
              <div className="forum-modal-question-content mb-3">
                {questionContent.split("\n\n").map((para, idx) => (
                  <p key={idx} className="mb-2">
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn btn-sm btn-light forum-modal-close-btn"
            onClick={onClose}
            aria-label="Close replies"
            disabled={isSavingQuestionReply || isDeleting}
          >
            <X size={16} />
          </button>
        </div>

        {/* Login message alert */}
        {loginMessage && (
          <div className="alert alert-warning mx-3 mt-2 mb-0 py-2">
            <div className="small">{loginMessage}</div>
          </div>
        )}

        {/* TOP: reply to QUESTION */}
        <div className="forum-question-reply-top">
          <textarea
            ref={replyTextareaRef}
            id="forum-question-reply"
            className="form-control forum-reply-textarea"
            rows={2}
            placeholder={
              !isLoggedIn 
                ? "Login to post a reply…"
                : isOwnQuestion 
                  ? "You cannot reply to your own question…"
                  : "Write Your Answer to this question…"
            }
            value={questionReplyText}
            onChange={(e) => setQuestionReplyText(e.target.value)}
            disabled={isSavingQuestionReply || isDeleting || isOwnQuestion}
            onClick={handleTextareaClick}
          />
          <div className="d-flex justify-content-end mt-2">
            <button
              type="button"
              className="btn btn-primary btn-sm forum-reply-submit-btn"
              onClick={handleSendQuestionReply}
              disabled={!questionReplyText.trim() || isSavingQuestionReply || isDeleting || isOwnQuestion}
              title={isOwnQuestion ? "You cannot reply to your own question" : ""}
            >
              {isSavingQuestionReply ? (
                <>
                  <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                  Saving...
                </>
              ) : isOwnQuestion ? (
                "Not Allowed"
              ) : (
                <>
                  <Send size={14} className="me-1" />
                  Send
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable answers body */}
        <div className="forum-modal-body" tabIndex={0}>
          {hasAnswers ? (
            <>
              <p className="forum-modal-answer-count">
                {localAnswers.length} Answer
                {localAnswers.length > 1 ? "s" : ""}
              </p>

              <div className="d-flex flex-column gap-2">
                {localAnswers.map((answer, answerIndex) => {
                  const authorLabel =
                    answer.authorType === "counselor"
                      ? "Counselor"
                      : answer.authorType === "admin"
                      ? "Admin"         
                      : answer.authorType === "parent"
                      ? "Parent"
                      : answer.authorType === "student"
                      ? "Student"
                      : answer.authorType === "teacher"
                      ? "Teacher"
                      : "User";

                  // Check if current user can reply to this answer
                  const canReplyToAnswer = isLoggedIn && answer.user_id !== auth.user.id;

                  // Get all replies and filter root-level replies (no parent)
                  const allReplies = answer.replies || [];
                  const rootReplies = allReplies.filter(reply => !reply.parent_reply_id);
                  
                  // Get visible replies based on showAllReplies
                  const visibleRootReplies = answer.showAllReplies 
                    ? rootReplies 
                    : rootReplies.slice(0, 1);
                  const remainingCount = rootReplies.length - visibleRootReplies.length;

                  return (
                    <article
                      key={answer.id}
                      className={
                        "forum-answer-card" +
                        (answer.authorType === "counselor" &&
                        answer.isCounselorVerified
                          ? " forum-answer-card-expert"
                          : "")
                      }
                    >
                      {/* Answer header */}
                      <div className="forum-answer-header">
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          <AvatarCircle
                            name={answer.authorName}
                            imageUrl={answer.avatarUrl}
                            size={32}
                          />

                          <div className="d-flex flex-column">
                            <span className="forum-answer-author">
                              {answer.authorName}
                            </span>
                            <span className="forum-answer-role">
                              {authorLabel}
                              {answer.authorType === "counselor" &&
                                answer.isCounselorVerified && (
                                  <>
                                    {" "}
                                    ·{" "}
                                    <ShieldCheck
                                      size={13}
                                      className="me-1 text-success"
                                    />
                                    Verified
                                  </>
                                )}
                            </span>
                          </div>
                        </div>

                        {answer.relativeTime && (
                          <span className="forum-answer-time">
                            {answer.relativeTime}
                          </span>
                        )}
                      </div>

                      {/* Answer content */}
                      <div className="forum-answer-body">
                        {answer.content.split("\n\n").map((para, idx) => (
                          <p key={idx} className="mb-2">
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Footer for this answer */}
                      <ReplyFooter
                        item={answer}
                        indexLabel={`Answer #${answerIndex + 1}`}
                        onToggleHelpful={() => toggleHelpfulAnswer(answerIndex)}
                        onReport={() => openReportAnswer(answerIndex)}
                        onReply={() => canReplyToAnswer ? openInlineReply(answerIndex, null, answer.authorName) : () => {}}
                        onDelete={() => deleteAnswer(answerIndex)}
                        isDeleting={isDeleting}
                        isBeingDeleted={deletingId === answer.id}
                        disabledReply={!canReplyToAnswer}
                      />

                      {/* Inline reply form for this answer */}
                      {replyContext &&
                        replyContext.answerIndex === answerIndex &&
                        replyContext.replyId === null && canReplyToAnswer && (
                          <div className="forum-answer-inline-reply">
                            <label
                              htmlFor={`answer-reply-${answer.id}`}
                              className="visually-hidden"
                            >
                              Reply to this answer
                            </label>
                            <textarea
                              id={`answer-reply-${answer.id}`}
                              className="form-control forum-answer-inline-textarea"
                              rows={2}
                              placeholder={
                                replyContext.inReplyToName
                                  ? `Replying to ${replyContext.inReplyToName}…`
                                  : "Reply to this answer…"
                              }
                              value={replyInputText}
                              onChange={(e) =>
                                setReplyInputText(e.target.value)
                              }
                            />
                            <div className="d-flex justify-content-end gap-2 mt-1">
                              <button
                                type="button"
                                className="btn btn-light btn-sm"
                                onClick={() => {
                                  setReplyContext(null);
                                  setReplyInputText("");
                                }}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={() => handleSendInlineReply(answerIndex)}
                                disabled={!replyInputText.trim()}
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        )}

                      {/* Replies group */}
                      {rootReplies.length > 0 && (
                        <div className="forum-answer-replies-group">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <span className="forum-answer-replies-label">
                              Replies ({answer.replies_count || allReplies.length})
                            </span>

                            {rootReplies.length > 1 && (
                              <button
                                type="button"
                                className="btn btn-link btn-sm p-0 forum-answer-replies-toggle"
                                onClick={() =>
                                  toggleShowAllReplies(answerIndex)
                                }
                              >
                                {answer.showAllReplies
                                  ? "Show fewer replies"
                                  : `Show ${remainingCount} more repl${
                                      remainingCount === 1 ? "y" : "ies"
                                    }`}
                              </button>
                            )}
                          </div>

                          <div className="forum-answer-replies-list">
                            {visibleRootReplies.map((reply) => (
                              <NestedReply
                                key={reply.id}
                                reply={reply}
                                depth={0}
                                answerIndex={answerIndex}
                                onReply={openInlineReply}
                                onToggleHelpful={toggleHelpfulReply}
                                onReport={openReportReply}
                                onDelete={deleteReply}
                                replyContext={replyContext}
                                setReplyContext={setReplyContext}
                                replyInputText={replyInputText}
                                setReplyInputText={setReplyInputText}
                                handleSendInlineReply={handleSendInlineReply}
                                canReplyToAnswer={canReplyToAnswer}
                                isLoggedIn={isLoggedIn}
                                auth={auth}
                                allReplies={allReplies}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </>
          ) : (
            <p className="small text-muted mb-3">
              No replies yet. {isLoggedIn ? (isOwnQuestion ? "Waiting for others to answer your question." : "Be the first to answer this question.") : "Login to be the first to answer."}
            </p>
          )}
        </div>

        {/* Report dialog */}
        <ReportDialog
          isOpen={!!reportTarget}
          onClose={handleCloseReportDialog}
          onConfirm={handleConfirmReport}
          targetLabel={reportTarget?.targetLabel}
          questionId={reportTarget?.questionId} // Pass the target ID
          question={reportTarget?.content}
          targetType={reportTarget?.targetType} // Pass the target type explicitly
        />
      </div>
    </div>
  );
}