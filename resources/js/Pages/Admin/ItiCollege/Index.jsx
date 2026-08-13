import React, { useState } from 'react';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function ItiCollegeIndex({ colleges, filters }) {

    const { data, setData } = useForm({
        search: filters?.search || "",
        status: filters?.status || "",
        sort_field: filters?.sort_field || "created_at",
        sort_direction: filters?.sort_direction || "desc",
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleSort = (field) => {
        const direction = (data.sort_field === field && data.sort_direction === "asc") ? "desc" : "asc";
        setData({ ...data, sort_field: field, sort_direction: direction });

        router.get("/admin/iti-colleges", { ...data, sort_field: field, sort_direction: direction }, {
            preserveState: true,
            replace: true,
        });
    };

    const handleFilter = () => {
        const params = {};
        if (data.search) params.search = data.search;
        if (data.status) params.status = data.status;
        if (data.sort_field) params.sort_field = data.sort_field;
        if (data.sort_direction) params.sort_direction = data.sort_direction;

        router.get("/admin/iti-colleges", params, { preserveState: true, replace: true });
    };

    const resetFilters = () => {
        setData({ 
            search: "", 
            status: "",
            sort_field: "created_at", 
            sort_direction: "desc" 
        });
        router.get("/admin/iti-colleges", {}, { preserveState: true, replace: true });
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return "fas fa-sort";
        return data.sort_direction === "asc" ? "fas fa-sort-up" : "fas fa-sort-down";
    };

    // Toggle Status
    const toggleStatus = (item) => {
        if (!confirm(`Are you sure you want to ${item.is_active ? 'deactivate' : 'activate'} this ITI?`)) {
            return;
        }

        router.put(
            `/admin/iti-colleges/${item.id}/toggle-status`,
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
        if (confirm("Are you sure you want to permanently delete this ITI? This action cannot be undone!")) {
            router.delete(`/admin/iti-colleges/${id}`, {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    console.log('ITI deleted permanently');
                },
                onError: (errors) => {
                    console.error('Error deleting ITI:', errors);
                }
            });
        }
    };

    // Get Serial Number
    const getSerialNumber = (index) => {
        const currentPage = colleges.current_page || 1;
        const perPage = colleges.per_page || 10;
        return (currentPage - 1) * perPage + index + 1;
    };

    // Capitalize first letter
    const capitalize = (str) => {
        if (!str) return '-';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <AdminLayout header="ITI Colleges">
            <Head title="ITI Colleges" />

            <div className="container-fluid">

                {/* FILTER CARD */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-filter mr-2"></i> Filters
                        </h3>
                        <div className="card-tools">
                            <button
                                type="button"
                                className="btn btn-tool"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <i className={`fas ${showFilters ? 'fa-minus' : 'fa-plus'}`}></i>
                            </button>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-5">
                                    <label>Search</label>
                                    <input
                                        className="form-control"
                                        placeholder="Search by name, address or phone..."
                                        value={data.search}
                                        onChange={(e) => setData("search", e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleFilter()}
                                    />
                                </div>

                                <div className="col-md-4">
                                    <label>Status</label>
                                    <select
                                        className="form-control"
                                        value={data.status}
                                        onChange={(e) => setData("status", e.target.value)}
                                    >
                                        <option value="">All Status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <label>&nbsp;</label>
                                    <button className="btn btn-primary btn-block" onClick={handleFilter}>
                                        <i className="fas fa-filter mr-1"></i> Apply
                                    </button>
                                </div>
                            </div>

                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    <button className="btn btn-default" onClick={resetFilters}>
                                        <i className="fas fa-redo mr-1"></i> Reset
                                    </button>
                                </div>
                                <div className="text-muted">
                                    Total: {colleges.total}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* DATA TABLE */}
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-list mr-2"></i> ITI Colleges List
                        </h3>
                        <div className="card-tools">
                            <Link
                                href="/admin/iti-colleges/create"
                                className="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus"></i> Add ITI
                            </Link>
                        </div>
                    </div>

                    {/* Active Filters Display */}
                    {(filters.search || filters.status) && (
                        <div className="p-3 bg-light border-bottom">
                            <small className="text-muted mr-2">Active Filters:</small>
                            {filters.search && (
                                <span className="badge badge-info mr-2">
                                    Search: "{filters.search}"
                                    <button
                                        className="btn btn-xs btn-light ml-1"
                                        onClick={() => {
                                            setData('search', '');
                                            handleFilter();
                                        }}
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                            {filters.status && (
                                <span className="badge badge-info mr-2">
                                    Status: {filters.status === '1' ? 'Active' : 'Inactive'}
                                    <button
                                        className="btn btn-xs btn-light ml-1"
                                        onClick={() => {
                                            setData('status', '');
                                            handleFilter();
                                        }}
                                    >
                                        ×
                                    </button>
                                </span>
                            )}
                        </div>
                    )}

                    <div className="card-body table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th style={{ width: '60px' }}>S.No</th>
                                    <th style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
                                        Name <i className={getSortIcon('name')}></i>
                                    </th>
                                    <th style={{ width: '120px' }}>Type</th>
                                    <th>Address</th>
                                    <th style={{ width: '130px' }}>Phone</th>
                                    <th style={{ width: '100px' }}>Trades</th>
                                    <th style={{ width: '140px', textAlign: 'center' }}>Status</th>
                                    <th style={{ width: '120px', textAlign: 'center' }}>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {colleges.data && colleges.data.length ? (
                                    colleges.data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{getSerialNumber(index)}</td>
                                            <td>
                                                <span className="font-weight-medium">{item.name}</span>
                                            </td>
                                            <td>
                                                <span className="badge badge-info">
                                                    {capitalize(item.type)}
                                                </span>
                                            </td>
                                            <td>
                                                {item.address || (
                                                    <span className="text-muted">-</span>
                                                )}
                                            </td>
                                            <td>
                                                {item.phone || (
                                                    <span className="text-muted">-</span>
                                                )}
                                            </td>
                                            <td>
                                                <span className="badge badge-success">
                                                    {item.trades_count || 0}
                                                </span>
                                            </td>

                                            <td style={{ textAlign: 'center' }}>
                                                <div className="custom-control custom-switch d-inline-block">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id={`status-switch-${item.id}`}
                                                        checked={item.is_active === 1 || item.is_active === true}
                                                        onChange={() => toggleStatus(item)}
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor={`status-switch-${item.id}`}
                                                    >
                                                        <span className={`badge ${item.is_active ? 'badge-success' : 'badge-secondary'}`}>
                                                            <i className={`fas ${item.is_active ? 'fa-check-circle' : 'fa-times-circle'} mr-1`}></i>
                                                            {item.is_active ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </label>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="btn-group">
                                                    <Link
                                                        href={`/admin/iti-colleges/${item.id}/edit`}
                                                        className="btn btn-info btn-sm"
                                                        title="Edit"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>

                                                    <button
                                                        onClick={(e) => handleDelete(item.id, e)}
                                                        className="btn btn-dark btn-sm"
                                                        title="Permanently Delete"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8" className="text-center p-4 text-muted">
                                            <i className="fas fa-building fa-2x d-block mb-2"></i>
                                            No ITI Colleges found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                  <div className="card-footer">
                        {colleges.links && colleges.data && colleges.data.length > 0 && (
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="text-muted">
                                    Showing {colleges.from} to {colleges.to} of {colleges.total} entries
                                </div>
                                <nav>
                                    <ul className="pagination mb-0">
                                        {colleges.links.map((link, i) => (
                                            <li 
                                                key={i} 
                                                className={`page-item ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
                                            >
                                                <Link 
                                                    href={link.url || "#"} 
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
            </div>

            <style jsx>{`
                .table tbody td {
                    vertical-align: middle;
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
                .btn-tool {
                    color: #495057;
                }
                .btn-tool:hover {
                    color: #212529;
                }
                .custom-control-label {
                    cursor: pointer;
                }
                .custom-switch .custom-control-input:checked ~ .custom-control-label::before {
                    background-color: #28a745;
                    border-color: #28a745;
                }
                .btn-group .btn {
                    margin: 0 2px;
                }
                .bg-light {
                    background-color: #f8f9fa !important;
                }
                .border-bottom {
                    border-bottom: 1px solid #dee2e6 !important;
                }
                .btn-block {
                    width: 100%;
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
                .table-bordered {
                    border: 1px solid #dee2e6;
                }
                .table-hover tbody tr:hover {
                    background-color: rgba(0,0,0,0.03);
                }
                .card {
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                }
                .card-header {
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #dee2e6;
                    padding: 12px 20px;
                }
                .card-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                    color: #333;
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
                .font-weight-medium {
                    font-weight: 500;
                }
                .text-muted {
                    color: #6c757d !important;
                }
                @media (max-width: 768px) {
                    .table {
                        font-size: 0.85rem;
                    }
                    .btn-group .btn {
                        padding: 4px 8px;
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </AdminLayout>
    );
}