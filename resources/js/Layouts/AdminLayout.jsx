// // resources/js/Layouts/AdminLayout.jsx
// import React, { useState } from 'react';
// import { usePage } from '@inertiajs/react';
// import Navbar from '@/Components/Layout/Navbar';
// import Sidebar from '@/Components/Layout/Sidebar';
// import Footer from '@/Components/Layout/Footer';
// import ContentWrapper from '@/Components/Layout/ContentWrapper';

// const AdminLayout = ({
//     children,
//     header      = null,
//     breadcrumbs = [],
//     actions     = null,
// }) => {
//     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//     const { adminAuth } = usePage().props;
//     const user = adminAuth?.user;

//     const toggleSidebar = () => {
//         setSidebarCollapsed(!sidebarCollapsed);
//         document.body.classList.toggle('sidebar-collapse');
//         document.body.classList.toggle('sidebar-open');
//     };

//     return (
//         <div className="wrapper">
//             <Navbar onToggleSidebar={toggleSidebar} user={user} />

//             <Sidebar collapsed={sidebarCollapsed} user={user} />

//             <ContentWrapper header={header} breadcrumbs={breadcrumbs} actions={actions}>
//                 {children}
//             </ContentWrapper>

//             <Footer />
//         </div>
//     );
// };

// export default AdminLayout;

// resources/js/Layouts/AdminLayout.jsx
import React, { useState, useEffect } from 'react';
import { usePage, router } from '@inertiajs/react';
import Navbar from '@/Components/Layout/Navbar';
import Sidebar from '@/Components/Layout/Sidebar';
import Footer from '@/Components/Layout/Footer';
import ContentWrapper from '@/Components/Layout/ContentWrapper';

const isMobileViewport = () => window.innerWidth <= 991;

const AdminLayout = ({
    children,
    header      = null,
    breadcrumbs = [],
    actions     = null,
}) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const { adminAuth } = usePage().props;
    const user = adminAuth?.user;

    const applySidebarState = (open) => {
        if (isMobileViewport()) {
            document.body.classList.toggle('sidebar-open', open);
            document.body.classList.remove('sidebar-collapse');
        } else {
            document.body.classList.toggle('sidebar-collapse', open);
            document.body.classList.remove('sidebar-open');
        }
    };

    const toggleSidebar = () => {
        setSidebarCollapsed((prev) => {
            const next = !prev;
            applySidebarState(next);
            return next;
        });
    };

    // ✅ Force correct default state on mount — mobile always starts hidden,
    // regardless of any stray body classes left over from SSR/previous page.
    useEffect(() => {
        document.body.classList.remove('sidebar-open', 'sidebar-collapse');
        setSidebarCollapsed(false);
    }, []);

    useEffect(() => {
        const closeOnNavigate = () => {
            if (isMobileViewport() && sidebarCollapsed) {
                setSidebarCollapsed(false);
                applySidebarState(false);
            }
        };
        const removeListener = router.on('navigate', closeOnNavigate);
        return () => removeListener();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sidebarCollapsed]);

    useEffect(() => {
        const handleResize = () => applySidebarState(sidebarCollapsed);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sidebarCollapsed]);

    return (
        <div className="wrapper">
            {/* ✅ Explicit CSS — guarantees mobile-hidden-by-default behavior
                even if AdminLTE's own CSS isn't loaded/working as expected */}
            <style>{`
                @media (max-width: 991.98px) {
                    .main-sidebar {
                        position: fixed;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        transform: translateX(-100%);
                        transition: transform 0.3s ease-in-out;
                        z-index: 1040;
                    }
                    body.sidebar-open .main-sidebar {
                        transform: translateX(0);
                    }
                }
            `}</style>

            <Navbar onToggleSidebar={toggleSidebar} user={user} />

            <Sidebar collapsed={sidebarCollapsed} user={user} />

            {sidebarCollapsed && (
                <div
                    className="sidebar-overlay"
                    onClick={() => {
                        setSidebarCollapsed(false);
                        applySidebarState(false);
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.35)',
                        zIndex: 1035,
                        display: isMobileViewport() ? 'block' : 'none',
                    }}
                />
            )}

            <ContentWrapper header={header} breadcrumbs={breadcrumbs} actions={actions}>
                {children}
            </ContentWrapper>

            <Footer />
        </div>
    );
};

export default AdminLayout;
