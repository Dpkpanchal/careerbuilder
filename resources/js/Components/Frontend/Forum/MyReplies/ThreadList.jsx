// src/components/forum/MyReplies/ThreadList.jsx

import React, { useState, useMemo } from "react";
import ReplyCard from "./ReplyCard";
import ThreadRepliesModal from "@/Components/Frontend/Forum/MyReplies/ThreadRepliesModal";
import { usePage } from '@inertiajs/react';

export default function MyRepliesThreadList({ replies, counsellor_id }) {
  //console.log("MyRepliesThreadList replies:", replies); // Keep for debugging
  
  // If counsellor_id is provided, use it, otherwise get from auth
  const userId = counsellor_id || usePage().props?.auth?.user?.id;
  const currentUserId = userId;
  
  const [activeThread, setActiveThread] = useState(null);
  const [activeAnswers, setActiveAnswers] = useState([]);
  const [activeReply, setActiveReply] = useState(null);

  // Transform the API data to match the expected format
  const transformedReplies = useMemo(() => {
    if (!replies || !currentUserId) return [];
    
    const result = [];
    
    replies.forEach(question => {
      if (!question || !question.id) return;
      
      // Check user's participation
      const userIsQuestionAuthor = question.user_id == currentUserId; // Use == for type coercion
      const userAnswers = question.answers?.filter(answer => answer.user_id == currentUserId) || [];
      
      // Find user's replies in other answers
      question.answers?.forEach(answer => {
        const repliesToThisAnswer = answer.replies?.filter(reply => reply.user_id == currentUserId) || [];
        repliesToThisAnswer.forEach(reply => {
          result.push({
            id: reply.id,
            threadId: question.id,
            threadSlug: `question-${question.id}`,
            threadTitle: question.title,
            threadExcerpt: question.content?.slice(0, 180) + (question.content?.length > 180 ? "..." : ""),
            threadHasCounselorReply: question.answers?.some(a => a.user?.role === "counselor"),
            threadTotalReplies: (question.answers || []).reduce((total, ans) => total + (ans.replies?.length || 0), 0),
            replyContent: reply.content,
            replyRelativeTime: formatRelativeTime(reply.created_at),
            authorName: reply.user?.name || "You",
            authorType: reply.user?.role || "user",
            isQuestionAuthor: false,
            isAnswerAuthor: false,
            isReplyAuthor: true,
            parentAnswerContent: answer.content,
            parentAnswerAuthor: answer.user?.name,
            created_at: reply.created_at
          });
        });
      });
      
      // Create entries for user's answers
      userAnswers.forEach(answer => {
        result.push({
          id: answer.id,
          threadId: question.id,
          threadSlug: `question-${question.id}`,
          threadTitle: question.title,
          threadExcerpt: question.content?.slice(0, 180) + (question.content?.length > 180 ? "..." : ""),
          threadHasCounselorReply: question.answers?.some(a => a.user?.role === "counselor"),
          threadTotalReplies: (question.answers || []).reduce((total, ans) => total + (ans.replies?.length || 0), 0),
          replyContent: answer.content,
          replyRelativeTime: formatRelativeTime(answer.created_at),
          authorName: answer.user?.name || "You",
          authorType: answer.user?.role || "user",
          isQuestionAuthor: false,
          isAnswerAuthor: true,
          isReplyAuthor: false,
          created_at: answer.created_at
        });
      });
      
      // Create entry if user is question author
      if (userIsQuestionAuthor) {
        result.push({
          id: question.id,
          threadId: question.id,
          threadSlug: `question-${question.id}`,
          threadTitle: question.title,
          threadExcerpt: question.content?.slice(0, 180) + (question.content?.length > 180 ? "..." : ""),
          threadHasCounselorReply: question.answers?.some(a => a.user?.role === "counselor"),
          threadTotalReplies: (question.answers || []).reduce((total, ans) => total + (ans.replies?.length || 0), 0),
          replyContent: question.content,
          replyRelativeTime: formatRelativeTime(question.created_at),
          authorName: question.user?.name || "You",
          authorType: question.user?.role || "user",
          isQuestionAuthor: true,
          isAnswerAuthor: false,
          isReplyAuthor: false,
          created_at: question.created_at
        });
      }
    });
    
    // Sort by most recent using created_at
    return result.sort((a, b) => {
      const dateA = new Date(a.created_at || a.replyRelativeTime || 0);
      const dateB = new Date(b.created_at || b.replyRelativeTime || 0);
      return dateB - dateA;
    });
  }, [replies, currentUserId]);

  const handleOpenThread = (replyData) => {
    // Find the original question
    const originalQuestion = replies.find(q => q.id === replyData.threadId);
    if (!originalQuestion) return;
    
    // Prepare answers for the modal
    const answers = originalQuestion.answers?.map(answer => ({
      id: answer.id,
      user: answer.user || {
        name: answer.user?.name || "Anonymous",
        role: answer.user?.role || "user",
        id: answer.user_id,
        avatar: answer.user?.avatar
      },
      user_id: answer.user_id,
      isCounselorVerified: answer.is_verified_by_counselor || false,
      relativeTime: formatRelativeTime(answer.created_at),
      upvotes: answer.upvotes || 0,
      content: answer.content,
      avatarUrl: answer.user?.avatar || null,
      isHelpful: false,
      isReported: answer.reports && answer.reports.length > 0,
      isMine: answer.user_id == currentUserId,
      canDelete: answer.user_id == currentUserId,
      showAllReplies: false,
      created_at: answer.created_at,
      authorName: answer.user?.name,
      authorType: answer.user?.role,
      replies: (answer.replies || []).map(reply => ({
        id: reply.id,
        user: reply.user || {
          name: reply.user?.name || "Anonymous",
          role: reply.user?.role || "user",
          id: reply.user_id,
          avatar: reply.user?.avatar
        },
        user_id: reply.user_id,
        isCounselorVerified: false,
        relativeTime: formatRelativeTime(reply.created_at),
        upvotes: 0,
        content: reply.content,
        avatarUrl: reply.user?.avatar || null,
        isHelpful: false,
        isReported: false,
        isMine: reply.user_id == currentUserId,
        canDelete: reply.user_id == currentUserId,
        parent_reply_id: null,
        inReplyToName: null,
        created_at: reply.created_at,
        authorName: reply.user?.name,
        authorType: reply.user?.role,
      })),
      replies_count: answer.replies_count || answer.replies?.length || 0
    })) || [];

    setActiveThread({
      id: originalQuestion.id,
      slug: `question-${originalQuestion.id}`,
      title: originalQuestion.title,
      content: originalQuestion.content,
      categoryLabel: Array.isArray(originalQuestion.category_id) 
        ? originalQuestion.category_id.join(", ") 
        : originalQuestion.category_id || "General",
      hasCounselorReply: originalQuestion.answers?.some(a => a.user?.role === "counselor"),
      excerpt: originalQuestion.content?.slice(0, 180) + (originalQuestion.content?.length > 180 ? "..." : ""),
      user: originalQuestion.user,
      user_id: originalQuestion.user_id,
      created_at: originalQuestion.created_at,
    });

    setActiveAnswers(answers);
    setActiveReply(replyData);
  };

  const handleCloseModal = () => {
    setActiveThread(null);
    setActiveAnswers([]);
    setActiveReply(null);
  };

  if (!transformedReplies || transformedReplies.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-muted">You haven't participated in any discussions yet.</p>
      </div>
    );
  }

  return (
    <>
      <div className="forum-thread-list">
        {transformedReplies.map((reply) => (
          <ReplyCard
            key={`${reply.id}-${reply.isQuestionAuthor ? 'question' : reply.isAnswerAuthor ? 'answer' : 'reply'}`}
            reply={reply}
            onViewThread={() => handleOpenThread(reply)}
            counsellor_id={counsellor_id}
          />
        ))}
      </div>

      {activeThread && (
        <ThreadRepliesModal
          thread={replies}
          answers={activeAnswers}
          onClose={handleCloseModal}
          myReplyContent={activeReply?.replyContent}
        />
      )}
    </>
  );
}

// Helper function to format relative time
function formatRelativeTime(dateString) {
  if (!dateString) return "Some time ago";
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Some time ago";
  
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  
  if (diffSec < 60) return "Just now";
  if (diffMin < 60) return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
  if (diffHour < 24) return `${diffHour} hour${diffHour !== 1 ? 's' : ''} ago`;
  if (diffDay < 7) return `${diffDay} day${diffDay !== 1 ? 's' : ''} ago`;
  
  return date.toLocaleDateString();
}