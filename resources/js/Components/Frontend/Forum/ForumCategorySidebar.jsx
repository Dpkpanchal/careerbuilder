// import React, { useState, useEffect } from "react";
// import { Link, usePage } from '@inertiajs/react';
// import * as LucideIcons from 'lucide-react';

// export default function ForumCategorySidebar({ forumCategory }) {
//   const { url } = usePage();
//   const [selectedCategory, setSelectedCategory] = useState(null);
  
//   // Function to get icon component dynamically
//   const getIconComponent = (iconName) => {
//     // Handle null/undefined
//     if (!iconName) {
//       return LucideIcons.BookOpen;
//     }
    
//     // Try exact match first
//     let Icon = LucideIcons[iconName];
    
//     // If not found, try with case variations
//     if (!Icon) {
//       // Try different naming conventions
//       const variations = [
//         iconName, // original
//         iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase(), // PascalCase
//         iconName.toUpperCase(), // UPPERCASE
//         iconName.toLowerCase(), // lowercase
//       ];
      
//       for (const variant of variations) {
//         if (LucideIcons[variant]) {
//           Icon = LucideIcons[variant];
//           break;
//         }
//       }
//     }
    
//     // Return found icon or default
//     return Icon || LucideIcons.BookOpen;
//   };

//   // Extract category from URL query params
//   useEffect(() => {
//     const urlObj = new URL(url, window.location.origin);
//     const categoryParam = urlObj.searchParams.get('category');
//     setSelectedCategory(categoryParam);
//   }, [url]);

//   // Get current path without query parameters
//   const getBasePath = () => {
//     const urlObj = new URL(url, window.location.origin);
//     return urlObj.pathname;
//   };

//   const basePath = getBasePath();

//   return (
//     <div className="forum-categories">
//       <h6 className="text-uppercase text-muted mb-3 px-lg-2">
//         Categories
//       </h6>

//       <ul className="list-unstyled m-0">
//         {/* All Categories Option */}
//         <li key="all-categories">
//           <Link
//             href={basePath}
//             className={`d-flex align-items-center gap-2 py-2 px-2 rounded category-item ${
//               !selectedCategory ? 'active-category' : ''
//             }`}
//           >
//             <span className="text-primary d-flex align-items-center">
//               {LucideIcons.Grid3x3 ? <LucideIcons.Grid3x3 size={18} /> : <LucideIcons.Layers size={18} />}
//             </span>
//             <span className="small category-name fw-medium">All Categories</span>
//             {!selectedCategory && (
//               <span className="ms-auto">
//                 {LucideIcons.Check && <LucideIcons.Check size={14} className="text-success" />}
//               </span>
//             )}
//           </Link>
//         </li>

//         {/* Divider */}
//         <li className="my-2">
//           <hr className="m-0" />
//         </li>

//         {/* Individual Categories */}
//         {forumCategory.map((cat) => {
//           const Icon = getIconComponent(cat.category_icon);
//           const isSelected = selectedCategory === cat.name;
          
//           return (
//             <li key={cat.id}>
//               <Link
//                 href={`${basePath}?category=${encodeURIComponent(cat.name)}`}
//                 className={`d-flex align-items-center gap-2 py-2 px-2 rounded category-item ${
//                   isSelected ? 'active-category' : ''
//                 }`}
//               >
//                 <span className="text-primary d-flex align-items-center">
//                   <Icon size={18} />
//                 </span>
//                 <span className="small category-name">{cat.name}</span>
//                 {isSelected && (
//                   <span className="ms-auto">
//                     {LucideIcons.Check && <LucideIcons.Check size={14} className="text-success" />}
//                   </span>
//                 )}
//               </Link>
//             </li>
//           );
//         })}

//       </ul>

//       {/* Add CSS for styling */}
//       <style jsx>{`
//         .category-item {
//           text-decoration: none;
//           color: inherit;
//           transition: all 0.2s ease;
//         }
        
//         .category-item:hover {
//           background-color: #f8f9fa;
//         }
        
//         .active-category {
//           background-color: #e7f1ff !important;
//           font-weight: 500;
//         }
        
//         .category-name {
//           transition: color 0.2s ease;
//         }
        
//         .category-item:hover .category-name {
//           color: #0d6efd;
//         }
//       `}</style>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, usePage } from '@inertiajs/react';
import * as LucideIcons from 'lucide-react';

export default function ForumCategorySidebar({ 
  forumCategory, 
  selectedCategories = [], 
  onCategoryToggle,
  clearFilters 
}) {
  const { url } = usePage();
  
  // Function to get icon component dynamically
  const getIconComponent = (iconName) => {
    if (!iconName) {
      return LucideIcons.BookOpen;
    }
    
    let Icon = LucideIcons[iconName];
    
    if (!Icon) {
      const variations = [
        iconName,
        iconName.charAt(0).toUpperCase() + iconName.slice(1).toLowerCase(),
        iconName.toUpperCase(),
        iconName.toLowerCase(),
      ];
      
      for (const variant of variations) {
        if (LucideIcons[variant]) {
          Icon = LucideIcons[variant];
          break;
        }
      }
    }
    
    return Icon || LucideIcons.BookOpen;
  };

  // Check if a category is selected
  const isCategorySelected = (categoryName) => {
    return selectedCategories.includes(categoryName);
  };

  // Debug: Log forumCategory data
  console.log('ForumCategory in sidebar:', forumCategory);

  // Extract category name from different possible fields
  const getCategoryName = (cat) => {
    return cat.name || cat.category_name || cat.label || cat.title || cat.category || '';
  };

  return (
    <div className="forum-categories">
      <div className="d-flex align-items-center justify-content-between mb-3 px-lg-2">
        <h6 className="text-uppercase text-muted mb-0">
          Categories
        </h6>
        {selectedCategories.length > 0 && (
          <button 
            className="btn btn-sm btn-outline-danger py-0 px-2"
            onClick={clearFilters}
            style={{ fontSize: '12px' }}
          >
            Clear ({selectedCategories.length})
          </button>
        )}
      </div>

      <ul className="list-unstyled m-0">
        {/* All Categories Option */}
        <li key="all-categories">
          <div
            className={`d-flex align-items-center gap-2 py-2 px-2 rounded category-item ${
              selectedCategories.length === 0 ? 'active-category' : ''
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (selectedCategories.length > 0) {
                clearFilters();
              }
            }}
          >
            <span className="text-primary d-flex align-items-center">
              {LucideIcons.Grid3x3 ? <LucideIcons.Grid3x3 size={18} /> : <LucideIcons.Layers size={18} />}
            </span>
            <span className="small category-name fw-medium">All Categories</span>
            {selectedCategories.length === 0 && (
              <span className="ms-auto">
                {LucideIcons.Check && <LucideIcons.Check size={14} className="text-success" />}
              </span>
            )}
            {selectedCategories.length > 0 && (
              <span className="ms-auto text-muted small">
                {selectedCategories.length} selected
              </span>
            )}
          </div>
        </li>

        {/* Divider */}
        <li className="my-2">
          <hr className="m-0" />
        </li>

        {/* Individual Categories */}
        {forumCategory && forumCategory.length > 0 ? (
          forumCategory.map((cat) => {
            const categoryName = getCategoryName(cat);
            const Icon = getIconComponent(cat.category_icon || cat.icon);
            const isSelected = isCategorySelected(categoryName);
            
            console.log(`Category: ${categoryName}, Selected: ${isSelected}`);
            
            return (
              <li key={cat.id || categoryName}>
                <div
                  className={`d-flex align-items-center gap-2 py-2 px-2 rounded category-item ${
                    isSelected ? 'active-category' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    console.log('Toggling category:', categoryName);
                    onCategoryToggle(categoryName);
                  }}
                >
                  <span className="text-primary d-flex align-items-center">
                    <Icon size={18} />
                  </span>
                  <span className="small category-name flex-grow-1">{categoryName}</span>
                  {isSelected && (
                    <span className="ms-auto">
                      {LucideIcons.Check && <LucideIcons.Check size={14} className="text-success" />}
                    </span>
                  )}
                  {!isSelected && selectedCategories.length > 0 && (
                    <span className="ms-auto">
                      <span className="border rounded-circle d-inline-block" style={{ width: 14, height: 14 }}></span>
                    </span>
                  )}
                </div>
              </li>
            );
          })
        ) : (
          <li>
            <div className="text-muted small px-2">No categories available</div>
          </li>
        )}

        {/* Show selected count at bottom */}
        {selectedCategories.length > 0 && (
          <li className="mt-2">
            <div className="px-2 py-1 bg-light rounded text-center">
              <span className="text-muted small">
                {selectedCategories.length} category{selectedCategories.length > 1 ? 'ies' : ''} selected
              </span>
            </div>
          </li>
        )}
      </ul>

      <style jsx>{`
        .category-item {
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
          user-select: none;
        }
        
        .category-item:hover {
          background-color: #f8f9fa;
        }
        
        .active-category {
          background-color: #e7f1ff !important;
          font-weight: 500;
        }
        
        .category-name {
          transition: color 0.2s ease;
        }
        
        .category-item:hover .category-name {
          color: #0d6efd;
        }
        
        .btn-outline-danger {
          border-color: #dc3545;
          color: #dc3545;
        }
        
        .btn-outline-danger:hover {
          background-color: #dc3545;
          color: #fff;
        }
      `}</style>
    </div>
  );
}