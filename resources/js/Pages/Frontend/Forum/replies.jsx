import React, { useState, useMemo } from "react";
import ForumLayout from "@/Components/Frontend/Forum/ForumLayout";
import ForumTopBar from "@/components/Frontend/Forum/ForumTopBar";
import ForumTabs from "@/components/Frontend/Forum/ForumTabs";
import MyRepliesThreadList from "@/Components/Frontend/Forum/MyReplies/ThreadList";
import ForumCategorySidebar from "@/Components/Frontend/Forum/ForumCategorySidebar";
import ForumCounselorSidebar from "@/Components/Frontend/Forum/ForumCounselorSidebar";
import FrontendLayout from '@/Layouts/FrontendLayout';
import { usePage } from '@inertiajs/react';

export default function ForumMyRepliesPage({ questions, forumCategory, counselorName = null, counsellor_id = null, counsellorsData }) {
  //console.log("ForumMyRepliesPage questions:", questions); // Debug log
  const { auth } = usePage().props;
  
  // Use counsellor_id if provided, otherwise use current user id from auth
  const currentUserId = counsellor_id || auth?.user?.id;
  
  // Filter to show only questions where the user has participated
  const filteredQuestions = useMemo(() => {
    if (!currentUserId) return [];
    
    return questions.filter(question => {
      const userParticipatedInQuestion = 
        // User is the question author
        question.user_id == currentUserId || // Use == for type coercion
        // User has answered this question
        question.answers?.some(answer => answer.user_id == currentUserId) ||
        // User has replied to an answer in this question
        question.answers?.some(answer => 
          answer.replies?.some(reply => reply.user_id == currentUserId)
        );
      
      return userParticipatedInQuestion;
    });
  }, [questions, currentUserId]);
  
  // Filter answers to show only user's answers and replies
  const filteredQuestionsWithUserContent = useMemo(() => {
    if (!currentUserId) return filteredQuestions;
    
    return filteredQuestions.map(question => {
      // Filter answers: keep only user's answers or answers that have user's replies
      const filteredAnswers = question.answers?.filter(answer => {
        const isUsersAnswer = answer.user_id == currentUserId; // Use == for type coercion
        const hasUsersReply = answer.replies?.some(reply => reply.user_id == currentUserId);
        
        return isUsersAnswer || hasUsersReply;
      }).map(answer => {
        // If this answer has replies, filter to show only user's replies
        if (answer.replies?.length > 0) {
          return {
            ...answer,
            replies: answer.replies.filter(reply => reply.user_id == currentUserId)
          };
        }
        return answer;
      });
      
      return {
        ...question,
        answers: filteredAnswers || []
      };
    });
  }, [filteredQuestions, currentUserId]);

  const [threads, setThreads] = useState(filteredQuestionsWithUserContent);
  
  const handleAddThread = (payload) => {
    const now = new Date();

    // Simple slug from title
    const slugBase = payload.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const slug = `${slugBase}-${now.getTime()}`;

    const primaryCategoryLabel = payload.categoryLabels?.[0] || "General";

    const newThread = {
      id: now.getTime(),
      slug,
      title: payload.title,
      categoryLabel: primaryCategoryLabel,
      categoryLabels: payload.categoryLabels,
      categories: payload.categories,
      excerpt: payload.description.slice(0, 180),
      replyCount: 0,
      hasCounselorReply: false,
      createdAt: now.toISOString(),
      isNew: true,
    };

    setThreads((prev) => [newThread, ...prev]);
  };
  
  return (
    <FrontendLayout>
    <ForumLayout>
      <ForumTopBar />
      
        <div className="container p-0 mt-lg-2 ">
          <div
            className="forum-shell position-sticky"
            style={{ top: "80px", zIndex: 10 }}
          >
            <div className="row g-0">
              {/* LEFT COLUMN – Categories */}
              <div className="col-12 col-lg-3 d-none d-lg-block">
                <div className="card border-0 shadow-sm forum-side-card">
                  <div className="card-body p-0 forum-side-scroll">
                    <ForumCategorySidebar forumCategory={forumCategory} />
                  </div>
                </div>
              </div>

              {/* CENTER COLUMN – Ask box + Tabs sticky + Threads scroll */}
              <div className="col-12 col-lg-6">
                <div className="forum-center d-flex flex-column">

                  {/* Tabs fixed at top inside center column */}
                  <div className="forum-tabs-sticky">
                    <ForumTabs counselorName={counselorName} />
                  </div>

                  {/* Scrollable thread list area */}
                  <div className="forum-thread-scroll">
                    {/* Show filtered questions */}
                    <MyRepliesThreadList replies={threads} counsellor_id={counsellor_id} />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN – Counselors */}
              <div className="col-12 col-lg-3 d-none d-lg-block">
                <div className="card border-0 p-0 shadow-sm forum-side-card">
                  <div className="card-body p-0 forum-side-scroll">
                    <ForumCounselorSidebar counsellorsData={counsellorsData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </ForumLayout>
    </FrontendLayout>
  );
}