// resources/js/Pages/Admin/LandingPages/Index.jsx
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { Pencil, ExternalLink } from "lucide-react";

const LandingPagesIndex = ({ pages }) => {
    return (
        <AdminLayout header="Landing Pages">
            <Head title="Landing Pages" />

            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title mb-0">Manage Landing Pages</h3>
                        <p className="text-muted small mb-0">
                            Edit the content of each landing page. Click "Edit" to modify the page content.
                        </p>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead>
                                    <tr>
                                        <th style={{ width: 40 }}>#</th>
                                        <th>Page</th>
                                        <th>Description</th>
                                        <th style={{ width: 110 }}>Status</th>
                                        <th style={{ width: 220 }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pages.map((page, index) => (
                                        <tr key={page.slug}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <span className="fw-semibold">{page.title}</span>
                                            </td>
                                            <td className="text-muted small">{page.description}</td>
                                            <td>
                                                {page.is_active ? (
                                                    <span className="badge bg-success">Active</span>
                                                ) : (
                                                    <span className="badge bg-secondary">Inactive</span>
                                                )}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    {/* Internal SPA navigation -> Inertia Link is correct here */}
                                                    <Link
                                                        href={`/admin/landing-pages/${page.slug}/edit`}
                                                        className="btn btn-sm btn-primary d-inline-flex align-items-center gap-1"
                                                    >
                                                        <Pencil size={14} />
                                                        Edit
                                                    </Link>

                                                    {/*
                                                        Plain <a> on purpose: this opens the public page in
                                                        a NEW TAB. Inertia's <Link> intercepts clicks even
                                                        when target="_blank" is set, so it was hijacking the
                                                        navigation instead of opening a new tab. A native
                                                        anchor lets the browser handle it normally.
                                                    */}
                                                    <a
                                                        href={page.frontend_url || '#'}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-1"
                                                    >
                                                        <ExternalLink size={14} />
                                                        View
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default LandingPagesIndex;
