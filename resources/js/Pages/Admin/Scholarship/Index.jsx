import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ scholarships, filters }) {
    const deleteItem = (id) => {
        if (confirm("Delete this scholarship?")) {
            router.delete(route("admin.scholarships.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Scholarships" />

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Scholarships</h3>

                    <Link
                        href={route("admin.scholarships.create")}
                        className="btn btn-primary"
                    >
                        <i className="fas fa-plus mr-1"></i>
                        Add Scholarship
                    </Link>
                </div>

                {/* Filters */}

                <form method="get" className="row mb-3">

                    <div className="col-md-4">
                        <input
                            type="text"
                            name="search"
                            defaultValue={filters.search}
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

                    <div className="card-body table-responsive p-0">

                        <table className="table table-bordered table-hover mb-0">

                            <thead>

                                <tr>
                                    <th width="60">#</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Apply</th>
                                    <th>Status</th>
                                    <th width="80">Sort</th>
                                    <th width="160">Action</th>
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

                                            <td>

                                                <strong>{item.name}</strong>

                                                {item.links?.length > 0 && (

                                                    <div className="mt-1">

                                                        {item.links.map((link, i) => (

                                                            <div key={i}>

                                                                <a
                                                                    href={link}
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                >
                                                                    Link {i + 1}
                                                                </a>

                                                            </div>

                                                        ))}

                                                    </div>

                                                )}

                                            </td>

                                            <td>
                                                {item.category || "-"}
                                            </td>

                                            <td>
                                                {item.when_to_apply || "-"}
                                            </td>

                                            <td>

                                                {item.is_active ? (

                                                    <span className="badge badge-success">
                                                        Active
                                                    </span>

                                                ) : (

                                                    <span className="badge badge-danger">
                                                        Inactive
                                                    </span>

                                                )}

                                            </td>

                                            <td>{item.sort_order}</td>

                                            <td>

                                                <Link
                                                    href={route(
                                                        "admin.scholarships.edit",
                                                        item.id
                                                    )}
                                                    className="btn btn-outline-info btn-sm mr-1"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>

                                                <button
                                                    onClick={() =>
                                                        deleteItem(item.id)
                                                    }
                                                    className="btn btn-outline-danger btn-sm"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="7"
                                            className="text-center"
                                        >
                                            No Record Found.
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Pagination */}

                {scholarships.last_page > 1 && (

                    <div className="d-flex justify-content-between align-items-center mt-3">

                        <div>
                            Showing{" "}
                            <strong>{scholarships.from}</strong> to{" "}
                            <strong>{scholarships.to}</strong> of{" "}
                            <strong>{scholarships.total}</strong> entries
                        </div>

                        <ul className="pagination mb-0">

                            {scholarships.links.map((link, index) => (

                                <li
                                    key={index}
                                    className={`page-item ${
                                        link.active ? "active" : ""
                                    } ${!link.url ? "disabled" : ""}`}
                                >

                                    <Link
                                        href={link.url || "#"}
                                        preserveScroll
                                        preserveState
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

        </AdminLayout>
    );
}