import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ scholarships, filters }) {
    const deleteItem = (id) => {
        if (confirm("Delete this record?")) {
            router.delete(route("admin.scholarship-overview-table.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Scholarship Overview Table" />


            <style>
                {` .pagination-wrap {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 20px;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .pagination .page-link {
                        border-radius: 6px;
                        margin: 0 2px;
                        color: #4e73df;
                        border: 1px solid #dee2e6;
                        transition: all .2s;
                    }

                    .pagination .page-link:hover {
                        background: #4e73df;
                        color: #fff;
                    }

                    .pagination .page-item.active .page-link {
                        background: #4e73df;
                        border-color: #4e73df;
                        color: #fff;
                    }

                    .pagination .page-item.disabled .page-link {
                        color: #adb5bd;
                        pointer-events: none;
                        background: #f8f9fc;
                    }

                    .pagination-info {
                        font-size: 14px;
                        color: #6c757d;
                    }`}
            </style>

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Scholarship Overview Table</h3>

                    <Link
                        href={route("admin.scholarship-overview-table.create")}
                        className="btn btn-primary"
                    >
                        + Add Record
                    </Link>
                </div>

                {/* Filters */}

                <form method="get" className="row mb-3">

                    <div className="col-md-4">
                        <input
                            type="text"
                            defaultValue={filters.search}
                            name="search"
                            className="form-control"
                            placeholder="Search..."
                        />
                    </div>

                    <div className="col-md-3">
                        <select
                            name="status"
                            defaultValue={filters.status}
                            className="form-control"
                        >
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="col-md-2">
                        <button className="btn btn-secondary w-100">
                            Search
                        </button>
                    </div>

                </form>

                <div className="card">

                    <div className="card-body table-responsive">

                        <table className="table table-bordered table-striped">

                            <thead>

                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Class of Study</th>
                                    <th>Website</th>
                                    <th>Minimum Marks</th>
                                    <th>Family Income</th>
                                    <th>Sort</th>
                                    <th>Status</th>
                                    <th width="180">Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                {scholarships.data.length > 0 ? (

                                    scholarships.data.map((item, index) => (

                                        <tr key={item.id}>

                                            <td>
                                                {(scholarships.current_page - 1) *
                                                    scholarships.per_page +
                                                    index +
                                                    1}
                                            </td>

                                            <td>{item.name}</td>

                                            <td>{item.class_of_study}</td>

                                            <td>
                                                {item.website ? (
                                                    <a
                                                        href={item.website}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Visit
                                                    </a>
                                                ) : (
                                                    "-"
                                                )}
                                            </td>

                                            <td>{item.minimum_marks}</td>

                                            <td>{item.annual_family_income}</td>

                                            <td>{item.sort_order}</td>

                                            <td>

                                                {item.is_active ? (

                                                    <span className="badge bg-success">
                                                        Active
                                                    </span>

                                                ) : (

                                                    <span className="badge bg-danger">
                                                        Inactive
                                                    </span>

                                                )}

                                            </td>

                                            <td>


                                    
                                                <Link
                                                    href={route(
                                                        "admin.scholarship-overview-table.edit",
                                                        item.id
                                                    )}
                                                    className="btn btn-outline-info btn-sm mr-1"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>

                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() =>
                                                        deleteItem(item.id)
                                                    }
                                                >
                                                   <i className="fas fa-trash"></i>
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td colSpan="9" className="text-center">
                                            No records found.
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Pagination */}

                    <div className="pagination-wrap">

                        <div className="pagination-info">
                            Showing <strong>{scholarships.from ?? 0}</strong> to{" "}
                            <strong>{scholarships.to ?? 0}</strong> of{" "}
                            <strong>{scholarships.total}</strong> entries
                        </div>

                        <nav>
                            <ul className="pagination mb-0">

                                {scholarships.links.map((link, idx) => (

                                    <li
                                        key={idx}
                                        className={`page-item ${
                                            link.active ? "active" : ""
                                        } ${!link.url ? "disabled" : ""}`}
                                    >
                                        <Link
                                            href={link.url || "#"}
                                            className="page-link"
                                            preserveScroll
                                            preserveState
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    </li>

                                ))}

                            </ul>
                        </nav>

                    </div>

            </div>

        </AdminLayout>
    );
}