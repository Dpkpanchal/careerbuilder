import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import {
    Pencil,
    Ban,
    CheckCircle,
    Trash2,
    RotateCcw
} from "lucide-react";

export default function Index({ messages = [] }) {

    const { flash } = usePage().props;

    return (
        <AdminLayout header="Leaders">
            <Head title="Leader List" />

            <div className="container-fluid">

               

                <div className="card shadow-sm rounded-3">

                    {/* Header */}
                
                    <div className="card-header bg-white border-bottom py-3 px-4">

                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">

                            <div>
                                <h5 className="mb-1 fw-bold">
                                    Leader List
                                </h5>

                                <small className="text-muted">
                                    Manage all leaders here
                                </small>
                            </div>

                            {/* ADD BUTTON */}
                            <Link
                                href={route("admin.leaders.create")}
                                className="btn btn-primary d-flex align-items-center gap-2 px-3"
                                style={{
                                    borderRadius: "10px",
                                    height: "42px"
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "18px",
                                        lineHeight: "1"
                                    }}
                                >
                                    +
                                </span>

                                Add Leader
                            </Link>

                        </div>

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
                                        <th>Status</th>
                                        <th width="180">Action</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>

                                    {messages.length > 0 ? (

                                        messages.map((item, index) => (

                                            <tr key={item.id}>

                                                <td>{index + 1}</td>

                                                {/* IMAGE */}
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
                                                        <span className="text-muted">
                                                            No Image
                                                        </span>
                                                    )}
                                                </td>

                                                {/* NAME */}
                                                <td>{item.name}</td>

                                                {/* POST */}
                                                <td>{item.post}</td>

                                                {/* DESIGNATION */}
                                                <td>{item.designation}</td>

                                                {/* STATUS */}
                                               <td>

                                                    {item.deleted_at ? (

                                                        <span
                                                            className="badge bg-dark text-white px-3 py-2"
                                                            style={{
                                                                borderRadius: "30px"
                                                            }}
                                                        >
                                                            Deleted
                                                        </span>

                                                    ) : item.is_blocked ? (

                                                        <span
                                                            className="badge bg-danger-subtle text-danger px-3 py-2"
                                                            style={{
                                                                borderRadius: "30px"
                                                            }}
                                                        >
                                                            Blocked
                                                        </span>

                                                    ) : (

                                                        <span
                                                            className="badge bg-success-subtle text-success px-3 py-2"
                                                            style={{
                                                                borderRadius: "30px"
                                                            }}
                                                        >
                                                            Active
                                                        </span>

                                                    )}

                                                </td>

                                                {/* ACTION */}
                                              <td>

                                                   <div className="d-flex align-items-center gap-2 flex-wrap">

    {/* IF DELETED */}
    {item.deleted_at ? (

        <Link
            href={route(
                "admin.leaders.restore",
                item.id
            )}
            method="post"
            as="button"
            className="btn btn-sm btn-success d-flex align-items-center justify-content-center"
            style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px"
            }}
            title="Restore Leader"
        >
            <RotateCcw size={16} />
        </Link>

    ) : (

        <>

            {/* EDIT BUTTON */}
            <Link
                href={route(
                    "admin.leaders.edit",
                    item.id
                )}
                className="btn btn-sm btn-primary d-flex align-items-center justify-content-center"
                style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px"
                }}
                title="Edit Leader"
            >
                <Pencil size={16} />
            </Link>

            {/* BLOCK / UNBLOCK BUTTON */}
            <Link
                href={route(
                    "admin.leaders.toggle-block",
                    item.id
                )}
                method="post"
                as="button"
                className={`btn btn-sm d-flex align-items-center justify-content-center ${
                    item.is_blocked
                        ? "btn-success"
                        : "btn-danger"
                }`}
                style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px"
                }}
                title={
                    item.is_blocked
                        ? "Unblock Leader"
                        : "Block Leader"
                }
            >
                {item.is_blocked ? (
                    <CheckCircle size={16} />
                ) : (
                    <Ban size={16} />
                )}
            </Link>

            {/* DELETE BUTTON */}
            <Link
                href={route(
                    "admin.leaders.destroy",
                    item.id
                )}
                method="delete"
                as="button"
                className="btn btn-sm btn-dark d-flex align-items-center justify-content-center"
                style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "8px"
                }}
                title="Delete Leader"
                onBefore={() =>
                    confirm(
                        "Are you sure you want to delete this leader?"
                    )
                }
            >
                <Trash2 size={16} />
            </Link>

        </>

    )}

                                                   </div>


                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="text-center text-muted"
                                            >
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
