"use client";

import React, { useState } from "react";
import ThreadCard from "./ThreadCard";
import ThreadRepliesModal from "./ThreadRepliesModal";
import ReportDialog from "@/Components/Frontend/Forum/ReportDialog";
import { ANSWERS_BY_SLUG } from "@/data/forum/answers";

export default function ThreadList({ threads }) {
  const [activeThread, setActiveThread] = useState(null);
  const [activeAnswers, setActiveAnswers] = useState([]);
  const [bookmarkedIds, setBookmarkedIds] = useState(new Set());
  const [reportedIds, setReportedIds] = useState(new Set());

  // report dialog target for questions
  const [reportTarget, setReportTarget] = useState(null);
  // { type: "question", threadId, title }

  const handleViewReplies = (thread, mode = null) => {
    const answers = ANSWERS_BY_SLUG[thread.slug] || [];
    setActiveThread(thread);
    setActiveAnswers(thread.answers);

    // Mode “reply” means focus on reply input
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
    // FIXED: Pass proper report target with targetType and threadId
    setReportTarget({
      type: "question",
      threadId: thread.id,
      targetId: thread.id, // Add targetId
      targetLabel: "this question",
      content: thread.title, // Use title as content
      targetType: "question", // Explicitly set targetType
      title: thread.title
    });
  };

  const handleCloseReportDialog = () => {
    setReportTarget(null);
  };

  const handleConfirmReport = ({ reason, details }) => {
    if (reportTarget?.type === "question") {
      // Mark as reported in UI
      setReportedIds((prev) => {
        const next = new Set(prev);
        next.add(reportTarget.threadId);
        return next;
      });
    }
    // in real app you'd send {reportTarget, reason, details} to backend
    setReportTarget(null);
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

      {/* Global report dialog for questions */}
      <ReportDialog
        isOpen={!!reportTarget}
        onClose={handleCloseReportDialog}
        onConfirm={handleConfirmReport}
        targetLabel={reportTarget?.targetLabel || "this question"}
        questionId={reportTarget?.targetId || reportTarget?.threadId}
        question={reportTarget?.content || reportTarget?.title}
        targetType={reportTarget?.targetType || "question"}
      />
    </>
  );
}