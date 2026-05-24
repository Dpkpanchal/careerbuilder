

import React, { useState } from "react";
import UserProfile from "@/Components/Frontend/Forum/Profile/UserProfile";
import ForumLayout from "@/Components/Frontend/Forum/ForumLayout";
import ForumTopBar from "@/Components/Frontend/Forum/ForumTopBar";
import ForumTabs from "@/Components/Frontend/Forum/ForumTabs";
import ForumCategorySidebar from "@/Components/Frontend/Forum/ForumCategorySidebar";
import ForumCounselorSidebar from "@/Components/Frontend/Forum/ForumCounselorSidebar";
import FrontendLayout from '@/Layouts/FrontendLayout';

export default function ForumMyRepliesPage({ forumCategory, user,counsellorsData }) {

  // handleAddThread can stay, even if not used right now

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

            {/* CENTER COLUMN – NOW USER PROFILE */}
            <div className="col-12 col-lg-6">
              <div className="forum-center d-flex flex-column">
                  <div className="forum-tabs-sticky">
                    <ForumTabs />
                  </div>
                <div className="forum-profile-wrapper ">
                  <UserProfile user={user}/>
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
