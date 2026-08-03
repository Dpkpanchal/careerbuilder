import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ contents, filters = {} }) {
    const [nameSearch, setNameSearch] = useState(filters.search || "");
    const [selectedStatus, setSelectedStatus] = useState(filters.status || "");

    const deleteItem = (id) => {
        if (confirm("Delete this career content?")) {
            router.delete(`/admin/career-content/${id}`, {
                preserveScroll: true,
            });
        }
    };

    const toggleStatus = (id) => {
        router.patch(`/admin/career-content/${id}/toggle-status`, {}, {
            preserveScroll: true,
        });
    };

    // Laravel's paginate() response shape: { data, links, from, to, total, current_page, last_page }
    const {
        data: rows = [],
        links = [],
        from,
        to,
        total,
    } = contents;

    const goToPage = (url) => {
        if (!url) return;
        router.get(url, {}, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const applyFilters = (overrides = {}) => {
        const params = {
            search: overrides.search !== undefined ? overrides.search : nameSearch,
            status: overrides.status !== undefined ? overrides.status : selectedStatus,
        };

        Object.keys(params).forEach((key) => {
            if (!params[key]) delete params[key];
        });

        router.get("/admin/career-content", params, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const handleStatusChange = (e) => {
        const value = e.target.value;
        setSelectedStatus(value);
        applyFilters({ status: value });
    };

    const handleNameKeyDown = (e) => {
        if (e.key === "Enter") {
            applyFilters({ search: nameSearch });
        }
    };

    const clearFilters = () => {
        setNameSearch("");
        setSelectedStatus("");
        router.get("/admin/career-content", {}, {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const hasActiveFilters = nameSearch || selectedStatus;

    return (

        <AdminLayout header="Career Content">

            <Head title="Career Content" />

            <style>{`
                .career-card {
                    border: none;
                    border-radius: 0.75rem;
                    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                }
                .career-card .card-header {
                    background: linear-gradient(135deg, #4e73df 0%, #375bd2 100%);
                    border-bottom: none;
                    padding: 1.25rem 1.5rem;
                }
                .career-card .card-header h3 {
                    color: #fff;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                }
                .career-card .card-header .btn-primary {
                    background-color: #fff;
                    color: #375bd2;
                    border: none;
                    font-weight: 600;
                    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.15);
                }
                .career-card .card-header .btn-primary:hover {
                    background-color: #f0f2ff;
                }
                .filter-bar {
                    padding: 1rem 1.5rem;
                    background-color: #f8f9fc;
                    border-bottom: 1px solid #e3e6f0;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }
                .filter-bar select,
                .filter-bar input[type="text"] {
                    border-radius: 0.5rem;
                    border: 1px solid #d1d3e2;
                    padding: 0.4rem 0.75rem;
                    font-size: 0.85rem;
                    min-width: 160px;
                }
                .filter-bar input[type="text"] {
                    min-width: 260px;
                }
                .filter-clear-btn {
                    font-size: 0.8rem;
                    color: #e74a3b;
                    background: none;
                    border: none;
                    font-weight: 600;
                }
                .career-table thead th {
                    background-color: #f8f9fc;
                    color: #5a5c69;
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 0.04em;
                    border-bottom: 2px solid #e3e6f0;
                    white-space: nowrap;
                }
                .career-table tbody tr {
                    transition: background-color 0.15s ease-in-out;
                }
                .career-table tbody tr:hover {
                    background-color: #f8f9fc;
                }
                .career-table td {
                    vertical-align: middle;
                }
                .chip {
                    display: inline-block;
                    padding: 0.25rem 0.65rem;
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    background-color: #eef1fd;
                    color: #375bd2;
                }
                .status-pill {
                    padding: 0.35rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                }
                .status-pill.active {
                    background-color: #e2f8ec;
                    color: #1cc88a;
                }
                .status-pill.inactive {
                    background-color: #fbe7e9;
                    color: #e74a3b;
                }
                .action-btn {
                    border-radius: 0.5rem;
                    width: 32px;
                    height: 32px;
                    padding: 0;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .breadcrumb-path {
                    font-size: 0.85rem;
                    color: #858796;
                }
                .breadcrumb-path .sep {
                    margin: 0 0.35rem;
                    color: #d1d3e2;
                }
                .empty-state {
                    padding: 3rem 1rem;
                    text-align: center;
                    color: #b7b9cc;
                }
                .empty-state i {
                    font-size: 2.5rem;
                    margin-bottom: 0.75rem;
                    display: block;
                }
                .pagination-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 1.5rem;
                    border-top: 1px solid #e3e6f0;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }
                .pagination-info {
                    font-size: 0.85rem;
                    color: #858796;
                }
                .pagination .page-link {
                    border-radius: 0.4rem;
                    margin: 0 2px;
                    border: none;
                    color: #375bd2;
                    font-weight: 500;
                }
                .pagination .page-item.active .page-link {
                    background-color: #4e73df;
                    color: #fff;
                }
                .pagination .page-item.disabled .page-link {
                    color: #d1d3e2;
                    background: transparent;
                }
            `}</style>

            <div className="container-fluid">

                <div className="card career-card">

                    <div className="card-header">

                        <div className="row align-items-center">

                            <div className="col-md-6">

                                <h3 className="card-title mb-0">
                                    Career Content
                                </h3>

                            </div>

                            <div className="col-md-6 text-right">

                                <Link
                                    href="/admin/career-content/create"
                                    className="btn btn-primary"
                                >
                                    <i className="fas fa-plus mr-1"></i>
                                    Create
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="filter-bar">

                        <input
                            type="text"
                            placeholder="Search path / url..."
                            value={nameSearch}
                            onChange={(e) => setNameSearch(e.target.value)}
                            onKeyDown={handleNameKeyDown}
                            onBlur={() => applyFilters({ search: nameSearch })}
                        />

                        {/* <select value={selectedStatus} onChange={handleStatusChange}>
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select> */}

                        {hasActiveFilters && (
                            <button
                                type="button"
                                className="filter-clear-btn"
                                onClick={clearFilters}
                            >
                                Clear Filters
                            </button>
                        )}

                    </div>

                    <div className="card-body table-responsive p-0">

                        <table className="table career-table mb-0">

                            <thead>

                            <tr>

                                <th width="60">#</th>
                                <th>Path</th>
                                {/* <th>Status</th> */}
                                <th width="160" className="text-center">Action</th>

                            </tr>

                            </thead>

                            <tbody>

                            {rows.length ? (

                                rows.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="text-muted">
                                            {from ? from + index : index + 1}
                                        </td>

                                        <td>

                                            <div className="breadcrumb-path">
                                                {item.menu?.label}
                                                {item.tab?.label && (
                                                    <>
                                                        <span className="sep">/</span>
                                                        {item.tab.label}
                                                    </>
                                                )}
                                                {item.section?.label && (
                                                    <>
                                                        <span className="sep">/</span>
                                                        {item.section.label}
                                                    </>
                                                )}
                                                {item.link?.label && (
                                                    <>
                                                        <span className="sep">/</span>
                                                        {item.link.label}
                                                    </>
                                                )}
                                            </div>

                                        </td>

                                        {/* <td>

                                            <span className={`status-pill ${item.is_active ? "active" : "inactive"}`}>

                                                {item.is_active ? "Active" : "Inactive"}

                                            </span>

                                        </td> */}



                                        <td className="text-center">

                                            {/* <button
                                                className={`btn action-btn ${item.is_active ? "btn-outline-warning" : "btn-outline-success"} mr-1`}
                                                onClick={() => toggleStatus(item.id)}
                                                title={item.is_active ? "Deactivate" : "Activate"}
                                            >
                                                <i className={`fas ${item.is_active ? "fa-eye-slash" : "fa-eye"}`}></i>
                                            </button> */}

                                            <Link
                                                href={`/admin/career-content/${item.id}/edit`}
                                                className="btn btn-outline-info action-btn mr-1"
                                                title="Edit"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Link>

                                            {/* <button
                                                className="btn btn-outline-danger action-btn"
                                                onClick={() => deleteItem(item.id)}
                                                title="Delete"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button> */}

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="4">

                                        <div className="empty-state">
                                            <i className="fas fa-folder-open"></i>
                                            No Records Found
                                        </div>

                                    </td>

                                </tr>

                            )}

                            </tbody>

                        </table>

                    </div>

                    {rows.length > 0 && (

                        <div className="pagination-wrap">

                            <div className="pagination-info">
                                Showing {from} to {to} of {total} entries
                            </div>

                            <nav>

                                <ul className="pagination mb-0">

                                    {links.map((link, idx) => (

                                        <li
                                            key={idx}
                                            className={`page-item ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
                                        >

                                            <button
                                                type="button"
                                                className="page-link"
                                                disabled={!link.url}
                                                onClick={() => goToPage(link.url)}
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

        </AdminLayout>

    );
}
