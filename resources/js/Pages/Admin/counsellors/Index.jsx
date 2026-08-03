import React, { useState, useEffect } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, router, usePage } from "@inertiajs/react";

export default function CounsellorsIndex({ counsellors, filters }) {

    const { flash } = usePage().props;
    const [bannerMessage, setBannerMessage] = useState(null);

    useEffect(() => {
        if (flash?.success) {
            setBannerMessage({ type: "success", text: flash.success });
        } else if (flash?.error) {
            setBannerMessage({ type: "error", text: flash.error });
        }
    }, [flash]);

    const { data, setData } = useForm({
        search: filters.search || "",
        subject: filters.subject || "",           // ✅ NEW
        qualification: filters.qualification || "", // ✅ NEW
        sort_field: filters.sort_field || "created_at",
        sort_direction: filters.sort_direction || "desc",
        status: filters.status || "",
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
            subject: "",           // ✅ NEW
            qualification: "",     // ✅ NEW
            sort_field: "created_at",
            sort_direction: "desc",
            status: "",
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

    // ✅ Active / Inactive toggle
    const toggleActive = (id) => {
        router.post(`/admin/counsellors/${id}/toggle-active`, {}, {
            preserveScroll: true,
        });
    };

    // ✅ Soft delete
    const softDeleteCounsellor = (id) => {
        router.delete(`/admin/counsellors/${id}`, {
            preserveScroll: true,
        });
    };

    // ✅ Hard delete
    const hardDeleteCounsellor = (id) => {
        if (!confirm("This will PERMANENTLY delete this counsellor and cannot be undone. Continue?")) return;

        router.delete(route("admin.counsellors.force-delete", id), {
            preserveScroll: true,
            onError: (errors) => {
                console.error("Force delete failed:", errors);
                alert("Failed to permanently delete counsellor. Check console / network tab for details.");
            },
        });
    };

    return (
        <AdminLayout header="Counsellor Management">
            <Head title="Counsellors" />

            <div className="container-fluid">

                {/* ✅ Flash message banner */}
                {/* {bannerMessage && (
                    <div
                        className={`alert ${bannerMessage.type === "success" ? "alert-success" : "alert-danger"} alert-dismissible fade show`}
                        role="alert"
                    >
                        {bannerMessage.text}
                        <button
                            type="button"
                            className="close"
                            onClick={() => setBannerMessage(null)}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                )} */}

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
                                <div className="col-md-3">
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

                                {/* ✅ NEW: Subject filter */}
                                <div className="col-md-3">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by subject"
                                        value={data.subject}
                                        onChange={(e) => setData("subject", e.target.value)}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && handleFilter()
                                        }
                                    />
                                </div>

                                {/* ✅ NEW: Qualification filter */}
                                <div className="col-md-3">
                                    <label>Qualification</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by qualification"
                                        value={data.qualification}
                                        onChange={(e) => setData("qualification", e.target.value)}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && handleFilter()
                                        }
                                    />
                                </div>

                                {/* Sort */}

                                  <div className="col-md-3">
                                    <label>Status</label>
                                    <select
                                        className="form-control"
                                        value={data.status}
                                        onChange={(e) => setData("status", e.target.value)}
                                    >
                                        <option value="">All Counsellors</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="deleted">Deleted</option>
                                    </select>
                                </div>
                              

                            </div>

                            <div className="row mt-3">
                              
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
                            <style>{`
                                .counsellors-table thead th,
                                .counsellors-table thead tr:hover th,
                                .counsellors-table thead th:hover {
                                    background-color: #0d6efd !important;
                                    color: #fff !important;
                                }
                            `}</style>
                            <table className="table table-bordered table-hover counsellors-table">
                                <thead style={{ backgroundColor: "#0d6efd", color: "#fff" }}>
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

                                        {/* ✅ NEW columns */}
                                        <th>Subject</th>
                                        <th>Qualification</th>

                                        <th>Status</th>

                                        <th style={{ width: "200px" }}>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {counsellors.data.length ? (
                                        counsellors.data.map((person, index) => (
                                            <tr key={person.id}>
                                                <td>{getSerialNumber(index)}</td>
                                                <td>
                                                     <div className="d-flex align-items-center">
                                                        <img
                                                            src={person.avatar_url}
                                                            onError={(e) => {
                                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=007bff&color=fff`;
                                                            }}
                                                            alt={person.name}
                                                            className="img-circle elevation-2 mr-2"
                                                            width="32"
                                                            height="32"
                                                        />
                                                        {person.name}
                                                    </div>
                                                </td>
                                                <td>{person.email}</td>
                                                <td>{person.mobile || "-"}</td>

                                                {/* ✅ NEW cells - from CounselorDetail relation (can be multiple rows) */}
                                                <td>
                                                    {person.counselor_details?.length
                                                        ? person.counselor_details.map(d => d.subject).filter(Boolean).join(", ")
                                                        : "-"}
                                                </td>
                                                <td>
                                                    {person.counselor_details?.length
                                                        ? person.counselor_details.map(d => d.qualification).filter(Boolean).join(", ")
                                                        : "-"}
                                                </td>

                                                <td>
                                                    {person.deleted_at ? (
                                                        <span className="badge badge-secondary">Deleted</span>
                                                    ) : !person.is_active ? (
                                                        <span className="badge badge-warning">Inactive</span>
                                                    ) : (
                                                        <span className="badge badge-success">Active</span>
                                                    )}
                                                </td>

                                               <td>
                                                    <div className="btn-group">

                                                        {!person.deleted_at ? (
                                                            <>
                                                                {/* ✅ Active / Inactive toggle */}
                                                                <button
                                                                    onClick={() => toggleActive(person.id)}
                                                                    className={`btn btn-sm ${person.is_active ? "btn-warning" : "btn-success"}`}
                                                                    title={person.is_active ? "Deactivate" : "Activate"}
                                                                >
                                                                    <i className={`fas ${person.is_active ? "fa-toggle-off" : "fa-toggle-on"}`}></i>
                                                                </button>

                                                                <Link
                                                                    href={`/admin/counsellors/${person.id}/edit`}
                                                                    className="btn btn-info btn-sm"
                                                                    title="Edit"
                                                                >
                                                                    <i className="fas fa-edit"></i>
                                                                </Link>

                                                                {/* ✅ Soft Delete */}
                                                                <button
                                                                    onClick={() => {
                                                                        if (confirm("Move this counsellor to trash (soft delete)? You can restore it later.")) {
                                                                            softDeleteCounsellor(person.id);
                                                                        }
                                                                    }}
                                                                    className="btn btn-danger btn-sm"
                                                                    title="Soft Delete (can be restored)"
                                                                >
                                                                    <i className="fas fa-trash"></i>
                                                                </button>

                                                                {/* ✅ Hard Delete */}
                                                                <button
                                                                    onClick={() => hardDeleteCounsellor(person.id)}
                                                                    className="btn btn-dark btn-sm"
                                                                    title="Delete Permanently"
                                                                >
                                                                    <i className="fas fa-trash-alt"></i>
                                                                </button>
                                                            </>
                                                        ) : (
                                                            <>
                                                                {/* Restore */}
                                                                <button
                                                                    onClick={() =>
                                                                        router.post(`/admin/counsellors/${person.id}/restore`)
                                                                    }
                                                                    className="btn btn-success btn-sm"
                                                                    title="Restore Counsellor"
                                                                >
                                                                    <i className="fas fa-undo"></i>
                                                                </button>

                                                                {/* ✅ Hard Delete (also available on trashed rows) */}
                                                                <button
                                                                    onClick={() => hardDeleteCounsellor(person.id)}
                                                                    className="btn btn-dark btn-sm"
                                                                    title="Delete Permanently"
                                                                >
                                                                    <i className="fas fa-trash-alt"></i>
                                                                </button>
                                                            </>
                                                        )}

                                                    </div>
                                                </td>

                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="8" className="text-center py-4">
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

