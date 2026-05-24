import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index({ messages = [] }) {

    const { flash } = usePage().props;

    return (
        <AdminLayout header="Leaders">
            <Head title="Leader List" />

            <div className="container-fluid">

               
                <div className="card shadow-sm rounded-3">

                    {/* Header */}
                    <div className="card-header bg-white border-bottom">
                        <h5 className="mb-0 fw-bold">Leader List</h5>
                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered align-middle">
                                
                                {/* Table Head */}
                                <thead className="table-light">
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Post</th>
                                        <th>Designation</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    {messages.length > 0 ? (
                                        messages.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>

                                                <td>
                                                    {item.image ? (
                                                        <img
                                                            src={`/storage/${item.image}`}
                                                            alt={item.name}
                                                            style={{
                                                                width: "50px",
                                                                height: "50px",
                                                                objectFit: "cover",
                                                                borderRadius: "5px"
                                                            }}
                                                        />
                                                    ) : (
                                                        <span className="text-muted">No Image</span>
                                                    )}
                                                </td>

                                                <td>{item.name}</td>
                                                <td>{item.post}</td>
                                                <td>{item.designation}</td>

                                                <td>
                                                    <Link
                                                        href={route("admin.leaders.edit", item.id)}
                                                        className="btn btn-sm btn-primary"
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center text-muted">
                                                No leaders found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>
        </AdminLayout>
    );
}
