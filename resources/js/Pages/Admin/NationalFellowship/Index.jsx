import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ fellowships, categories = [], filters = {} }) {

    const [search, setSearch] = useState(filters.search || "");
    const [category, setCategory] = useState(filters.category || "");
    const [status, setStatus] = useState(filters.status || "");

    const {
        data: rows = [],
        links = [],
        from,
        to,
        total,
    } = fellowships;

    const applyFilters = (overrides = {}) => {

        const params = {
            search: overrides.search !== undefined ? overrides.search : search,
            category: overrides.category !== undefined ? overrides.category : category,
            status: overrides.status !== undefined ? overrides.status : status,
        };

        Object.keys(params).forEach((key) => {
            if (!params[key]) delete params[key];
        });

        router.get("/admin/national-fellowships", params, {
            preserveScroll: true,
            preserveState: true,
        });

    };

    const goToPage = (url) => {

        if (!url) return;

        router.get(url, {}, {
            preserveScroll: true,
            preserveState: true,
        });

    };

    const deleteFellowship = (id) => {

        if (confirm("Delete this fellowship?")) {

            router.delete(`/admin/national-fellowships/${id}`, {
                preserveScroll: true,
            });

        }

    };

    const toggleStatus = (id) => {

        router.put(`/admin/national-fellowships/${id}/status`, {}, {
            preserveScroll: true,
        });

    };

    return (

        <AdminLayout header="National Fellowships">

            <Head title="National Fellowships" />

            <div className="container-fluid">

                <div className="card">

                    <div className="card-header">

                        <div className="row align-items-center">

                            <div className="col-md-6">
                                <h3 className="card-title mb-0">National Fellowships</h3>
                            </div>

                            <div className="col-md-6 text-right">

                                <Link href="/admin/national-fellowships/create" className="btn btn-primary">
                                    <i className="fas fa-plus mr-1"></i>
                                    Create
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="card-body border-bottom d-flex flex-wrap gap-2">

                        <input
                            type="text"
                            className="form-control mr-2"
                            style={{ maxWidth: 260 }}
                            placeholder="Search name / organization..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onBlur={() => applyFilters({ search })}
                            onKeyDown={(e) => e.key === "Enter" && applyFilters({ search })}
                        />

                        <select
                            className="form-control mr-2"
                            style={{ maxWidth: 220 }}
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                applyFilters({ category: e.target.value });
                            }}
                        >

                            <option value="">All Categories</option>

                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}

                        </select>

                        <select
                            className="form-control"
                            style={{ maxWidth: 160 }}
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                                applyFilters({ status: e.target.value });
                            }}
                        >

                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>

                        </select>

                    </div>

                    <div className="card-body table-responsive p-0">

                        <table className="table mb-0">

                            <thead>

                            <tr>
                                <th width="60">#</th>
                                <th>Name</th>
                                <th>Organization</th>
                                <th>Category</th>
                                <th width="90" className="text-center">Status</th>
                                <th width="160" className="text-center">Action</th>
                            </tr>

                            </thead>

                            <tbody>

                            {rows.length ? (

                                rows.map((item, index) => (

                                    <tr key={item.id}>

                                        <td className="text-muted">{from ? from + index : index + 1}</td>

                                        <td className="font-weight-600">{item.name}</td>

                                        <td>{item.organization || <span className="text-muted">—</span>}</td>

                                        <td>{item.category || <span className="text-muted">—</span>}</td>

                                        <td className="text-center">

                                            <button
                                                className={`btn btn-sm ${item.is_active ? "btn-outline-success" : "btn-outline-secondary"}`}
                                                onClick={() => toggleStatus(item.id)}
                                            >
                                                {item.is_active ? "Active" : "Inactive"}
                                            </button>

                                        </td>

                                        <td className="text-center">

                                            <Link
                                                href={`/admin/national-fellowships/${item.id}/edit`}
                                                className="btn btn-outline-info btn-sm mr-1"
                                                title="Edit"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </Link>

                                            <button
                                                className="btn btn-outline-danger btn-sm"
                                                onClick={() => deleteFellowship(item.id)}
                                                title="Delete"
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td colSpan="6" className="text-center text-muted py-4">
                                        No Records Found
                                    </td>
                                </tr>

                            )}

                            </tbody>

                        </table>

                    </div>

                    {rows.length > 0 && (

                        <div className="card-footer d-flex justify-content-between align-items-center flex-wrap">

                            <div className="text-muted small">
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
