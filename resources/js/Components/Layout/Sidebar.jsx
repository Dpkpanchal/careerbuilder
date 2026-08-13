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

    /* ---------------- Main Menu (grouped for easier scanning) ---------------- */
    const menuItems = [
        {
            path: '/admin/dashboard',
            icon: 'fas fa-tachometer-alt',
            label: 'Dashboard',
            active: url === '/admin/dashboard'
        },

        /* ---------------- People ---------------- */
        {
            label: 'Users',
            icon: 'fas fa-users',
            active: url.startsWith('/admin/users') ||
                    url.startsWith('/admin/counsellors'),
            children: [
                {
                    path: '/admin/users',
                    label: 'All Users',
                    active: url.startsWith('/admin/users'),
                },
                {
                    path: '/admin/counsellors',
                    label: 'Counsellors',
                    active: url.startsWith('/admin/counsellors'),
                },
            ],
        },

        /* ---------------- Scholarships & Financial Aid ---------------- */
        {
            label: 'Scholarships',
            icon: 'fas fa-graduation-cap',
            active: url.startsWith('/admin/scholarship-overview') ||
                    url.startsWith('/admin/scholarship-rates') ||
                    url.startsWith('/admin/scholarships') ||
                    url.startsWith('/admin/education-loan') ||
                    url.startsWith('/admin/national-fellowships') ||
                    url.startsWith('/admin/edu-fund') ||
                    url.startsWith('/admin/loan-sections'),
            children: [
                {
                    path: '/admin/scholarship-overview',
                    label: 'Overview',
                    active: url.startsWith('/admin/scholarship-overview'),
                },
                {
                    path: '/admin/scholarship-rates',
                    label: 'Rates',
                    active: url.startsWith('/admin/scholarship-rates'),
                },
                {
                    path: '/admin/scholarships',
                    label: 'Schemes',
                    active: url.startsWith('/admin/scholarships'),
                },
                {
                    path: '/admin/education-loan',
                    label: 'Edu Loans',
                    active: url.startsWith('/admin/education-loan'),
                },
                {
                    path: '/admin/national-fellowships',
                    label: 'Fellowships',
                    active: url.startsWith('/admin/national-fellowships'),
                },
                {
                    path: '/admin/edu-fund',
                    label: 'Edu Fund',
                    active: url.startsWith('/admin/edu-fund'),
                },
                {
                    path: '/admin/loan-sections',
                    label: 'Loan Schemes',
                    active: url.startsWith('/admin/loan-sections'),
                },
            ],
        },

        /* ---------------- Career & Student Support ---------------- */
        {
            label: 'Student Support',
            icon: 'fas fa-hands-helping',
            active: url.startsWith('/admin/coaching-support') ||
                    url.startsWith('/admin/waqf-run-hostels') ||
                    url.startsWith('/admin/minority-schemes') ||
                    url.startsWith('/admin/admission-support') ||
                    url.startsWith('/admin/important-web-links') ||
                    url.startsWith('/admin/job-groups') || 
                    url.startsWith('/admin/student-support'),
            children: [
                {
                    path: '/admin/coaching-support',
                    label: 'Coaching',
                    active: url.startsWith('/admin/coaching-support'),
                },
                {
                    path: '/admin/waqf-run-hostels',
                    label: 'Hostels',
                    active: url.startsWith('/admin/waqf-run-hostels'),
                },
                {
                    path: '/admin/minority-schemes',
                    label: 'Minority',
                    active: url.startsWith('/admin/minority-schemes'),
                },
                {
                    path: '/admin/admission-support',
                    label: 'Admission',
                    active: url.startsWith('/admin/admission-support'),
                },
                {
                    path: '/admin/important-web-links',
                    label: 'Web Links',
                    active: url.startsWith('/admin/important-web-links'),
                },
                {
                    path: '/admin/job-groups',
                    label: 'Jobs',
                    active: url.startsWith('/admin/job-groups'),
                },
                {
                    path: '/admin/student-support',
                    label: 'General Support',
                    active: url.startsWith('/admin/student-support'),
                },
            ],
        },

        /* ---------------- Colleges & Universities ---------------- */
        {
            label: 'Colleges',
            icon: 'fas fa-university',
            active: url.startsWith('/admin/iti-colleges'),
                    // url.startsWith('/admin/central-universities'),
            children: [
                {
                    path: '/admin/iti-colleges',
                    label: 'ITI Colleges',
                    active: url.startsWith('/admin/iti-colleges'),
                },
                // {
                //     path: '/admin/central-universities',
                //     label: 'Universities',
                //     active: url.startsWith('/admin/central-universities'),
                // },
            ],
        },

        /* ---------------- Content Management ---------------- */
        {
            label: 'Content',
            icon: 'fas fa-file-alt',
            active: url.startsWith('/admin/career-content') ||
                    url.startsWith('/admin/course-content') ||
                    url.startsWith('/admin/college-content') ||
                    url.startsWith('/admin/exam-content') ||
                    url.startsWith('/admin/landing-pages'),
                   
            children: [
                {
                    path: '/admin/career-content',
                    label: 'Career',
                    active: url.startsWith('/admin/career-content'),
                },
                {
                    path: '/admin/course-content',
                    label: 'Course',
                    active: url.startsWith('/admin/course-content'),
                },
                {
                    path: '/admin/college-content',
                    label: 'College',
                    active: url.startsWith('/admin/college-content'),
                },
                {
                    path: '/admin/exam-content',
                    label: 'Exam',
                    active: url.startsWith('/admin/exam-content'),
                },
                {
                    path: '/admin/landing-pages',
                    label: 'Landing Pages',
                    active: url.startsWith('/admin/landing-pages'),
                },
               
            ],
        },

        /* ---------------- Community ---------------- */
        {
            label: 'Community',
            icon: 'fas fa-comments',
            active: url.startsWith('/admin/forum-categories') ||
                    url.startsWith('/admin/reports'),
            children: [
                {
                    path: '/admin/forum-categories',
                    label: 'Categories',
                    active: url.startsWith('/admin/forum-categories'),
                },
                {
                    path: '/admin/reports',
                    label: 'Reports',
                    active: url.startsWith('/admin/reports'),
                },
            ],
        },

        /* ---------------- Website Management ---------------- */
        {
            label: 'Website',
            icon: 'fas fa-cogs',
            active: url.startsWith('/admin/hero-slides') ||
                    url.startsWith('/admin/leaders') ||
                    url.startsWith('/admin/news') ||
                    url.startsWith('/admin/career-domains') ||
                    url.startsWith('/admin/sections') ||
                    url.startsWith('/admin/nav-menus'),
            children: [
                {
                    path: '/admin/hero-slides',
                    label: 'Hero Slides',
                    active: url.startsWith('/admin/hero-slides'),
                },
                {
                    path: '/admin/leaders',
                    label: 'Leaders',
                    active: url.startsWith('/admin/leaders'),
                },
                {
                    path: '/admin/news',
                    label: 'News',
                    active: url.startsWith('/admin/news'),
                },
                {
                    path: '/admin/career-domains',
                    label: 'Domains',
                    active: url.startsWith('/admin/career-domains'),
                },
                {
                    path: '/admin/sections',
                    label: 'Sections',
                    active: url.startsWith('/admin/sections'),
                },
                {
                    path: '/admin/nav-menus',
                    label: 'Nav Menus',
                    active: url.startsWith('/admin/nav-menus'),
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

