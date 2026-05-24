import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, router } from "@inertiajs/react";

export default function TabContentIndex({ contents, filters }) {

    const { data, setData } = useForm({
        search: filters?.search || "",
        sort_field: filters?.sort_field || "created_at",
        sort_direction: filters?.sort_direction || "desc",
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        router.get("/admin/tabcontents", data, {
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
        router.get("/admin/tabcontents", {}, { preserveState: true, replace: true });
    };

    const handleSort = (field) => {
        const newDirection =
            data.sort_field === field && data.sort_direction === "asc"
                ? "desc"
                : "asc";

        setData({ ...data, sort_field: field, sort_direction: newDirection });

        router.get(
            "/admin/tabcontents",
            { ...data, sort_field: field, sort_direction: newDirection },
            { preserveState: true, replace: true }
        );
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return "fas fa-sort";
        return data.sort_direction === "asc" ? "fas fa-sort-up" : "fas fa-sort-down";
    };

    return (
        <AdminLayout header="Tab Contents Management">
            <Head title="Tab Contents" />

            <div className="container-fluid">

                {/* FILTERS CARD */}
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

                                {/* SEARCH */}
                                <div className="col-md-4">
                                    <label>Search</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search title or tab..."
                                        value={data.search}
                                        onChange={(e) => setData("search", e.target.value)}
                                        onKeyPress={(e) => e.key === "Enter" && handleFilter()}
                                    />
                                </div>

                                {/* SORT */}
                                <div className="col-md-3">
                                    <label>Sort By</label>
                                    <select
                                        className="form-control"
                                        value={data.sort_field}
                                        onChange={(e) => setData("sort_field", e.target.value)}
                                    >
                                        <option value="created_at">Created At</option>
                                        <option value="title">Title</option>
                                        <option value="sort_order">Sort Order</option>
                                    </select>
                                </div>

                            </div>

                            {/* BUTTONS */}
                            <div className="row mt-3">
                                <div className="col-12 d-flex justify-content-between">
                                    <div>
                                        <button className="btn btn-primary" onClick={handleFilter}>
                                            <i className="fas fa-filter mr-1"></i> Apply Filters
                                        </button>
                                        <button className="btn btn-default ml-2" onClick={handleReset}>
                                            <i className="fas fa-redo mr-1"></i> Reset
                                        </button>
                                    </div>
                                    <div className="text-muted">
                                        Total Results: {contents.total}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* TABLE */}
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">Tab Content List</h3>
                        <div className="card-tools">
                            <Link href="/admin/tabcontents/create" className="btn btn-primary btn-sm">
                                <i className="fas fa-plus"></i> Add Content
                            </Link>
                        </div>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>
                                            ID <i className={getSortIcon("id")}></i>
                                        </th>

                                        <th onClick={() => handleSort("title")} style={{ cursor: "pointer" }}>
                                            Title <i className={getSortIcon("title")}></i>
                                        </th>

                                        <th style={{ width: "180px" }}>Tab</th>
                                        <th style={{ width: "180px" }}>Menu Item</th>

                                        <th onClick={() => handleSort("sort_order")} style={{ cursor: "pointer" }}>
                                            Sort Order <i className={getSortIcon("sort_order")}></i>
                                        </th>

                                        <th style={{ width: "120px" }}>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {contents.data.length ? (
                                        contents.data.map((c) => (
                                            <tr key={c.id}>
                                                <td>{c.id}</td>
                                                <td>{c.title || <i className="text-muted">No title</i>}</td>
                                                <td>{c.tab?.name}</td>
                                                <td>{c.tab?.menu_item?.name}</td>
                                                <td>{c.sort_order}</td>

                                                <td>
                                                    <div className="btn-group">
                                                        <Link
                                                            href={`/admin/tabcontents/${c.id}/edit`}
                                                            className="btn btn-info btn-sm"
                                                        >
                                                            <i className="fas fa-edit" />
                                                        </Link>

                                                        <Link
                                                            href={`/admin/tabcontents/${c.id}`}
                                                            method="delete"
                                                            as="button"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={(e) =>
                                                                !confirm("Delete this content?") &&
                                                                e.preventDefault()
                                                            }
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center py-4">
                                                <i className="fas fa-folder-open fa-2x text-muted"></i>
                                                <p className="text-muted">No tab contents found.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* PAGINATION */}
                        {contents.data.length > 0 && (
                            <div className="mt-3 d-flex justify-content-between align-items-center">
                                <div className="text-muted">
                                    Showing {contents.from} to {contents.to} of {contents.total}
                                </div>

                                <nav>
                                    <ul className="pagination mb-0">
                                        {contents.links.map((link, i) => (
                                            <li
                                                key={i}
                                                className={`page-item ${
                                                    link.active ? "active" : ""
                                                } ${!link.url ? "disabled" : ""}`}
                                            >
                                                <Link
                                                    href={link.url || "#"}
                                                    className="page-link"
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                ></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
