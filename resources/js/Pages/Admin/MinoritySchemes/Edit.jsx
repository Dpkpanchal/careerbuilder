import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ scheme }) {

    if (!scheme) {
        return (
            <AdminLayout header="Edit Minority Scheme">
                <div className="container-fluid">
                    <div className="alert alert-danger">
                        Scheme data not found.
                    </div>
                </div>
            </AdminLayout>
        );
    }

    const { data, setData, put, processing, errors } = useForm({
        subject: scheme.subject || "",
        web_link: scheme.web_link || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/minority-schemes/${scheme.id}`);
    };

    return (
        <AdminLayout header="Edit Minority Scheme">
            <Head title="Edit Minority Scheme" />

            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Edit Minority Scheme</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row g-3">

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

                                <div className="col-md-6">
                                    <label className="form-label">Web Link *</label>
                                    <input
                                        className="form-control"
                                        value={data.web_link}
                                        onChange={(e) => setData("web_link", e.target.value)}
                                    />
                                    {errors.web_link && (
                                        <small className="text-danger">{errors.web_link}</small>
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className="card-footer d-flex justify-content-end">
                            <button className="btn btn-primary px-4" disabled={processing}>
                                {processing ? "Updating..." : "Update"}
                            </button>

                            <Link
                                href="/admin/minority-schemes"
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
