import React, { useState } from "react";
import ThreadCard from "./ThreadCard.jsx";
import ThreadRepliesModal from "./ThreadRepliesModal.jsx";
import ReportDialog from "./ReportDialog";
import { ANSWERS_BY_SLUG } from "@/data/Forum/answers";

export default function ThreadList({ threads }) {
  const [activeThread, setActiveThread] = useState(null);
  const [activeAnswers, setActiveAnswers] = useState([]);
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set());
  const [reportedIds, setReportedIds] = useState(new Set());
  const [reportTarget, setReportTarget] = useState(null);

  const handleViewReplies = (thread, mode = null) => {
    const answers = ANSWERS_BY_SLUG[thread.slug] || [];
    setActiveThread(thread);
    setActiveAnswers(thread.answers);

    if (mode === "reply") {
      setTimeout(() => {
        const el = document.getElementById("forum-question-reply");
        if (el) el.focus();
      }, 150);
    }
  };

  const handleCloseModal = () => {
    setActiveThread(null);
    setActiveAnswers([]);
  };

  const handleToggleBookmark = (threadId) => {
    setBookmarkedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(threadId)) newSet.delete(threadId);
      else newSet.add(threadId);
      return newSet;
    });
  };

  const handleOpenQuestionReport = (thread) => {
    setReportTarget({
      type: "question",
      threadId: thread.id,
      title: thread.title,
    });
  };

  const handleCloseReportDialog = () => {
    setReportTarget(null);
  };

  const handleConfirmReport = ({ reason, details }) => {
    if (reportTarget?.type === "question") {
      setReportedIds((prev) => {
        const next = new Set(prev);
        next.add(reportTarget.threadId);
        return next;
      });
    }
  };

  const enrichedThreads = threads?.map((t) => ({
    ...t,
    isBookmarked: bookmarkedIds.has(t.id),
    isReported: reportedIds.has(t.id),
  }));

  if (!threads || threads.length === 0) {
    return (
      <div className="forum-shell-card text-center py-4">
        <p className="mb-1 fw-semibold">No questions yet.</p>
        <p className="small text-muted mb-0">
          Be the first to ask a question and start a discussion in this forum.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="forum-thread-list">
        {enrichedThreads.map((thread) => (
          <ThreadCard
            key={thread.id}
            thread={thread}
            onViewReplies={() => handleViewReplies(thread)}
            onReply={() => handleViewReplies(thread, "reply")}
            onToggleBookmark={handleToggleBookmark}
            onReportQuestion={() => handleOpenQuestionReport(thread)}
          />
        ))}
      </div>

      {activeThread && (
        <ThreadRepliesModal
          thread={activeThread}
          answers={activeAnswers}
          onClose={handleCloseModal}
        />
      )}

      <ReportDialog
        isOpen={!!reportTarget}
        onClose={handleCloseReportDialog}
        onConfirm={handleConfirmReport}
        targetLabel={
          reportTarget?.type === "question"
            ? "this question"
            : "this content"
        }
        questionId= {reportTarget?.threadId}
        question= {reportTarget?.title}
      />
    </>
  );
}