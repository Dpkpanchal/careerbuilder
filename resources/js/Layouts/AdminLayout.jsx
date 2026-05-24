// resources/js/Layouts/AdminLayout.jsx
import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/Layout/Navbar';
import Sidebar from '@/Components/Layout/Sidebar';
import Footer from '@/Components/Layout/Footer';
import ContentWrapper from '@/Components/Layout/ContentWrapper';

const AdminLayout = ({
    children,
    header      = null,
    breadcrumbs = [],
    actions     = null,
}) => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const { adminAuth } = usePage().props;
    const user = adminAuth?.user;

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
        document.body.classList.toggle('sidebar-collapse');
        document.body.classList.toggle('sidebar-open');
    };

    return (
        <div className="wrapper">
            <Navbar onToggleSidebar={toggleSidebar} user={user} />

            <Sidebar collapsed={sidebarCollapsed} user={user} />

            <ContentWrapper header={header} breadcrumbs={breadcrumbs} actions={actions}>
                {children}
            </ContentWrapper>

            <Footer />
        </div>
    );
};

export default AdminLayout;
