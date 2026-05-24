import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function Index({ schemes, filters }) {

    const { data, setData } = useForm({
        search: filters?.search || "",
        sort_field: filters?.sort_field || "created_at",
        sort_direction: filters?.sort_direction || "desc",
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        router.get("/admin/minority-schemes", data, {
            preserveState: true,
            replace: true,
        });
    };

    const resetFilters = () => {
        setData({
            search: "",
            sort_field: "created_at",
            sort_direction: "desc",
        });

        router.get("/admin/minority-schemes", {}, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSort = (field) => {
        const direction =
            data.sort_field === field && data.sort_direction === "asc"
                ? "desc"
                : "asc";

        setData({ ...data, sort_field: field, sort_direction: direction });

        router.get(
            "/admin/minority-schemes",
            { ...data, sort_field: field, sort_direction: direction },
            { preserveState: true, replace: true }
        );
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return "fas fa-sort";
        return data.sort_direction === "asc"
            ? "fas fa-sort-up"
            : "fas fa-sort-down";
    };

    return (
        <AdminLayout header="Minority Schemes">
            <Head title="Minority Schemes" />

            <div className="container-fluid">

                {/* FILTER CARD */}
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
                            <div className="row g-3">

                                <div className="col-md-4">
                                    <label>Search</label>
                                    <input
                                        className="form-control"
                                        placeholder="Search by subject..."
                                        value={data.search}
                                        onChange={(e) => setData("search", e.target.value)}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && handleFilter()
                                        }
                                    />
                                </div>

                                <div className="col-md-3">
                                    <label>Sort By</label>
                                    <select
                                        className="form-control"
                                        value={data.sort_field}
                                        onChange={(e) =>
                                            setData("sort_field", e.target.value)
                                        }
                                    >
                                        <option value="created_at">Created Date</option>
                                        <option value="subject">Subject</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    <button className="btn btn-primary" onClick={handleFilter}>
                                        <i className="fas fa-filter mr-1"></i> Apply
                                    </button>
                                    <button
                                        className="btn btn-default ml-2"
                                        onClick={resetFilters}
                                    >
                                        <i className="fas fa-redo mr-1"></i> Reset
                                    </button>
                                </div>

                                <div className="text-muted">
                                    Total: {schemes.total}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* TABLE */}
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">Minority Schemes List</h3>
                        <div className="card-tools">
                            <Link
                                href="/admin/minority-schemes/create"
                                className="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus"></i> Add Scheme
                            </Link>
                        </div>
                    </div>

                    <div className="card-body table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleSort("subject")}
                                    >
                                        Subject <i className={getSortIcon("subject")}></i>
                                    </th>
                                    <th>Web Link</th>
                                    <th width="120">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {schemes.data.length ? (
                                    schemes.data.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{schemes.from + index}</td>
                                            <td>{item.subject}</td>
                                            <td>
                                                <a href={item.web_link} target="_blank">
                                                    {item.web_link}
                                                </a>
                                            </td>
                                            <td>
                                                <div className="btn-group">
                                                    <Link
                                                        href={`/admin/minority-schemes/${item.id}/edit`}
                                                        className="btn btn-info btn-sm"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>

                                                    <Link
                                                        as="button"
                                                        href={`/admin/minority-schemes/${item.id}`}
                                                        method="delete"
                                                        className="btn btn-danger btn-sm"
                                                        onClick={(e) =>
                                                            !confirm("Delete this scheme?")
                                                                ? e.preventDefault()
                                                                : null
                                                        }
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center text-muted py-3">
                                            No schemes found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
                    <div className="card-footer d-flex justify-content-end">
                        {schemes.links && (
                            <nav>
                                <ul className="pagination mb-0">
                                    {schemes.links.map((link, i) => (
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
                            </nav>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
