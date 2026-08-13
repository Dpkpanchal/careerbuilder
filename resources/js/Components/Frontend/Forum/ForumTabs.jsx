import React, { useEffect, useState } from "react";
import { usePage, router } from '@inertiajs/react';

const TABS = [
  {
    key: "timeline",
    label: "Timeline",
    href: "/forum",
  },
  {
    key: "my-questions",
    label: "My Questions",
    href: "/forum/my-questions",
  },
  {
    key: "replies",
    label: "Replies",
    href: "/forum/replies",
  },
  {
    key: "bookmarked",
    label: "Bookmarked",
    href: "/forum/bookmarked",
  },
  {
    key: "profile",
    label: "Profile",
    href: "/forum/profile",
  },
];

export default function ForumTabs({ counselorName }) {
  console.log("ForumTabs counselorName:", counselorName); // Debug log
  const { url, props } = usePage();
  //console.log('Current URL in ForumTabs:', url);
  const user = props.auth?.user;
  
  // Check if URL has counsellor_id parameter
  const urlParams = new URLSearchParams(window.location.search);
  const counsellorId = urlParams.get('counsellor_id');
  const hasCounselorParam = Boolean(counsellorId);
  
  // State for counselor name
  const [counselorDisplayName, setCounselorDisplayName] = useState(counselorName || 'Counselor');
  
  // Fetch counselor name if not passed as prop
  useEffect(() => {
    if (hasCounselorParam && !counselorName) {
      // You can fetch counselor details here if needed
      // Example: fetch(`/api/counselors/${counsellorId}`)
      //   .then(res => res.json())
      //   .then(data => setCounselorDisplayName(data.name))
      
      // For now, use a placeholder
      setCounselorDisplayName(counselorName || 'Counselor');
    } else if (counselorName) {
      setCounselorDisplayName(counselorName);
    }
  }, [counsellorId, counselorName, hasCounselorParam]);
  
  // Clean the current path
  let currentPath = url.split('?')[0];
  // Ensure it doesn't end with slash (except for root)
  if (currentPath !== '/' && currentPath.endsWith('/')) {
    currentPath = currentPath.slice(0, -1);
  }
  
  // Determine which tabs to show
  let visibleTabs;
  
  if (hasCounselorParam) {
    // When there's a counselor_id parameter, show only "Replies" tab with custom label
    visibleTabs = [
      {
        key: "replies",
        label: `${counselorDisplayName}'s replies`,
        href: `/forum/replies?counsellor_id=${counsellorId}`,
      }
    ];
  } else {
    // Normal behavior
    visibleTabs = user
      ? TABS
      : TABS.filter(tab => tab.key === "timeline");
  }

  const handleTabClick = (e, href) => {
    e.preventDefault();
    router.visit(href, {
      preserveScroll: true,
      //preserveState: true,
    });
  };

  return (
    <div className="forum-tabs" role="tablist" aria-label="Forum sections">
      {visibleTabs.map((tab) => {
        let isActive = false;
        
        // Clean the tab href (remove query params for comparison)
        let tabHref = tab.href.split('?')[0];
        if (tabHref !== '/' && tabHref.endsWith('/')) {
          tabHref = tabHref.slice(0, -1);
        }
        
        // Check for active state
        if (hasCounselorParam) {
          // When viewing counselor replies, only the replies tab is active
          isActive = true; // Since we only show one tab, it's always active
        } else if (tab.key === "timeline") {
          // Timeline is active for /forum and /forum/
          isActive = currentPath === "/forum" || currentPath === "/forum/";
        } else {
          // Other tabs need exact match
          isActive = currentPath === tabHref;
        }

        return (
          <button
            key={tab.key}
            onClick={(e) => handleTabClick(e, tab.href)}
            className={`forum-tab-btn ${isActive ? "active" : ""}`}
            role="tab"
            aria-selected={isActive}
          >
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}