
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ domains = [] }) {

    // Toggle active/inactive
    const handleToggleStatus = (item) => {
        if (!confirm(`Are you sure you want to ${item.is_active ? 'deactivate' : 'activate'} this career domain?`)) {
            return;
        }

        router.put(
            `/admin/career-domains/${item.id}/toggle-status`,
            { is_active: !item.is_active },
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

    // Permanent Delete
    const handleDelete = (id, e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to permanently delete this career domain? This action cannot be undone!")) {
            router.delete(`/admin/career-domains/${id}`, {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    console.log('Domain deleted permanently');
                },
                onError: (errors) => {
                    console.error('Error deleting domain:', errors);
                }
            });
        }
    };

    // Get serial number
    const getSerialNumber = (index) => {
        const currentPage = domains.current_page || 1;
        const perPage = domains.per_page || 10;
        return (currentPage - 1) * perPage + index + 1;
    };

    // Determine if data is paginated or plain array
    const domainsData = domains.data || domains;
    const isPaginated = domains.data !== undefined;

    return (
        <AdminLayout header="Career Domains">
            <Head title="Career Domains" />

            {/* TOP BAR - Add button on right corner */}
            <div className="card">
                <div className="card-body d-flex justify-content-between align-items-center">
                   
                    <Link
                        href={route("admin.career-domains.create")}
                        className="btn btn-primary"
                        style={{ marginLeft: "auto" }}
                    >
                        <i className="fas fa-plus mr-1"></i> Add Career Domain
                    </Link>
                </div>
            </div>

            {/* CARD GRID */}
            <div className="card mt-3">
                <div className="card-body">
                    <div className="row">
                        {domainsData && domainsData.length > 0 ? (
                            domainsData.map((item, index) => (
                                <div className="col-md-4 mb-4" key={item.id}>
                                    <div className="card domain-card h-100 shadow-sm">
                                        <div className="position-relative">
                                            <img
                                                src={item.image ? `/storage/${item.image}` : "/images/default.png"}
                                                className="card-img-top"
                                                style={{
                                                    height: 200,
                                                    objectFit: "contain",
                                                    background: "#f8f9fa",
                                                    padding: "10px"
                                                }}
                                                alt={item.title}
                                            />
                                            {/* Status Badge */}
                                            <span
                                                role="button"
                                                onClick={() => handleToggleStatus(item)}
                                                className={`position-absolute badge ${item.is_active ? 'badge-success' : 'badge-secondary'}`}
                                                style={{
                                                    top: "10px",
                                                    right: "10px",
                                                    padding: "6px 12px",
                                                    fontSize: "0.75rem",
                                                    cursor: "pointer",
                                                    borderRadius: "20px",
                                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                                                }}
                                                title={item.is_active ? "Active — click to deactivate" : "Inactive — click to activate"}
                                            >
                                                <i className={`fas ${item.is_active ? 'fa-check-circle' : 'fa-times-circle'} mr-1`}></i>
                                                {item.is_active ? "Active" : "Inactive"}
                                            </span>
                                        </div>

                                        <div className="card-body d-flex flex-column">
                                            <h5 className="fw-bold domain-title line-clamp-1">{item.title}</h5>
                                            <p className="text-muted small mb-2">
                                                <i className="fas fa-tag mr-1"></i>
                                                {item.subtitle || "No subtitle"}
                                            </p>
                                            <p className="text-muted small flex-grow-1 line-clamp-3">
                                                {item.details?.substring(0, 120)}...
                                            </p>
                                        </div>

                                        <div className="card-footer d-flex justify-content-between align-items-center">
                                            <Link
                                                href={route("admin.career-domains.edit", item.id)}
                                                className="btn btn-info btn-sm"
                                                title="Edit"
                                            >
                                                <i className="fas fa-edit"></i> Edit
                                            </Link>

                                            <button
                                                onClick={(e) => handleDelete(item.id, e)}
                                                className="btn btn-dark btn-sm"
                                                title="Permanently Delete"
                                                style={{ marginLeft: "auto" }}
                                            >
                                                <i className="fas fa-trash"></i> Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <i className="fas fa-folder-open fa-3x text-muted mb-3 d-block"></i>
                                <h5 className="text-muted">No career domains found</h5>
                                <p className="text-muted">Click "Add Career Domain" to create one.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination - Only if paginated */}
                    {isPaginated && domains.links && domains.data && domains.data.length > 0 && (
                        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                            <div className="text-muted">
                                Showing {domains.from} to {domains.to} of {domains.total} entries
                            </div>
                            <nav>
                                <ul className="pagination mb-0">
                                    {domains.links.map((link, index) => (
                                        <li
                                            key={index}
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
                    )}
                </div>
            </div>

            <style jsx>{`
                .domain-card {
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    border: 1px solid #e9ecef;
                    overflow: hidden;
                }
                .domain-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
                    border-color: #dee2e6;
                }
                .card-img-top {
                    border-bottom: 1px solid #e9ecef;
                }
                .domain-title {
                    color: #2c3e50;
                    font-size: 1.1rem;
                }
                .line-clamp-1 {
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .badge-success {
                    background-color: #28a745;
                    color: #fff;
                }
                .badge-secondary {
                    background-color: #6c757d;
                    color: #fff;
                }
                .btn-sm {
                    padding: 6px 12px;
                    font-size: 0.85rem;
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
                .btn-dark {
                    background-color: #343a40;
                    border-color: #343a40;
                    color: #fff;
                }
                .btn-dark:hover {
                    background-color: #23272b;
                    border-color: #1d2124;
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
                .card-footer {
                    background: #f8f9fa;
                    border-top: 1px solid #e9ecef;
                    padding: 12px 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .position-relative {
                    position: relative;
                }
                .position-absolute {
                    position: absolute;
                }
                .shadow-sm {
                    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;
                }
                .border-top {
                    border-top: 1px solid #dee2e6 !important;
                }
                .flex-grow-1 {
                    flex: 1 1 auto;
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
                .card-body {
                    display: flex;
                    flex-direction: column;
                }
                /* Delete button corner alignment */
                .card-footer .btn-dark {
                    margin-left: auto;
                }
                @media (max-width: 768px) {
                    .domain-card {
                        margin-bottom: 1rem;
                    }
                    .btn-sm {
                        padding: 4px 8px;
                        font-size: 0.75rem;
                    }
                    .card-footer {
                        flex-wrap: wrap;
                        gap: 8px;
                    }
                    .card-footer .btn-dark {
                        margin-left: auto;
                    }
                }
            `}</style>
        </AdminLayout>
    );
}