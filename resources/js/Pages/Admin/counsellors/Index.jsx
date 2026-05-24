import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

export default function CounsellorsIndex({ counsellors, filters }) {

    const { data, setData } = useForm({
        search: filters.search || "",
        sort_field: filters.sort_field || "created_at",
        sort_direction: filters.sort_direction || "desc",
        status: filters.status || "", // ✅ NEW
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        router.get("/admin/counsellors", data, {
            preserveState: true,
            replace: true,
        });
    };

    const handleReset = () => {
        setData({
            search: "",
            sort_field: "created_at",
            sort_direction: "desc",
        });

        router.get("/admin/counsellors", {}, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSort = (field) => {
        const newDirection =
            data.sort_field === field && data.sort_direction === "asc"
                ? "desc"
                : "asc";

        setData({ ...data, sort_field: field, sort_direction: newDirection });

        router.get(
            "/admin/counsellors",
            { ...data, sort_field: field, sort_direction: newDirection },
            { preserveState: true, replace: true }
        );
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return "fas fa-sort";
        return data.sort_direction === "asc"
            ? "fas fa-sort-up"
            : "fas fa-sort-down";
    };

    // ✅ Pagination-safe Serial Number
    const getSerialNumber = (index) => {
        return (counsellors.current_page - 1) * counsellors.per_page + index + 1;
    };

    return (
        <AdminLayout header="Counsellor Management">
            <Head title="Counsellors" />

            <div className="container-fluid">

                {/* Filters */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Filters</h3>
                        <div className="card-tools">
                            <button
                                type="button"
                                className="btn btn-tool"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <i className={`fas ${showFilters ? "fa-minus" : "fa-plus"}`}></i>
                            </button>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="card-body">
                            <div className="row">

                                {/* Search */}
                                <div className="col-md-4">
                                    <label>Search</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by name or email"
                                        value={data.search}
                                        onChange={(e) => setData("search", e.target.value)}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && handleFilter()
                                        }
                                    />
                                </div>

                                {/* Sort */}
                                <div className="col-md-3">
                                    <label>Sort By</label>
                                    <select
                                        className="form-control"
                                        value={data.sort_field}
                                        onChange={(e) =>
                                            setData("sort_field", e.target.value)
                                        }
                                    >
                                        <option value="created_at">Created At</option>
                                        <option value="name">Name</option>
                                        <option value="email">Email</option>
                                    </select>
                                </div>


                                <div className="col-md-3">
                                    <label>Status</label>
                                    <select
                                        className="form-control"
                                        value={data.status}
                                        onChange={(e) => setData("status", e.target.value)}
                                    >
                                        <option value="">All Counsellors</option>
                                        <option value="active">Active</option>
                                        <option value="deleted">Deleted</option>
                                    </select>
                                </div>


                            </div>

                            <div className="mt-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleFilter}
                                >
                                    Apply Filters
                                </button>

                                <button
                                    className="btn btn-secondary ml-2"
                                    onClick={handleReset}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Counsellors Table */}
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">Counsellor List</h3>
                        <div className="card-tools">
                            <Link
                                href="/admin/counsellors/create"
                                className="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus"></i> Add Counsellor
                            </Link>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th style={{ width: "60px" }}>S.No</th>

                                        <th
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleSort("name")}
                                        >
                                            Name <i className={getSortIcon("name")}></i>
                                        </th>

                                        <th
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleSort("email")}
                                        >
                                            Email <i className={getSortIcon("email")}></i>
                                        </th>

                                        <th>Mobile</th>
                                        <th>Status</th>

                                        <th style={{ width: "120px" }}>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {counsellors.data.length ? (
                                        counsellors.data.map((person, index) => (
                                            <tr key={person.id}>
                                                <td>{getSerialNumber(index)}</td>
                                                <td>{person.name}</td>
                                                <td>{person.email}</td>
                                                <td>{person.mobile || "-"}</td>
                                               

                                                <td>
                                                    {person.deleted_at ? (
                                                        <span className="badge badge-secondary">Deleted</span>
                                                    ) : (
                                                        <span className="badge badge-success">Active</span>
                                                    )}
                                                </td>


                                               <td>
                                                    <div className="btn-group">

                                                        {/* ✅ If NOT deleted → show Edit + Delete */}
                                                        {!person.deleted_at ? (
                                                            <>
                                                                <Link
                                                                    href={`/admin/counsellors/${person.id}/edit`}
                                                                    className="btn btn-info btn-sm"
                                                                >
                                                                    <i className="fas fa-edit"></i>
                                                                </Link>

                                                                <Link
                                                                    href={`/admin/counsellors/${person.id}`}
                                                                    method="delete"
                                                                    as="button"
                                                                    className="btn btn-danger btn-sm"
                                                                    onClick={(e) => {
                                                                        if (!confirm("Delete this counsellor?")) {
                                                                            e.preventDefault();
                                                                        }
                                                                    }}
                                                                >
                                                                    <i className="fas fa-trash"></i>
                                                                </Link>
                                                            </>
                                                        ) : (
                                                            /* ✅ If deleted → show Restore */
                                                            <button
                                                                onClick={() =>
                                                                    router.post(`/admin/counsellors/${person.id}/restore`)
                                                                }
                                                                className="btn btn-success btn-sm"
                                                                title="Restore Counsellor"
                                                            >
                                                                <i className="fas fa-undo"></i>
                                                            </button>
                                                        )}

                                                    </div>
                                                </td>


                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center py-4">
                                                No counsellors found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {counsellors.links && (
                            <div className="mt-3 d-flex justify-content-between">
                                <div className="text-muted">
                                    Showing {counsellors.from} to {counsellors.to} of{" "}
                                    {counsellors.total}
                                </div>

                                <ul className="pagination">
                                    {counsellors.links.map((link, i) => (
                                        <li
                                            key={i}
                                            className={`page-item ${
                                                link.active ? "active" : ""
                                            } ${!link.url ? "disabled" : ""}`}
                                        >
                                            <Link
                                                href={link.url || "#"}
                                                className="page-link"
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
