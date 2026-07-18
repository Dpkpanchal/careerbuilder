import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ rates, filters }) {

    const deleteItem = (id) => {
        if (confirm("Delete this record?")) {
            router.delete(route("admin.scholarship-rates.destroy", id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <AdminLayout>

            <Head title="Scholarship Rates" />

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Scholarship Rates</h3>

                    <Link
                        href={route("admin.scholarship-rates.create")}
                        className="btn btn-primary"
                    >
                        + Add Rate
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

                    <div className="card-body table-responsive">

                        <table className="table table-bordered table-striped table-hover">

                            <thead className="table-light">

                                <tr>

                                    <th rowSpan="2">#</th>
                                    <th rowSpan="2">Type</th>
                                    <th rowSpan="2">Class</th>

                                    <th colSpan="3" className="text-center">
                                        Day Scholar
                                    </th>

                                    <th colSpan="3" className="text-center">
                                        Hosteller
                                    </th>

                                    <th rowSpan="2">Sort</th>
                                    <th rowSpan="2">Status</th>
                                    <th rowSpan="2">Action</th>

                                </tr>

                                <tr>

                                    <th>Admission</th>
                                    <th>Maintenance</th>
                                    <th>Total</th>

                                    <th>Admission</th>
                                    <th>Maintenance</th>
                                    <th>Total</th>

                                </tr>

                            </thead>

                            <tbody>

                                {rates.data.length > 0 ? (

                                    rates.data.map((item, index) => (

                                        <tr key={item.id}>

                                            <td>
                                                {(rates.current_page - 1) *
                                                    rates.per_page +
                                                    index +
                                                    1}
                                            </td>

                                            <td>{item.type}</td>

                                            <td>{item.class_of_study}</td>

                                            <td>{item.day_admission_fee}</td>
                                            <td>{item.day_maintenance_allowance}</td>
                                            <td>{item.day_total}</td>

                                            <td>{item.hosteller_admission_fee}</td>
                                            <td>{item.hosteller_maintenance_allowance}</td>
                                            <td>{item.hosteller_total}</td>

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
                                                        "admin.scholarship-rates.edit",
                                                        item.id
                                                    )}
                                                    className="btn btn-outline-info btn-sm me-1"
                                                >
                                                    <i className="fas fa-edit"></i>
                                                </Link>

                                                <button
                                                    className="btn btn-outline-danger btn-sm"
                                                    onClick={() => deleteItem(item.id)}
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>
                                        <td
                                            colSpan="12"
                                            className="text-center"
                                        >
                                            No records found.
                                        </td>
                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Pagination */}

                <div className="d-flex justify-content-between align-items-center mt-3">

                    <div>
                        Showing <strong>{rates.from ?? 0}</strong> to{" "}
                        <strong>{rates.to ?? 0}</strong> of{" "}
                        <strong>{rates.total}</strong> entries
                    </div>

                    <ul className="pagination mb-0">

                        {rates.links.map((link, index) => (

                            <li
                                key={index}
                                className={`page-item ${link.active ? "active" : ""} ${!link.url ? "disabled" : ""}`}
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

            </div>

        </AdminLayout>
    );
}