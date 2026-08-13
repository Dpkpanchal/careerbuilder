// // resources/js/Pages/Admin/LandingPages/Index.jsx
// import React from "react";
// import AdminLayout from "@/Layouts/AdminLayout";
// import { Head, Link } from "@inertiajs/react";
// import { Pencil, ExternalLink } from "lucide-react";

// const LandingPagesIndex = ({ pages }) => {
//     return (
//         <AdminLayout header="Landing Pages">
//             <Head title="Landing Pages" />

//             <div className="container-fluid">
//                 <div className="card">
//                     <div className="card-header">
//                         <h3 className="card-title mb-0">Manage Landing Pages</h3>
//                         <p className="text-muted small mb-0">
//                             Edit the content of each landing page. Click "Edit" to modify the page content.
//                         </p>
//                     </div>

//                     <div className="card-body">
//                         <div className="table-responsive">
//                             <table className="table table-hover align-middle">
//                                 <thead>
//                                     <tr>
//                                         <th style={{ width: 40 }}>#</th>
//                                         <th>Page</th>
//                                         <th>Description</th>
//                                         <th style={{ width: 110 }}>Status</th>
//                                         <th style={{ width: 220 }}>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {pages.map((page, index) => (
//                                         <tr key={page.slug}>
//                                             <td>{index + 1}</td>
//                                             <td>
//                                                 <span className="fw-semibold">{page.title}</span>
//                                             </td>
//                                             <td className="text-muted small">{page.description}</td>
//                                             <td>
//                                                 {page.is_active ? (
//                                                     <span className="badge bg-success">Active</span>
//                                                 ) : (
//                                                     <span className="badge bg-secondary">Inactive</span>
//                                                 )}
//                                             </td>
//                                             <td>
//                                                 <div className="d-flex align-items-center gap-2">
//                                                     {/* Internal SPA navigation -> Inertia Link is correct here */}
//                                                     <Link
//                                                         href={`/admin/landing-pages/${page.slug}/edit`}
//                                                         className="btn btn-sm btn-primary d-inline-flex align-items-center gap-1"
//                                                     >
//                                                         <Pencil size={14} />
//                                                         Edit
//                                                     </Link>

//                                                     {/*
//                                                         Plain <a> on purpose: this opens the public page in
//                                                         a NEW TAB. Inertia's <Link> intercepts clicks even
//                                                         when target="_blank" is set, so it was hijacking the
//                                                         navigation instead of opening a new tab. A native
//                                                         anchor lets the browser handle it normally.
//                                                     */}
//                                                     <a
//                                                         href={page.frontend_url || '#'}
//                                                         target="_blank"
//                                                         rel="noopener noreferrer"
//                                                         className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
//                                                     >
//                                                         <ExternalLink size={14} />
//                                                         View
//                                                     </a>
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default LandingPagesIndex;


// resources/js/Pages/Admin/LandingPages/Index.jsx
import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Pencil, ExternalLink, Search, Filter, RefreshCw } from "lucide-react";

const LandingPagesIndex = ({ pages, filters = {} }) => {
    const [search, setSearch] = useState(filters?.search || "");
    const [statusFilter, setStatusFilter] = useState(filters?.status || "");
    const [showFilters, setShowFilters] = useState(false);

    console.log('Pages Data:', pages); // Debug: Check what data is coming

    // Determine if data is paginated or plain array
    const pagesData = pages?.data || pages || [];
    const isPaginated = pages?.data !== undefined;

    // Apply Filters
    const applyFilters = () => {
        const params = {};
        if (search) params.search = search;
        if (statusFilter) params.status = statusFilter;
        router.get("/admin/landing-pages", params, { preserveState: true, replace: true });
    };

    // Reset Filters
    const resetFilters = () => {
        setSearch("");
        setStatusFilter("");
        router.get("/admin/landing-pages", {}, { preserveState: true, replace: true });
    };

    // Handle Enter Key
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            applyFilters();
        }
    };

    // Toggle Status
    const toggleStatus = (page) => {
        if (!confirm(`Are you sure you want to ${page.is_active ? 'deactivate' : 'activate'} this landing page?`)) {
            return;
        }

        router.put(
            `/admin/landing-pages/${page.slug}/toggle-status`,
            { is_active: !page.is_active },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    console.log('Status updated successfully');
                },
                onError: (errors) => {
                    console.error('Error updating status:', errors);
                }
            }
        );
    };

    // Get Serial Number
    const getSerialNumber = (index) => {
        if (isPaginated) {
            const currentPage = pages.current_page || 1;
            const perPage = pages.per_page || 10;
            return (currentPage - 1) * perPage + index + 1;
        }
        return index + 1;
    };

    return (
        <AdminLayout header="Landing Pages">
            <Head title="Landing Pages" />

            <div className="container-fluid">

         

                {/* Main Card */}
                <div className="card mt-3 shadow-sm">
                    <div className="card-header bg-white border-bottom">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="card-title mb-0 font-weight-bold">
                                    <i className="fas fa-file-alt mr-2"></i>
                                    Landing Pages
                                </h3>
                                <p className="text-muted small mb-0 mt-1">
                                    Edit the content of each landing page. Click "Edit" to modify the page content.
                                </p>
                            </div>
                            <div className="text-muted">
                                Total: <span className="font-weight-bold">{isPaginated ? pages.total : pagesData.length}</span>
                            </div>
                        </div>
                    </div>

                

                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th style={{ width: 50 }} className="text-center">#</th>
                                        <th>Page</th>
                                        <th>Description</th>
                                      
                                        <th style={{ width: 200, textAlign: 'center' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pagesData && pagesData.length > 0 ? (
                                        pagesData.map((page, index) => (
                                            <tr key={page.slug || page.id || index}>
                                                <td className="text-center font-weight-bold">
                                                    {getSerialNumber(index)}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="bg-primary rounded-circle p-2 mr-3" style={{ width: 36, height: 36 }}>
                                                            <i className="fas fa-file-alt text-white" style={{ fontSize: 14 }}></i>
                                                        </div>
                                                        <div>
                                                            <span className="fw-semibold">{page.title || page.name || 'Untitled'}</span>
                                                            <div className="text-muted small">
                                                                <i className="fas fa-link mr-1"></i>
                                                                {page.slug || '-'}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-muted small">
                                                    {page.description || '-'}
                                                </td>
                                             
                                                <td>
                                                    <div className="d-flex justify-content-center gap-2">
                                                        <Link
                                                            href={`/admin/landing-pages/${page.slug || page.id}/edit`}
                                                            className="btn btn-info btn-sm"
                                                            title="Edit Page"
                                                        >
                                                            <Pencil size={14} className="mr-1" />
                                                            Edit
                                                        </Link>

                                                        <a
                                                            href={page.frontend_url || '#'}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-outline-secondary btn-sm"
                                                            title="View Page"
                                                        >
                                                            <ExternalLink size={14} className="mr-1" />
                                                            View
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-5">
                                                <i className="fas fa-file-alt fa-3x text-muted mb-3 d-block"></i>
                                                <h5 className="text-muted">No landing pages found</h5>
                                                <p className="text-muted small">No pages match your search criteria.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination - Only if paginated */}
                    {isPaginated && pages.links && pages.data && pages.data.length > 0 && (
                        <div className="card-footer bg-light border-top">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="text-muted small">
                                    <i className="fas fa-info-circle mr-1"></i>
                                    Showing {pages.from} to {pages.to} of {pages.total} entries
                                </div>
                                <nav>
                                    <ul className="pagination mb-0">
                                        {pages.links.map((link, i) => (
                                            <li
                                                key={i}
                                                className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                            >
                                                <Link
                                                    href={link.url || '#'}
                                                    className="page-link"
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .card {
                    border-radius: 12px;
                    border: 1px solid #e9ecef;
                    overflow: hidden;
                }
                .card-header {
                    padding: 16px 20px;
                }
                .card-body {
                    padding: 20px;
                }
                .card-footer {
                    padding: 12px 20px;
                }
                .bg-light {
                    background-color: #f8f9fa !important;
                }
                .bg-white {
                    background-color: #ffffff !important;
                }
                .shadow-sm {
                    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;
                }
                .table td {
                    padding: 12px 16px;
                    vertical-align: middle;
                }
                .table th {
                    padding: 12px 16px;
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: 0.75rem;
                    letter-spacing: 0.5px;
                    color: #495057;
                }
                .table-hover tbody tr:hover {
                    background-color: #f8f9ff;
                    transition: all 0.2s ease;
                }
                .badge {
                    font-weight: 500;
                    font-size: 0.8rem;
                    padding: 4px 10px;
                    border-radius: 20px;
                }
                .badge-success {
                    background-color: #28a745;
                    color: #fff;
                }
                .badge-secondary {
                    background-color: #6c757d;
                    color: #fff;
                }
                .badge-info {
                    background-color: #17a2b8;
                    color: #fff;
                }
                .btn-sm {
                    padding: 6px 14px;
                    font-size: 0.85rem;
                    border-radius: 6px;
                }
                .btn-info {
                    background-color: #17a2b8;
                    border-color: #17a2b8;
                    color: #fff;
                }
                .btn-info:hover {
                    background-color: #138496;
                    border-color: #117a8b;
                    color: #fff;
                }
                .btn-outline-secondary {
                    color: #6c757d;
                    border-color: #6c757d;
                }
                .btn-outline-secondary:hover {
                    background-color: #6c757d;
                    color: #fff;
                }
                .btn-primary {
                    background-color: #007bff;
                    border-color: #007bff;
                    color: #fff;
                }
                .btn-primary:hover {
                    background-color: #0069d9;
                    border-color: #0062cc;
                    color: #fff;
                }
                .btn-default {
                    background-color: #f8f9fa;
                    border-color: #ddd;
                    color: #333;
                }
                .btn-default:hover {
                    background-color: #e9ecef;
                    border-color: #ccc;
                }
                .custom-switch .custom-control-input:checked ~ .custom-control-label::before {
                    background-color: #28a745;
                    border-color: #28a745;
                }
                .custom-control-label {
                    cursor: pointer;
                }
                .gap-2 {
                    gap: 8px;
                }
                .rounded-circle {
                    border-radius: 50% !important;
                }
                .fw-semibold {
                    font-weight: 600;
                }
                .font-weight-bold {
                    font-weight: 700;
                }
                .text-muted {
                    color: #6c757d !important;
                }
                .page-item.active .page-link {
                    background-color: #007bff;
                    border-color: #007bff;
                    color: #fff;
                }
                .page-link {
                    color: #007bff;
                }
                .page-link:hover {
                    color: #0056b3;
                }
                .border-top {
                    border-top: 1px solid #dee2e6 !important;
                }
                .border-bottom {
                    border-bottom: 1px solid #dee2e6 !important;
                }
                .form-control:focus {
                    border-color: #007bff;
                    box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25);
                }
                .btn-block {
                    width: 100%;
                }
                @media (max-width: 768px) {
                    .table {
                        font-size: 0.85rem;
                    }
                    .btn-sm {
                        padding: 4px 10px;
                        font-size: 0.75rem;
                    }
                    .gap-2 {
                        gap: 4px;
                    }
                    .card-footer .d-flex {
                        flex-direction: column;
                        gap: 10px;
                    }
                }
            `}</style>
        </AdminLayout>
    );
};

export default LandingPagesIndex;
