// // // resources/js/Components/Layout/Sidebar.jsx
// // import React from 'react';
// // import { Link, usePage } from '@inertiajs/react';

// // const Sidebar = ({ collapsed, user }) => {
// //     const { url } = usePage();

// //     /* ---------------- Avatar Helper ---------------- */
// //     const getAvatarUrl = (avatarPath, userName, size = 60) => {
// //         if (avatarPath && avatarPath.trim() !== '') {
// //             if (avatarPath.startsWith('http')) return avatarPath;
// //             return `/storage/${avatarPath}`;
// //         }
// //         return `https://ui-avatars.com/api/?name=${encodeURIComponent(
// //             userName || 'User'
// //         )}&background=007bff&color=fff&size=${size}`;
// //     };

// //     const brandAvatarUrl = getAvatarUrl(user?.avatar, user?.name, 34);
// //     const userAvatarUrl  = getAvatarUrl(user?.avatar, user?.name, 30);

// //     /* ---------------- Main Menu ---------------- */
// //     const menuItems = [
// //         { path: '/admin/dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard', active: url === '/admin/dashboard' },
// //         { path: '/admin/users', icon: 'fas fa-users', label: 'Users', active: url.startsWith('/admin/users') },
// //         { path: '/admin/counsellors', icon: 'fas fa-user-tie', label: 'Manage Counsellors', active: url.startsWith('/admin/counsellors') },
// //         { path: '/admin/nav-menus', icon: 'fas fa-sitemap', label: 'Navigation Menus', active: url.startsWith('/admin/nav-menus') },
// //         { path: '/admin/coaching-support', icon: 'fas fa-chalkboard-teacher', label: 'Coaching Support', active: url.startsWith('/admin/coaching-support') },
// //         { path: '/admin/waqf-run-hostels', icon: 'fas fa-building', label: 'Waqf-Run Hostels', active: url.startsWith('/admin/waqf-run-hostels') },
// //         { path: '/admin/minority-schemes', icon: 'fas fa-hand-holding-heart', label: 'Minority Schemes', active: url.startsWith('/admin/minority-schemes') },
// //         { path: '/admin/important-web-links', icon: 'fas fa-link', label: 'Important Web Links', active: url.startsWith('/admin/important-web-links') },
// //         { path: '/admin/admission-support', icon: 'fas fa-university', label: 'Admission Support', active: url.startsWith('/admin/admission-support') },
// //         { path: '/admin/forum-categories', icon: 'fas fa-comments', label: 'Forum Categories', active: url.startsWith('/admin/forum-categories') },
// //         { path: '/admin/iti-colleges', icon: 'fas fa-school', label: 'ITI Colleges', active: url.startsWith('/admin/iti-colleges') },
// //         { path: '/admin/central-universities', icon: 'fas fa-university', label: 'Central Universities', active: url.startsWith('/admin/central-universities') },
// //         { path: '/admin/reports', icon: 'fas fa-flag', label: 'Reports', active: url.startsWith('/admin/reports'), },
// //         // { path: '/admin/categories', icon: 'fas fa-layer-group', label: 'Categories', active: url.startsWith('/admin/categories') },
// //         // { path: '/admin/subcategories', icon: 'fas fa-list-ul', label: 'Subcategories', active: url.startsWith('/admin/subcategories') },
// //         // { path: '/admin/nav-menus', icon: 'fas fa-sitemap', label: 'Navigation Menus', active: url.startsWith('/admin/nav-menus') },
// //         // { path: '/admin/menuitems', icon: 'fas fa-bars', label: 'Menu Items', active: url.startsWith('/admin/menuitems') },
// //         // { path: '/admin/itemtabs', icon: 'fas fa-table-columns', label: 'Menu Item Tabs', active: url.startsWith('/admin/itemtabs') },
// //         // { path: '/admin/tabcontents', icon: 'fas fa-file-alt', label: 'Tab Contents', active: url.startsWith('/admin/tabcontents') },
       

// //         // { path: '/admin/cm-message/create', icon: 'fas fa-user-tie', label: 'CM Message', active: url.startsWith('/admin/cm-message/create') },
// //         { path: '/admin/hero-slides', icon: 'fas fa-images', label: 'Hero Slides', active: url.startsWith('/admin/hero-slides') },
// //         { path: '/admin/leaders', icon: 'fas fa-user-tie', label: 'Leaders', active: url.startsWith('/admin/leaders') },
// //         { path: '/admin/career-domains', icon: 'fas fa-graduation-cap', label: 'Career Domains', active: url.startsWith('/admin/career-domains') },
// //         { path: '/admin/news', icon: 'fas fa-newspaper', label: 'News', active: url.startsWith('/admin/news') },
// //         { path: '/admin/loan-sections', icon: 'fas fa-hand-holding-usd', label: 'Loan & Schemes', active: url.startsWith('/admin/loan-sections') },
// //         { path: '/admin/sections', icon: 'fas fa-layer-group', label: 'Sections', active: url.startsWith('/admin/sections') },
// //         { path: '/admin/exam-content', icon: 'fas fa-file-alt', label: 'Exam Content', active: url.startsWith('/admin/exam-content') },
// //         { path: '/admin/college-content', icon: 'fas fa-file-alt', label: 'College Content', active: url.startsWith('/admin/college-content') },

// //         { path: '/admin/job-groups', icon: 'fas fa-briefcase', label: 'Jobs Opportunities', active: url.startsWith('/admin/job-groups') },

// //        {
// //         label: "Scholarship",
// //         icon: "fas fa-graduation-cap",
// //         active:
// //             url.startsWith("/admin/scholarship-overview-table") ||
// //             url.startsWith("/admin/scholarship-rates"),
// //         children: [
// //             {
// //                 path: "/admin/scholarship-overview-table",
// //                 label: "Overview Table",
// //                 active: url.startsWith("/admin/scholarship-overview-table"),
// //             },
// //             {
// //                 path: "/admin/scholarship-rates",
// //                 label: "Scholarship Rates",
// //                 active: url.startsWith("/admin/scholarship-rates"),
// //             },
// //             {
// //             path: "/admin/scholarships",
// //             label: "Scholarships",
// //             active: url.startsWith("/admin/scholarships"),
// //         },
// //         ],
// //     },
        
// //         // { path: '/admin/pages/demo', icon: 'fas fa-cog', label: 'Demo Pages', active: url.startsWith('/admin/pages/demo') },
// //     ];

// //     /* ---------------- More Menu ---------------- */
// //     // const moreItems = [
       
// //     // ];

// //     // const isMoreActive = moreItems.some(item => item.active);
// //     // const [moreOpen, setMoreOpen] = useState(isMoreActive);

// //     /* ---------------- Render ---------------- */
// //     return (
// //         <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${collapsed ? 'sidebar-collapse' : ''}`}>
// //             {/* Brand */}


// //             <style>
// //                 {`.nav-treeview .nav-link.active {
// //                     background-color: #007bff !important;
// //                     color: #fff !important;
// //                 }

// //                 .nav-treeview .nav-link.active i,
// //                 .nav-treeview .nav-link.active p {
// //                     color: #fff !important;
// //                 }`}
// //             </style>

// //             <Link href="/admin/dashboard" className="brand-link">
// //                 <img
// //                     src={brandAvatarUrl}
// //                     className="brand-image img-circle elevation-3"
// //                     style={{ opacity: 0.8 }}
// //                     onError={e => (e.target.src = `https://ui-avatars.com/api/?name=CB&background=007bff&color=fff&size=34`)}
// //                 />
// //                 <span className="brand-text font-weight-light">Career Builder</span>
// //             </Link>

// //             <div className="sidebar">
// //                 {/* User */}
// //                 <div className="user-panel mt-3 pb-3 mb-3 d-flex">
// //                     <div className="image">
// //                         <img
// //                             src={userAvatarUrl}
// //                             className="img-circle elevation-2"
// //                             onError={e => (e.target.src = `https://ui-avatars.com/api/?name=User&background=007bff&color=fff&size=30`)}
// //                         />
// //                     </div>
// //                     <div className="info">
// //                         <Link href="/admin/profile" className="d-block">
// //                             {user?.name || 'User'}
// //                         </Link>
// //                     </div>
// //                 </div>

// //                 {/* Menu */}
// //                 {/* <nav className="mt-2">
// //                     <ul className="nav nav-pills nav-sidebar flex-column">
// //                         {menuItems.map((item, index) => (
// //                             <li key={index} className="nav-item">
// //                                 <Link href={item.path} className={`nav-link ${item.active ? 'active' : ''}`}>
// //                                     <i className={`nav-icon ${item.icon}`} />
// //                                     <p>{item.label}</p>
// //                                 </Link>
// //                             </li>
// //                         ))}

                       
// //                     </ul>
// //                 </nav> */}


// //                 <nav className="mt-2">
// //                     <ul
// //                         className="nav nav-pills nav-sidebar flex-column"
// //                         data-widget="treeview"
// //                         role="menu"
// //                         data-accordion="false"
// //                     >

// //                         {menuItems.map((item, index) => (

// //                             item.children ? (

// //                                 <li
// //                                     key={index}
// //                                     className={`nav-item ${item.active ? "menu-open" : ""}`}
// //                                 >

// //                                     <a href="#" className={`nav-link ${item.active ? "active" : ""}`}>

// //                                         <i className={`nav-icon ${item.icon}`} />

// //                                         <p>
// //                                             {item.label}
// //                                             <i className="right fas fa-angle-left" />
// //                                         </p>

// //                                     </a>

// //                                     <ul className="nav nav-treeview">

// //                                         {item.children.map((child, childIndex) => (

// //                                             <li key={childIndex} className="nav-item">

// //                                               <li className="nav-item">
// //                                                     <Link
// //                                                         href={child.path}
// //                                                         className={`nav-link ${child.active ? "active" : ""}`}
// //                                                     >
// //                                                         <i className="far fa-circle nav-icon"></i>
// //                                                         <p>{child.label}</p>
// //                                                     </Link>
// //                                                 </li>

// //                                             </li>

// //                                         ))}

// //                                     </ul>

// //                                 </li>

// //                             ) : (

// //                                 <li key={index} className="nav-item">

// //                                     <Link
// //                                         href={item.path}
// //                                         className={`nav-link ${item.active ? "active" : ""}`}
// //                                     >
// //                                         <i className={`nav-icon ${item.icon}`} />
// //                                         <p>{item.label}</p>
// //                                     </Link>

// //                                 </li>

// //                             )

// //                         ))}

// //                     </ul>
// //                 </nav>
// //             </div>
// //         </aside>
// //     );
// // };

// // export default Sidebar;


// // resources/js/Components/Layout/Sidebar.jsx
// import React, { useState } from 'react';
// import { Link, usePage } from '@inertiajs/react';

// const Sidebar = ({ collapsed, user }) => {
//     const { url } = usePage();

//     /* ---------------- Avatar Helper ---------------- */
//     const getAvatarUrl = (avatarPath, userName, size = 60) => {
//         if (avatarPath && avatarPath.trim() !== '') {
//             if (avatarPath.startsWith('http')) return avatarPath;
//             return `/storage/${avatarPath}`;
//         }
//         return `https://ui-avatars.com/api/?name=${encodeURIComponent(
//             userName || 'User'
//         )}&background=007bff&color=fff&size=${size}`;
//     };

//     const brandAvatarUrl = getAvatarUrl(user?.avatar, user?.name, 34);
//     const userAvatarUrl = getAvatarUrl(user?.avatar, user?.name, 30);

//     /* ---------------- Main Menu ---------------- */
//     const menuItems = [
//         { 
//             path: '/admin/dashboard', 
//             icon: 'fas fa-tachometer-alt', 
//             label: 'Dashboard', 
//             active: url === '/admin/dashboard' 
//         },
//         { 
//             path: '/admin/users', 
//             icon: 'fas fa-users', 
//             label: 'Users', 
//             active: url.startsWith('/admin/users') 
//         },
//         { 
//             path: '/admin/counsellors', 
//             icon: 'fas fa-user-tie', 
//             label: 'Manage Counsellors', 
//             active: url.startsWith('/admin/counsellors') 
//         },
//         { 
//             path: '/admin/nav-menus', 
//             icon: 'fas fa-sitemap', 
//             label: 'Navigation Menus', 
//             active: url.startsWith('/admin/nav-menus') 
//         },
//         { 
//             path: '/admin/coaching-support', 
//             icon: 'fas fa-chalkboard-teacher', 
//             label: 'Coaching Support', 
//             active: url.startsWith('/admin/coaching-support') 
//         },
//         { 
//             path: '/admin/waqf-run-hostels', 
//             icon: 'fas fa-building', 
//             label: 'Waqf-Run Hostels', 
//             active: url.startsWith('/admin/waqf-run-hostels') 
//         },
//         { 
//             path: '/admin/minority-schemes', 
//             icon: 'fas fa-hand-holding-heart', 
//             label: 'Minority Schemes', 
//             active: url.startsWith('/admin/minority-schemes') 
//         },
//         { 
//             path: '/admin/important-web-links', 
//             icon: 'fas fa-link', 
//             label: 'Important Web Links', 
//             active: url.startsWith('/admin/important-web-links') 
//         },
//         { 
//             path: '/admin/admission-support', 
//             icon: 'fas fa-university', 
//             label: 'Admission Support', 
//             active: url.startsWith('/admin/admission-support') 
//         },
//         { 
//             path: '/admin/forum-categories', 
//             icon: 'fas fa-comments', 
//             label: 'Forum Categories', 
//             active: url.startsWith('/admin/forum-categories') 
//         },
//         { 
//             path: '/admin/iti-colleges', 
//             icon: 'fas fa-school', 
//             label: 'ITI Colleges', 
//             active: url.startsWith('/admin/iti-colleges') 
//         },
//         { 
//             path: '/admin/central-universities', 
//             icon: 'fas fa-university', 
//             label: 'Central Universities', 
//             active: url.startsWith('/admin/central-universities') 
//         },
//         { 
//             path: '/admin/reports', 
//             icon: 'fas fa-flag', 
//             label: 'Reports', 
//             active: url.startsWith('/admin/reports') 
//         },
//         { 
//             path: '/admin/hero-slides', 
//             icon: 'fas fa-images', 
//             label: 'Hero Slides', 
//             active: url.startsWith('/admin/hero-slides') 
//         },
//         { 
//             path: '/admin/leaders', 
//             icon: 'fas fa-user-tie', 
//             label: 'Leaders', 
//             active: url.startsWith('/admin/leaders') 
//         },
//         { 
//             path: '/admin/career-domains', 
//             icon: 'fas fa-graduation-cap', 
//             label: 'Career Domains', 
//             active: url.startsWith('/admin/career-domains') 
//         },
//         { 
//             path: '/admin/news', 
//             icon: 'fas fa-newspaper', 
//             label: 'News', 
//             active: url.startsWith('/admin/news') 
//         },
//         { 
//             path: '/admin/loan-sections', 
//             icon: 'fas fa-hand-holding-usd', 
//             label: 'Loan & Schemes', 
//             active: url.startsWith('/admin/loan-sections') 
//         },
//         { 
//             path: '/admin/sections', 
//             icon: 'fas fa-layer-group', 
//             label: 'Sections', 
//             active: url.startsWith('/admin/sections') 
//         },
//         { 
//             path: '/admin/exam-content', 
//             icon: 'fas fa-file-alt', 
//             label: 'Exam Content', 
//             active: url.startsWith('/admin/exam-content') 
//         },
//         { 
//             path: '/admin/college-content', 
//             icon: 'fas fa-file-alt', 
//             label: 'College Content', 
//             active: url.startsWith('/admin/college-content') 
//         },
//         { 
//             path: '/admin/job-groups', 
//             icon: 'fas fa-briefcase', 
//             label: 'Jobs Opportunities', 
//             active: url.startsWith('/admin/job-groups') 
//         },
//         {
//             label: 'Scholarship',
//             icon: 'fas fa-graduation-cap',
//             active: url.startsWith('/admin/scholarship-overview-table') ||
//                     url.startsWith('/admin/scholarship-rates') ||
//                     url.startsWith('/admin/scholarships'),
//             children: [
//                 {
//                     path: '/admin/scholarship-overview-table',
//                     label: 'Overview Table',
//                     active: url.startsWith('/admin/scholarship-overview-table'),
//                 },
//                 {
//                     path: '/admin/scholarship-rates',
//                     label: 'Scholarship Rates',
//                     active: url.startsWith('/admin/scholarship-rates'),
//                 },
//                 {
//                     path: '/admin/scholarships',
//                     label: 'Scholarships',
//                     active: url.startsWith('/admin/scholarships'),
//                 },

//                 {
//                     path: "/admin/education-loan",
//                     label: "Education Loans",
//                     active: url.startsWith("/admin/education-loan"),
//                 },

//             ],
//         },
//     ];

//     /* ---------------- Render ---------------- */
//     return (
//         <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${collapsed ? 'sidebar-collapse' : ''}`}>
//             {/* Brand */}
//             <Link href="/admin/dashboard" className="brand-link">
//                 <img
//                     src={brandAvatarUrl}
//                     className="brand-image img-circle elevation-3"
//                     style={{ opacity: 0.8 }}
//                     alt="Brand Logo"
//                     onError={(e) => {
//                         e.target.src = `https://ui-avatars.com/api/?name=CB&background=007bff&color=fff&size=34`;
//                     }}
//                 />
//                 <span className="brand-text font-weight-light">Career Builder</span>
//             </Link>

//             <div className="sidebar">
//                 {/* User Panel */}
//                 <div className="user-panel mt-3 pb-3 mb-3 d-flex">
//                     <div className="image">
//                         <img
//                             src={userAvatarUrl}
//                             className="img-circle elevation-2"
//                             alt={user?.name || 'User'}
//                             onError={(e) => {
//                                 e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                                     user?.name || 'User'
//                                 )}&background=007bff&color=fff&size=30`;
//                             }}
//                         />
//                     </div>
//                     <div className="info">
//                         <Link href="/admin/profile" className="d-block">
//                             {user?.name || 'User'}
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Menu */}
//                 <style>
//                     {`
//                         .nav-treeview .nav-link.active {
//                             background-color: #007bff !important;
//                             color: #fff !important;
//                         }
//                         .nav-treeview .nav-link.active i,
//                         .nav-treeview .nav-link.active p {
//                             color: #fff !important;
//                         }
//                     `}
//                 </style>

//                 <nav className="mt-2">
//                     <ul
//                         className="nav nav-pills nav-sidebar flex-column"
//                         data-widget="treeview"
//                         role="menu"
//                         data-accordion="false"
//                     >
//                         {menuItems.map((item, index) => {
//                             if (item.children) {
//                                 // Parent menu item with children
//                                 const isActive = item.children.some(child => child.active);
                                
//                                 return (
//                                     <li
//                                         key={index}
//                                         className={`nav-item ${isActive ? 'menu-open' : ''}`}
//                                     >
//                                         <a
//                                             href="#"
//                                             className={`nav-link ${isActive ? 'active' : ''}`}
//                                             onClick={(e) => {
//                                                 e.preventDefault();
//                                                 // Toggle menu-open class
//                                                 const parent = e.currentTarget.closest('.nav-item');
//                                                 parent.classList.toggle('menu-open');
//                                             }}
//                                         >
//                                             <i className={`nav-icon ${item.icon}`} />
//                                             <p>
//                                                 {item.label}
//                                                 <i className="right fas fa-angle-left" />
//                                             </p>
//                                         </a>

//                                         <ul className="nav nav-treeview">
//                                             {item.children.map((child, childIndex) => (
//                                                 <li key={childIndex} className="nav-item">
//                                                     <Link
//                                                         href={child.path}
//                                                         className={`nav-link ${child.active ? 'active' : ''}`}
//                                                     >
//                                                         <i className="far fa-circle nav-icon" />
//                                                         <p>{child.label}</p>
//                                                     </Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </li>
//                                 );
//                             } else {
//                                 // Regular menu item
//                                 return (
//                                     <li key={index} className="nav-item">
//                                         <Link
//                                             href={item.path}
//                                             className={`nav-link ${item.active ? 'active' : ''}`}
//                                         >
//                                             <i className={`nav-icon ${item.icon}`} />
//                                             <p>{item.label}</p>
//                                         </Link>
//                                     </li>
//                                 );
//                             }
//                         })}
//                     </ul>
//                 </nav>
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;

// resources/js/Components/Layout/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

const Sidebar = ({ collapsed, user }) => {
    const { url } = usePage();

    /* ---------------- Avatar Helper ---------------- */
    const getAvatarUrl = (avatarPath, userName, size = 60) => {
        if (avatarPath && avatarPath.trim() !== '') {
            if (avatarPath.startsWith('http')) return avatarPath;
            return `/storage/${avatarPath}`;
        }
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(
            userName || 'User'
        )}&background=007bff&color=fff&size=${size}`;
    };

    const brandAvatarUrl = getAvatarUrl(user?.avatar, user?.name, 34);
    const userAvatarUrl = getAvatarUrl(user?.avatar, user?.name, 30);

    /* ---------------- Main Menu ---------------- */
    const menuItems = [
        {
            path: '/admin/dashboard',
            icon: 'fas fa-tachometer-alt',
            label: 'Dashboard',
            active: url === '/admin/dashboard'
        },
        {
            path: '/admin/users',
            icon: 'fas fa-users',
            label: 'Users',
            active: url.startsWith('/admin/users')
        },
        {
            path: '/admin/counsellors',
            icon: 'fas fa-user-tie',
            label: 'Manage Counsellors',
            active: url.startsWith('/admin/counsellors')
        },
        {
            path: '/admin/nav-menus',
            icon: 'fas fa-sitemap',
            label: 'Navigation Menus',
            active: url.startsWith('/admin/nav-menus')
        },
        {
            path: '/admin/coaching-support',
            icon: 'fas fa-chalkboard-teacher',
            label: 'Coaching Support',
            active: url.startsWith('/admin/coaching-support')
        },
        {
            path: '/admin/waqf-run-hostels',
            icon: 'fas fa-building',
            label: 'Waqf-Run Hostels',
            active: url.startsWith('/admin/waqf-run-hostels')
        },
        {
            path: '/admin/minority-schemes',
            icon: 'fas fa-hand-holding-heart',
            label: 'Minority Schemes',
            active: url.startsWith('/admin/minority-schemes')
        },
        {
            path: '/admin/important-web-links',
            icon: 'fas fa-link',
            label: 'Important Web Links',
            active: url.startsWith('/admin/important-web-links')
        },
        {
            path: '/admin/admission-support',
            icon: 'fas fa-university',
            label: 'Admission Support',
            active: url.startsWith('/admin/admission-support')
        },
        {
            path: '/admin/forum-categories',
            icon: 'fas fa-comments',
            label: 'Forum Categories',
            active: url.startsWith('/admin/forum-categories')
        },
        {
            path: '/admin/iti-colleges',
            icon: 'fas fa-school',
            label: 'ITI Colleges',
            active: url.startsWith('/admin/iti-colleges')
        },
        {
            path: '/admin/central-universities',
            icon: 'fas fa-university',
            label: 'Central Universities',
            active: url.startsWith('/admin/central-universities')
        },
        {
            path: '/admin/reports',
            icon: 'fas fa-flag',
            label: 'Reports',
            active: url.startsWith('/admin/reports')
        },
        {
            path: '/admin/hero-slides',
            icon: 'fas fa-images',
            label: 'Hero Slides',
            active: url.startsWith('/admin/hero-slides')
        },
        {
            path: '/admin/leaders',
            icon: 'fas fa-user-tie',
            label: 'Leaders',
            active: url.startsWith('/admin/leaders')
        },
        {
            path: '/admin/career-domains',
            icon: 'fas fa-graduation-cap',
            label: 'Career Domains',
            active: url.startsWith('/admin/career-domains')
        },
        {
            path: '/admin/news',
            icon: 'fas fa-newspaper',
            label: 'News',
            active: url.startsWith('/admin/news')
        },
        {
            path: '/admin/loan-sections',
            icon: 'fas fa-hand-holding-usd',
            label: 'Loan & Schemes',
            active: url.startsWith('/admin/loan-sections')
        },
        {
            path: '/admin/sections',
            icon: 'fas fa-layer-group',
            label: 'Sections',
            active: url.startsWith('/admin/sections')
        },
        {
            path: '/admin/exam-content',
            icon: 'fas fa-file-alt',
            label: 'Exam Content',
            active: url.startsWith('/admin/exam-content')
        },
        {
            path: '/admin/college-content',
            icon: 'fas fa-file-alt',
            label: 'College Content',
            active: url.startsWith('/admin/college-content')
        },
        {
            path: '/admin/job-groups',
            icon: 'fas fa-briefcase',
            label: 'Jobs Opportunities',
            active: url.startsWith('/admin/job-groups')
        },
        {
            label: 'Scholarship',
            icon: 'fas fa-graduation-cap',
            active: url.startsWith('/admin/scholarship-overview-table') ||
                    url.startsWith('/admin/scholarship-rates') ||
                    url.startsWith('/admin/scholarships') ||
                    url.startsWith('/admin/education-loan') ||
                    url.startsWith('/admin/national-fellowships'),
            children: [
                {
                    path: '/admin/scholarship-overview-table',
                    label: 'Overview Table',
                    active: url.startsWith('/admin/scholarship-overview-table'),
                },
                {
                    path: '/admin/scholarship-rates',
                    label: 'Scholarship Rates',
                    active: url.startsWith('/admin/scholarship-rates'),
                },
                {
                    path: '/admin/scholarships',
                    label: 'Scholarships',
                    active: url.startsWith('/admin/scholarships'),
                },
                {
                    path: '/admin/education-loan',
                    label: 'Education Loans',
                    active: url.startsWith('/admin/education-loan'),
                },
                {
                    path: '/admin/national-fellowships',
                    label: 'National Fellowships',
                    active: url.startsWith('/admin/national-fellowships'),
                },
            ],
        },
    ];

    /* ---------------- Accordion state (React-driven, no raw DOM writes) --------------- */
    // Tracks which parent items (by index) are expanded. Any parent whose
    // child matches the current URL starts open automatically.
    const [openMenus, setOpenMenus] = useState(() => {
        const initial = {};
        menuItems.forEach((item, index) => {
            if (item.children && item.active) {
                initial[index] = true;
            }
        });
        return initial;
    });

    // Keep the active parent expanded whenever the URL changes (e.g. after
    // an Inertia navigation), without clobbering menus the user opened
    // manually.
    useEffect(() => {
        setOpenMenus((prev) => {
            const next = { ...prev };
            menuItems.forEach((item, index) => {
                if (item.children && item.active) {
                    next[index] = true;
                }
            });
            return next;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    const toggleMenu = (index) => {
        setOpenMenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    /* ---------------- Render ---------------- */
    return (
        <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${collapsed ? 'sidebar-collapse' : ''}`}>
            {/* Brand */}
            <Link href="/admin/dashboard" className="brand-link">
                <img
                    src={brandAvatarUrl}
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: 0.8 }}
                    alt="Brand Logo"
                    onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=CB&background=007bff&color=fff&size=34`;
                    }}
                />
                <span className="brand-text font-weight-light">Career Builder</span>
            </Link>

            <div className="sidebar">
                {/* User Panel */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src={userAvatarUrl}
                            className="img-circle elevation-2"
                            alt={user?.name || 'User'}
                            onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                    user?.name || 'User'
                                )}&background=007bff&color=fff&size=30`;
                            }}
                        />
                    </div>
                    <div className="info">
                        <Link href="/admin/profile" className="d-block">
                            {user?.name || 'User'}
                        </Link>
                    </div>
                </div>

                {/* Menu */}
                <style>
                    {`
                        .nav-treeview .nav-link.active {
                            background-color: #007bff !important;
                            color: #fff !important;
                        }
                        .nav-treeview .nav-link.active i,
                        .nav-treeview .nav-link.active p {
                            color: #fff !important;
                        }
                    `}
                </style>

                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        {menuItems.map((item, index) => {
                            if (item.children) {
                                const isOpen = !!openMenus[index];

                                return (
                                    <li
                                        key={index}
                                        className={`nav-item ${isOpen ? 'menu-open' : ''}`}
                                    >
                                        <a
                                            href="#"
                                            className={`nav-link ${item.active ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleMenu(index);
                                            }}
                                        >
                                            <i className={`nav-icon ${item.icon}`} />
                                            <p>
                                                {item.label}
                                                <i className="right fas fa-angle-left" />
                                            </p>
                                        </a>

                                        <ul
                                            className="nav nav-treeview"
                                            style={{ display: isOpen ? 'block' : 'none' }}
                                        >
                                            {item.children.map((child, childIndex) => (
                                                <li key={childIndex} className="nav-item">
                                                    <Link
                                                        href={child.path}
                                                        className={`nav-link ${child.active ? 'active' : ''}`}
                                                    >
                                                        <i className="far fa-circle nav-icon" />
                                                        <p>{child.label}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            }

                            return (
                                <li key={index} className="nav-item">
                                    <Link
                                        href={item.path}
                                        className={`nav-link ${item.active ? 'active' : ''}`}
                                    >
                                        <i className={`nav-icon ${item.icon}`} />
                                        <p>{item.label}</p>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
