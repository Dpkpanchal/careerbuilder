

import React, { useState } from "react";
import ForumLayout from "@/Components/Frontend/Forum/ForumLayout";
import ForumTopBar from "@/Components/Frontend/Forum/ForumTopBar";
import ForumTabs from "@/Components/Frontend/Forum/ForumTabs";
import ThreadList from "@/Components/Frontend/Forum/MyQuestions/ThreadList";
import ForumCategorySidebar from "@/Components/Frontend/Forum/ForumCategorySidebar";
import ForumCounselorSidebar from "@/Components/Frontend/Forum/ForumCounselorSidebar";
import FrontendLayout from '@/Layouts/FrontendLayout';
import { THREADS } from "@/data/forum/threads";

export default function ForumHomePage({questions, forumCategory, counsellorsData}) {
   const [threads, setThreads] = useState(questions);
  
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
        // REQUIRED for ThreadList + ThreadCard
        id: now.getTime(),        // unique id
        slug,                     // used in ANSWERS_BY_SLUG[thread.slug]
        title: payload.title,     // used in report dialog & card
  
        // Nice-to-have / likely used in ThreadCard
        categoryLabel: primaryCategoryLabel,
        categoryLabels: payload.categoryLabels,
        categories: payload.categories,
        excerpt: payload.description.slice(0, 180),
        replyCount: 0,
        hasCounselorReply: false,
        createdAt: now.toISOString(),
  
        // Optional flag if you want to style new ones differently
        isNew: true,
      };
  
      setThreads((prev) => [newThread, ...prev]);
    };
  return (
    <FrontendLayout>
        <ForumLayout>
         <ForumTopBar />
   
         <div className="container p-0  mt-lg-2 ">
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
                     <ForumTabs />
                   </div>
   
                   {/* Scrollable thread list area */}
                   <div className="forum-thread-scroll">
                     <ThreadList threads={threads} />
                   </div>
                 </div>
               </div>
   
               {/* RIGHT COLUMN – Counselors */}
               <div className="col-12 col-lg-3 d-none d-lg-block">
                 <div className="card border-0 p-0 shadow-sm forum-side-card">
                   <div className="card-body p-0 forum-side-scroll">
                     <ForumCounselorSidebar counsellorsData={counsellorsData}/>
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
