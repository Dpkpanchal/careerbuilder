import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ item }) {

    const { data, setData, put, processing, errors } = useForm({
        subject: item.subject || "",
        institution_name: item.institution_name || "",
        note: item.note || "",
        web_contact: item.web_contact || "",
        is_active: item.is_active ?? true,
        sort_order: item.sort_order ?? 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/coaching-support/${item.id}`);
    };

    return (
        <AdminLayout header="Edit Coaching Support">
            <Head title="Edit Coaching Support" />

            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Edit Coaching Support</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row g-3">

                                {/* Subject */}
                                <div className="col-md-6">
                                    <label className="form-label">Subject *</label>
                                    <input
                                        className="form-control"
                                        value={data.subject}
                                        onChange={(e) => setData("subject", e.target.value)}
                                    />
                                    {errors.subject && (
                                        <small className="text-danger">{errors.subject}</small>
                                    )}
                                </div>

                                {/* Institution */}
                                <div className="col-md-6">
                                    <label className="form-label">Institution Name *</label>
                                    <input
                                        className="form-control"
                                        value={data.institution_name}
                                        onChange={(e) =>
                                            setData("institution_name", e.target.value)
                                        }
                                    />
                                    {errors.institution_name && (
                                        <small className="text-danger">
                                            {errors.institution_name}
                                        </small>
                                    )}
                                </div>

                                 {/* Institution */}
                                <div className="col-md-6">
                                    <label className="form-label">Note</label>
                                    <input
                                        className="form-control"
                                        value={data.note}
                                        onChange={(e) =>
                                            setData("note", e.target.value)
                                        }
                                    />
                                    {errors.note && (
                                        <small className="text-danger">
                                            {errors.note}
                                        </small>
                                    )}
                                </div>


                                {/* Web / Contact */}
                                <div className="col-md-6">
                                    <label className="form-label">Web / Contact</label>
                                    <input
                                        className="form-control"
                                        value={data.web_contact}
                                        onChange={(e) =>
                                            setData("web_contact", e.target.value)
                                        }
                                    />
                                </div>

                                {/* Sort Order */}
                                <div className="col-md-3">
                                    <label className="form-label">Sort Order</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.sort_order}
                                        onChange={(e) =>
                                            setData("sort_order", e.target.value)
                                        }
                                    />
                                </div>

                                {/* Active */}
                                <div className="col-md-3 d-flex align-items-center mt-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={data.is_active}
                                            onChange={(e) =>
                                                setData("is_active", e.target.checked)
                                            }
                                        />
                                        <label className="form-check-label">
                                            Active
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card-footer d-flex justify-content-end">
                            <button
                                className="btn btn-primary px-4"
                                disabled={processing}
                            >
                                {processing ? "Updating..." : "Update"}
                            </button>

                            <Link
                                href="/admin/coaching-support"
                                className="btn btn-secondary px-4 ms-2"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
