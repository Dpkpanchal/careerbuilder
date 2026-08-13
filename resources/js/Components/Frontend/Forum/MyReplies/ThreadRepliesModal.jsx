// src/components/forum/ThreadRepliesModal.jsx

import React, { useEffect, useRef, useState } from "react";
import { X, ShieldCheck, ThumbsUp, Flag, Trash2 } from "lucide-react";
import AvatarCircle from "@/Components/Frontend/Forum/AvatarCircle";
import ReportDialog from "@/Components/Frontend/Forum/ReportDialog";

/**
 * Helper: rank by role so we can sort counselor replies on top
 */
function getRoleRank(item) {
  if (item.authorType === "counselor" && item.isCounselorVerified) return 0;
  if (item.authorType === "counselor") return 1;
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
 * Transform API answer data to component format
 */
function transformAnswerData(apiAnswer, currentUserId = null) {
  if (!apiAnswer) return null;
  
  const isMine = currentUserId ? apiAnswer.user_id === currentUserId : false;
  
  // Format relative time from created_at
  const formatRelativeTime = (dateString) => {
    if (!dateString) return "Recently";
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      
      if (diffMins < 1) return "Just now";
      if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
      if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
      if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
      
      return date.toLocaleDateString();
    } catch (e) {
      return "Recently";
    }
  };
  
  return {
    id: apiAnswer.id,
    authorId: apiAnswer.user_id,
    authorName: apiAnswer.user?.name || "Unknown User",
    authorType: apiAnswer.user?.role || "student", // counselor, parent, student
    isCounselorVerified: apiAnswer.is_verified_by_counselor || false,
    relativeTime: formatRelativeTime(apiAnswer.created_at),
    upvotes: apiAnswer.upvotes || 0,
    content: apiAnswer.content || "",
    avatarUrl: apiAnswer.user?.avatar || null,
    isHelpful: false, // Initialize as false
    isReported: (apiAnswer.reports && apiAnswer.reports.length > 0) || false,
    canDelete: isMine,
    isMine: isMine,
    // Replies from API (empty array initially)
    replies: (apiAnswer.replies || []).map(reply => ({
      id: reply.id,
      authorId: reply.user_id,
      authorName: reply.user?.name || "Unknown User",
      authorType: reply.user?.role || "student",
      isCounselorVerified: reply.is_verified_by_counselor || false,
      relativeTime: formatRelativeTime(reply.created_at),
      upvotes: reply.upvotes || 0,
      content: reply.content || "",
      avatarUrl: reply.user?.avatar || null,
      isHelpful: false,
      isReported: (reply.reports && reply.reports.length > 0) || false,
      canDelete: currentUserId ? reply.user_id === currentUserId : false,
      isMine: currentUserId ? reply.user_id === currentUserId : false,
      inReplyToName: reply.inReplyToName || null
    }))
  };
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
  showHelpful = true,
  showReport = true,
  showReply = true,
}) {
  const canDelete =
    item.canDelete === true ||
    item.isMine === true ||
    item.authorName === "You";

  const hasAnyActions = showHelpful || showReport || showReply || canDelete;
  if (!hasAnyActions) return null;

  return (
    <div className="forum-answer-footer">
      <div className="d-flex align-items-center flex-wrap gap-2">
        {/* Helpful */}
        {showHelpful && (
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
        )}

        {/* Report */}
        {showReport && (
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
          >
            <Flag size={13} className="me-1" />
            {item.isReported ? "Reported" : "Report"}
          </button>
        )}

        {/* Reply */}
        {showReply && (
          <button
            type="button"
            className="btn btn-sm btn-link p-0 forum-answer-reply-btn"
            onClick={onReply}
          >
            Reply
          </button>
        )}

        {/* Delete (only for own replies) */}
        {canDelete && (
          <button
            type="button"
            className="btn btn-sm btn-link p-0 forum-answer-delete-btn"
            onClick={onDelete}
          >
            <Trash2 size={13} className="ms-2" />
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

export default function ThreadRepliesModal({
  thread, // This is coming as an array with one object
  answers, // This is the answers array from props
  onClose,
  myReplyContent, 
}) {


  const dialogRef = useRef(null);

  console.log('hello thread', thread);

  const [localAnswers, setLocalAnswers] = useState([]);
  const [questionReplyText, setQuestionReplyText] = useState("");
  const [actualThread, setActualThread] = useState(null);

  // Inline reply context (one-level, grouped under an answer)
  const [replyContext, setReplyContext] = useState(null);
  const [replyInputText, setReplyInputText] = useState("");

  // Report dialog target
  const [reportTarget, setReportTarget] = useState(null);

  // Lock scroll + ESC + initialize answers
  useEffect(() => {
    document.body.classList.add("forum-modal-open");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Extract thread from array if it's an array
    let threadData = thread;
    if (Array.isArray(thread) && thread.length > 0) {
      threadData = thread[0];
      setActualThread(threadData);
    } else if (thread && !Array.isArray(thread)) {
      setActualThread(thread);
    }

    // Transform answers data if it's in API format
    let transformedAnswers = [];
    if (answers && answers.length > 0) {
      // Check if answers are in API format (has user_id, user object)
      const isApiFormat = answers[0] && typeof answers[0] === 'object' && 'user_id' in answers[0];
      
      if (isApiFormat) {
        transformedAnswers = answers.map(answer => transformAnswerData(answer));
      } else {
        // Already in component format
        transformedAnswers = answers;
      }
    }

    const initial = sortByRole(transformedAnswers || []).map((a) => ({
      ...a,
      isHelpful: a.isHelpful || false,
      isReported: a.isReported || false,
      upvotes: typeof a.upvotes === "number" ? a.upvotes : 0,
      replies: sortByRole(a.replies || []).map((r) => ({
        ...r,
        isHelpful: r.isHelpful || false,
        isReported: r.isReported || false,
        upvotes: typeof r.upvotes === "number" ? r.upvotes : 0,
      })),
      showAllReplies: false,
    }));

    setLocalAnswers(initial);
    setQuestionReplyText("");
    setReplyContext(null);
    setReplyInputText("");
    setReportTarget(null);

    return () => {
      document.body.classList.remove("forum-modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, thread, answers]);

  if (!actualThread) return null;

  const dialogTitleId = `thread-dialog-title-${actualThread.id}`;
  const hasAnswers = localAnswers && localAnswers.length > 0;

  // ---------- My Replies mode: find which answer is "my reply" ----------
  const trimmedMyReply = myReplyContent ? myReplyContent.trim() : null;
  let myAnswerIndex = -1;

  if (trimmedMyReply && localAnswers.length > 0) {
    // exact match
    myAnswerIndex = localAnswers.findIndex(
      (a) => a.content && a.content.trim() === trimmedMyReply
    );

    // fallback: partial match on first ~20 chars
    if (myAnswerIndex === -1) {
      const snippet = trimmedMyReply.slice(0, 20);
      myAnswerIndex = localAnswers.findIndex(
        (a) => a.content && a.content.startsWith(snippet)
      );
    }
  }

  const inMyRepliesMode = myAnswerIndex >= 0;

  /* -----------------------------
   * REPLY TO QUESTION (top input)
   * --------------------------- */
  const handleSendQuestionReply = () => {
    const trimmed = questionReplyText.trim();
    if (!trimmed) return;

    const newAnswer = {
      id: Date.now(),
      authorName: "You",
      authorType: "student",
      isCounselorVerified: false,
      relativeTime: "Just now",
      upvotes: 0,
      content: trimmed,
      avatarUrl: null,
      isHelpful: false,
      isReported: false,
      replies: [],
      showAllReplies: false,
      isMine: true,
    };

    setLocalAnswers((prev) => sortByRole([newAnswer, ...prev]));
    setQuestionReplyText("");
  };

  /* -----------------------------
   * INLINE REPLY TO ANSWER/REPLY
   * --------------------------- */
  const openInlineReply = (answerIndex, replyIndex = null) => {
    const parent = localAnswers[answerIndex];
    let inReplyToName = parent?.authorName || "";
    if (replyIndex !== null && parent && parent.replies[replyIndex]) {
      inReplyToName = parent.replies[replyIndex].authorName;
    }

    setReplyContext({ answerIndex, replyIndex, inReplyToName });
    setReplyInputText("");
  };

  const handleSendInlineReply = () => {
    if (!replyContext) return;
    const trimmed = replyInputText.trim();
    if (!trimmed) return;

    const { answerIndex, inReplyToName } = replyContext;

    setLocalAnswers((prev) =>
      prev.map((ans, i) => {
        if (i !== answerIndex) return ans;

        const newReply = {
          id: Date.now(),
          authorName: "You",
          authorType: "student",
          isCounselorVerified: false,
          relativeTime: "Just now",
          upvotes: 0,
          content: trimmed,
          avatarUrl: null,
          isHelpful: false,
          isReported: false,
          isMine: true,
          inReplyToName: inReplyToName || undefined,
        };

        const updatedReplies = sortByRole([newReply, ...(ans.replies || [])]);

        return {
          ...ans,
          replies: updatedReplies,
        };
      })
    );

    setReplyContext(null);
    setReplyInputText("");
  };

  /* -----------------------------
   * HELPFUL TOGGLE
   * --------------------------- */
  const toggleHelpfulAnswer = (answerIndex) => {
    setLocalAnswers((prev) =>
      prev.map((ans, i) => {
        if (i !== answerIndex) return ans;
        const isHelpful = !ans.isHelpful;
        return {
          ...ans,
          isHelpful,
          upvotes: ans.upvotes + (isHelpful ? 1 : -1),
        };
      })
    );
  };

  const toggleHelpfulReply = (answerIndex, replyIndex) => {
    setLocalAnswers((prev) =>
      prev.map((ans, i) => {
        if (i !== answerIndex) return ans;
        const replies = ans.replies.map((rep, j) => {
          if (j !== replyIndex) return rep;
          const isHelpful = !rep.isHelpful;
          return {
            ...rep,
            isHelpful,
            upvotes: rep.upvotes + (isHelpful ? 1 : -1),
          };
        });
        return { ...ans, replies };
      })
    );
  };

  /* -----------------------------
   * DELETE ANSWER / REPLY
   * --------------------------- */
  const deleteAnswer = (answerIndex) => {
    setLocalAnswers((prev) => prev.filter((_, i) => i !== answerIndex));
    if (replyContext && replyContext.answerIndex === answerIndex) {
      setReplyContext(null);
      setReplyInputText("");
    }
  };

  const deleteReply = (answerIndex, replyIndex) => {
    setLocalAnswers((prev) =>
      prev.map((ans, i) => {
        if (i !== answerIndex) return ans;
        const replies = ans.replies.filter((_, j) => j !== replyIndex);
        return { ...ans, replies };
      })
    );
    if (
      replyContext &&
      replyContext.answerIndex === answerIndex &&
      replyContext.replyIndex === replyIndex
    ) {
      setReplyContext(null);
      setReplyInputText("");
    }
  };

  /* -----------------------------
   * REPORT (opens dialog)
   * --------------------------- */
  const openReportAnswer = (answerIndex) => {
    const answer = localAnswers[answerIndex];
    if (answer.isReported) return;
    setReportTarget({ type: "answer", answerIndex });
  };

  const openReportReply = (answerIndex, replyIndex) => {
    const reply = localAnswers[answerIndex].replies[replyIndex];
    if (reply.isReported) return;
    setReportTarget({ type: "reply", answerIndex, replyIndex });
  };

  const handleConfirmReport = ({ reason, details }) => {
    if (!reportTarget) return;

    if (reportTarget.type === "answer") {
      const idx = reportTarget.answerIndex;
      setLocalAnswers((prev) =>
        prev.map((ans, i) =>
          i === idx ? { ...ans, isReported: true } : ans
        )
      );
    } else if (reportTarget.type === "reply") {
      const { answerIndex, replyIndex } = reportTarget;
      setLocalAnswers((prev) =>
        prev.map((ans, i) => {
          if (i !== answerIndex) return ans;
          const replies = ans.replies.map((rep, j) =>
            j === replyIndex ? { ...rep, isReported: true } : rep
          );
          return { ...ans, replies };
        })
      );
    }
  };

  const handleCloseReportDialog = () => {
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
        {/* Header: question title + description */}
        <div className="forum-modal-header">
          <div>
            <h2 id={dialogTitleId} className="forum-modal-title">
              {actualThread.title}
            </h2>
            {actualThread.excerpt ? (
              <p className="forum-modal-question-text-header mb-0">
                {actualThread.excerpt}
              </p>
            ) : actualThread.content ? (
              <p className="forum-modal-question-text-header mb-0">
                {actualThread.content}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            className="btn btn-sm btn-light forum-modal-close-btn"
            onClick={onClose}
            aria-label="Close replies"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable answers body */}
        <div className="forum-modal-body" tabIndex={0}>
          {hasAnswers ? (
            <>
              <p className="forum-modal-answer-count">
                {localAnswers.length} Answer
                {localAnswers.length > 1 ? "s" : ""} in this thread
              </p>

              {inMyRepliesMode && (
                <p className="small text-muted mb-2">
                  Showing your answer and replies to your answer.
                </p>
              )}

              <div className="d-flex flex-column gap-2">
                {localAnswers.map((answer, answerIndex) => {
                  // In My Replies mode: only show my answer block
                  if (inMyRepliesMode && answerIndex !== myAnswerIndex) {
                    return null;
                  }

                  // ---- Dynamic Replies to this answer ----
                  const baseReplies = answer.replies || [];
                  
                  // REMOVED the static replies injection
                  // Replies will be dynamic based on user interaction

                  const visibleReplies = answer.showAllReplies
                    ? baseReplies
                    : baseReplies.slice(0, 1);
                  const remainingCount =
                    baseReplies.length - visibleReplies.length;

                  const authorLabel =
                    answer.authorType === "counselor"
                      ? "Counselor"
                      : answer.authorType === "parent"
                      ? "Parent"
                      : answer.authorType === "student"
                      ? "Student"
                      : "User";

                  const isMyAnswer =
                    inMyRepliesMode && answerIndex === myAnswerIndex;

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
                        onReply={() => openInlineReply(answerIndex, null)}
                        onDelete={() => deleteAnswer(answerIndex)}
                        showHelpful={true}
                        showReport={!isMyAnswer} // ❗ no Report on my own answer
                        showReply={!isMyAnswer}  // ❗ no Reply on my own answer
                      />

                      {/* Inline reply form for this answer */}
                      {replyContext &&
                        replyContext.answerIndex === answerIndex &&
                        replyContext.replyIndex === null && (
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
                                onClick={handleSendInlineReply}
                                disabled={!replyInputText.trim()}
                                aria-disabled={!replyInputText.trim()}
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        )}

                      {/* Replies group (nested replies) - only if there are replies */}
                      {baseReplies.length > 0 && (
                        <div className="forum-answer-replies-group">
                          <div className="d-flex align-items-center justify-content-between mb-1">
                            <span className="forum-answer-replies-label">
                              Replies ({baseReplies.length})
                            </span>

                            {baseReplies.length > 1 && (
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
                            {visibleReplies.map((rep, replyIndex) => {
                              const repAuthorLabel =
                                rep.authorType === "counselor"
                                  ? "Counselor"
                                  : rep.authorType === "parent"
                                  ? "Parent"
                                  : rep.authorType === "student"
                                  ? "Student"
                                  : "User";

                              const globalReplyIndex = replyIndex;

                              const isInlineForThisReply =
                                replyContext &&
                                replyContext.answerIndex === answerIndex &&
                                replyContext.replyIndex === replyIndex;

                              return (
                                <article
                                  key={rep.id}
                                  className={
                                    "forum-answer-card forum-answer-card-nested" +
                                    (rep.authorType === "counselor" &&
                                    rep.isCounselorVerified
                                      ? " forum-answer-card-expert"
                                      : "")
                                  }
                                >
                                  <div className="forum-answer-header">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                      <AvatarCircle
                                        name={rep.authorName}
                                        imageUrl={rep.avatarUrl}
                                        size={28}
                                      />

                                      <div className="d-flex flex-column">
                                        <span className="forum-answer-author">
                                          {rep.authorName}
                                        </span>
                                        <span className="forum-answer-role">
                                          {repAuthorLabel}
                                          {rep.authorType === "counselor" &&
                                            rep.isCounselorVerified && (
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
                                          {rep.inReplyToName && (
                                            <>
                                              {" "}
                                              ·{" "}
                                              <span className="forum-answer-inreply">
                                                replying to{" "}
                                                {rep.inReplyToName}
                                              </span>
                                            </>
                                          )}
                                        </span>
                                      </div>
                                    </div>

                                    {rep.relativeTime && (
                                      <span className="forum-answer-time">
                                        {rep.relativeTime}
                                      </span>
                                    )}
                                  </div>

                                  <div className="forum-answer-body">
                                    {rep.content
                                      .split("\n\n")
                                      .map((para, idx2) => (
                                        <p key={idx2} className="mb-2">
                                          {para}
                                        </p>
                                      ))}
                                  </div>

                                  <ReplyFooter
                                    item={rep}
                                    indexLabel={null}
                                    onToggleHelpful={() =>
                                      toggleHelpfulReply(
                                        answerIndex,
                                        globalReplyIndex
                                      )
                                    }
                                    onReport={() =>
                                      openReportReply(
                                        answerIndex,
                                        globalReplyIndex
                                      )
                                    }
                                    onReply={() =>
                                      openInlineReply(
                                        answerIndex,
                                        globalReplyIndex
                                      )
                                    }
                                    onDelete={() =>
                                      deleteReply(
                                        answerIndex,
                                        globalReplyIndex
                                      )
                                    }
                                    // For other people's replies to your answer:
                                    // full footer: helpful + report + reply
                                    showHelpful={true}
                                    showReport={true}
                                    showReply={true}
                                  />

                                  {isInlineForThisReply && (
                                    <div className="forum-answer-inline-reply">
                                      <label
                                        htmlFor={`nested-reply-${rep.id}`}
                                        className="visually-hidden"
                                      >
                                        Reply to this reply
                                      </label>
                                      <textarea
                                        id={`nested-reply-${rep.id}`}
                                        className="form-control forum-answer-inline-textarea"
                                        rows={2}
                                        placeholder={
                                          replyContext.inReplyToName
                                            ? `Replying to ${replyContext.inReplyToName}…`
                                            : "Reply…"
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
                                          onClick={handleSendInlineReply}
                                          disabled={!replyInputText.trim()}
                                          aria-disabled={!replyInputText.trim()}
                                        >
                                          Reply
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </article>
                              );
                            })}
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
              No replies yet. Be the first to answer this question.
            </p>
          )}
        </div>

        {/* Report dialog (for answers and replies) */}
        <ReportDialog
          isOpen={!!reportTarget}
          onClose={handleCloseReportDialog}
          onConfirm={handleConfirmReport}
          targetLabel={
            reportTarget?.type === "answer"
              ? "this answer"
              : "this reply"
          }
        />
      </div>
    </div>
  );
}