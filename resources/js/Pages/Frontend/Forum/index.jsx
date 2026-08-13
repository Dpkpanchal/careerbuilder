// import React, { useState } from "react";
// import { usePage } from '@inertiajs/react';
// import ForumLayout from "@/Components/Frontend/Forum/ForumLayout";
// import ForumTopBar from "@/Components/Frontend/Forum/ForumTopBar";
// import ForumTabs from "@/Components/Frontend/Forum/ForumTabs";
// import ThreadList from "@/Components/Frontend/Forum/ThreadList.jsx";
// import ForumCategorySidebar from "@/Components/Frontend/Forum/ForumCategorySidebar";
// import ForumCounselorSidebar from "@/Components/Frontend/Forum/ForumCounselorSidebar";
// import AskQuestionBox from "@/Components/Frontend/Forum/AskQuestionBox";
// import { THREADS } from "@/data/Forum/threads";
// import FrontendLayout from '@/Layouts/FrontendLayout';

// export default function ForumHomePage({ forumCategory, questions, counsellorsData }) {
//   const [threads, setThreads] = useState(questions);
//   const { auth } = usePage().props;

//   const handleAddThread = (payload) => {
//     const now = new Date();

//     // Generate a unique ID
//     const uniqueId = Date.now();

//     // Simple slug from title
//     const slugBase = payload.title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)/g, "");
//     const slug = `${slugBase}-${uniqueId}`;

//     // Get user info from auth
//     const user = auth?.user || { 
//       id: 1, 
//       name: "You", 
//       avatar: null 
//     };

//     const newThread = {
//       id: uniqueId,
//       slug,
//       title: payload.title,
//       description: payload.description,
//       user: user,
//       categories: payload.categories || [],
//       categoryLabel: payload.categoryLabels?.[0] || "General",
//       categoryLabels: payload.categoryLabels || [],
//       excerpt: payload.description?.slice(0, 180) || "",
//       answers_count: 0,
//       views_count: 0,
//       hasCounselorReply: false,
//       created_at: now.toISOString(),
//       updated_at: now.toISOString(),
//       isNew: true,
//       // Mark as optimistic for temporary styling
//       isOptimistic: true
//     };

//     // Add to the TOP of the threads array
//     setThreads((prev) => [newThread, ...prev]);
//   };

//   return (
//     <FrontendLayout>
//       <ForumLayout>
//         <ForumTopBar />

//         <div className="container p-0 mt-lg-2">
//           <div
//             className="forum-shell position-sticky"
//             style={{ top: "80px", zIndex: 10 }}
//           >
//             <div className="row g-0">
//               {/* LEFT COLUMN – Categories */}
//               <div className="col-12 col-lg-3 d-none d-lg-block">
//                 <div className="card border-0 shadow-sm forum-side-card">
//                   <div className="card-body p-0 forum-side-scroll">
//                     <ForumCategorySidebar forumCategory={forumCategory} />
//                   </div>
//                 </div>
//               </div>

//               {/* CENTER COLUMN – Ask box + Tabs sticky + Threads scroll */}
//               <div className="col-12 col-lg-6">
//                 <div className="forum-center d-flex flex-column">
//                   {/* Ask Question Box */}
//                   <AskQuestionBox 
//                     onAddThread={handleAddThread} 
//                     forumCategory={forumCategory} 
//                   />

//                   {/* Tabs fixed at top inside center column */}
//                   <div className="forum-tabs-sticky">
//                     <ForumTabs />
//                   </div>

//                   {/* Scrollable thread list area */}
//                   <div className="forum-thread-scroll">
//                     <ThreadList threads={threads} />
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT COLUMN – Counselors */}
//               <div className="col-12 col-lg-3 d-none d-lg-block">
//                 <div className="card border-0 p-0 shadow-sm forum-side-card">
//                   <div className="card-body p-0 forum-side-scroll">
//                     <ForumCounselorSidebar counsellorsData={counsellorsData} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ForumLayout>
//     </FrontendLayout>
//   );
// }

import React, { useState, useEffect } from "react";
import { usePage } from '@inertiajs/react';
import ForumLayout from "@/Components/Frontend/Forum/ForumLayout";
import ForumTopBar from "@/Components/Frontend/Forum/ForumTopBar";
import ForumTabs from "@/Components/Frontend/Forum/ForumTabs";
import ThreadList from "@/Components/Frontend/Forum/ThreadList.jsx";
import ForumCategorySidebar from "@/Components/Frontend/Forum/ForumCategorySidebar";
import ForumCounselorSidebar from "@/Components/Frontend/Forum/ForumCounselorSidebar";
import AskQuestionBox from "@/Components/Frontend/Forum/AskQuestionBox";
import FrontendLayout from '@/Layouts/FrontendLayout';

export default function ForumHomePage({ forumCategory, questions, counsellorsData }) {

  //console.log('baba',questions);
  const [threads, setThreads] = useState(questions);
  const [filteredThreads, setFilteredThreads] = useState(questions);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { auth } = usePage().props;

  // Parse category_id JSON string to array
  const parseCategories = (categoryId) => {
    if (!categoryId) return [];
    try {
      // If it's already an array, return it
      if (Array.isArray(categoryId)) return categoryId;
      // If it's a string, try to parse it as JSON
      if (typeof categoryId === 'string') {
        // Check if it looks like a JSON array
        if (categoryId.startsWith('[')) {
          const parsed = JSON.parse(categoryId);
          return Array.isArray(parsed) ? parsed : [];
        }
        // If it's a single category name as string
        return [categoryId];
      }
      return [];
    } catch (e) {
      // If parsing fails, return as single item if it's a string
      return typeof categoryId === 'string' ? [categoryId] : [];
    }
  };

  // Normalize threads to have categories array
  useEffect(() => {
    if (questions && questions.length > 0) {
      const normalizedThreads = questions.map(thread => {
        // Parse categories from category_id field
        const categories = parseCategories(thread.category_id);
        
        // Also check if there's a categories field
        const existingCategories = thread.categories || [];
        
        // Merge and deduplicate
        const allCategories = [...new Set([...categories, ...existingCategories])];
        
        return {
          ...thread,
          categories: allCategories,
          // Keep original category_id for reference
          original_category_id: thread.category_id
        };
      });
      setThreads(normalizedThreads);
      setFilteredThreads(normalizedThreads);
    }
  }, [questions]);

  // Filter threads when categories selection changes
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredThreads(threads);
      return;
    }

    const filtered = threads.filter(thread => {
      // Get categories from the thread (already parsed)
      const threadCategories = thread.categories || [];
      
      // Also check categoryLabel if exists
      const allThreadCategories = [...threadCategories];
      if (thread.categoryLabel) {
        allThreadCategories.push(thread.categoryLabel);
      }
      
      // Check if any thread category matches any selected category
      const matches = allThreadCategories.some(catName => {
        if (!catName) return false;
        return selectedCategories.some(selected => {
          const catLower = catName.toLowerCase().trim();
          const selectedLower = selected.toLowerCase().trim();
          return catLower === selectedLower || 
                 catLower.includes(selectedLower) || 
                 selectedLower.includes(catLower);
        });
      });

      return matches;
    });

    setFilteredThreads(filtered);
  }, [selectedCategories, threads]);

  const handleAddThread = (payload) => {
    const now = new Date();

    // Generate a unique ID
    const uniqueId = Date.now();

    // Simple slug from title
    const slugBase = payload.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const slug = `${slugBase}-${uniqueId}`;

    // Get user info from auth
    const user = auth?.user || { 
      id: 1, 
      name: "You", 
      avatar: null 
    };

    const newThread = {
      id: uniqueId,
      slug,
      title: payload.title,
      description: payload.description,
      user: user,
      categories: payload.categories || [],
      category_id: JSON.stringify(payload.categories || []),
      categoryLabel: payload.categoryLabels?.[0] || "General",
      categoryLabels: payload.categoryLabels || [],
      excerpt: payload.description?.slice(0, 180) || "",
      answers_count: 0,
      views_count: 0,
      hasCounselorReply: false,
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
      isNew: true,
      isOptimistic: true
    };

    // Add to the TOP of the threads array
    setThreads((prev) => [newThread, ...prev]);
  };

  // Handle category selection/deselection
  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Clear all selected categories
  const clearCategoryFilters = () => {
    setSelectedCategories([]);
  };

  // Get unique categories from all threads for debugging
  const allThreadCategories = new Set();
  threads.forEach(thread => {
    (thread.categories || []).forEach(cat => {
      if (cat) allThreadCategories.add(cat);
    });
  });

  return (
    <FrontendLayout>
      <ForumLayout>
        <ForumTopBar />

        <div className="container p-0 mt-lg-2">
          <div
            className="forum-shell position-sticky"
            style={{ top: "80px", zIndex: 10 }}
          >
            <div className="row g-0">
              {/* LEFT COLUMN – Categories */}
              <div className="col-12 col-lg-3 d-none d-lg-block">
                <div className="card border-0 shadow-sm forum-side-card">
                  <div className="card-body p-0 forum-side-scroll">
                    <ForumCategorySidebar 
                      forumCategory={forumCategory}
                      selectedCategories={selectedCategories}
                      onCategoryToggle={handleCategoryToggle}
                      clearFilters={clearCategoryFilters}
                    />
                  </div>
                </div>
              </div>

              {/* CENTER COLUMN – Ask box + Tabs sticky + Threads scroll */}
              <div className="col-12 col-lg-6">
                <div className="forum-center d-flex flex-column">
                  {/* Filter bar with selected categories */}
                  {selectedCategories.length > 0 && (
                    <div className="filter-bar p-2 bg-light border-bottom d-flex align-items-center flex-wrap gap-2">
                      <span className="text-muted small fw-semibold me-1">
                        Filters:
                      </span>
                      {selectedCategories.map(cat => (
                        <span 
                          key={cat} 
                          className="badge bg-primary d-inline-flex align-items-center gap-1"
                          style={{ cursor: 'pointer' }}
                          onClick={() => handleCategoryToggle(cat)}
                        >
                          {cat}
                          <span className="ms-1" style={{ fontSize: '12px' }}>✕</span>
                        </span>
                      ))}
                      <button 
                        className="btn btn-sm btn-outline-secondary ms-auto"
                        onClick={clearCategoryFilters}
                      >
                        Clear All
                      </button>
                    </div>
                  )}

                  {/* Show count of filtered threads */}
                  {/* <div className="px-3 py-1 bg-light border-bottom d-flex justify-content-between align-items-center">
                    <span className="text-muted small">
                      {selectedCategories.length > 0 ? (
                        <>Showing {filteredThreads.length} thread{filteredThreads.length !== 1 ? 's' : ''}
                        {selectedCategories.length > 0 && (
                          <> in <span className="fw-semibold">{selectedCategories.join(', ')}</span></>
                        )}</>
                      ) : (
                        <>All {threads.length} threads</>
                      )}
                    </span>
                    <span className="text-muted small">
                      Categories: {Array.from(allThreadCategories).join(', ')}
                    </span>
                  </div> */}

                  {/* Ask Question Box */}
                  <AskQuestionBox 
                    onAddThread={handleAddThread} 
                    forumCategory={forumCategory} 
                  />

                  {/* Tabs fixed at top inside center column */}
                  <div className="forum-tabs-sticky">
                    <ForumTabs />
                  </div>

                  {/* Scrollable thread list area with filtered threads */}
                  <div className="forum-thread-scroll">
                    <ThreadList 
                      threads={filteredThreads} 
                      selectedCategories={selectedCategories} 
                    />
                    
                    {/* Show message if no threads match */}
                    {selectedCategories.length > 0 && filteredThreads.length === 0 && (
                      <div className="text-center py-5">
                        <p className="text-muted mb-2">No threads found in these categories</p>
                        <p className="text-muted small">
                          Try selecting different categories or clear the filters
                        </p>
                      </div>
                    )}
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