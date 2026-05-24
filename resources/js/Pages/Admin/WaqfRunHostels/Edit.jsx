import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ hostel }) {

    const { data, setData, put, processing, errors } = useForm({
        name: hostel.name || "",
        address: hostel.address || "",
        seat_capacity: hostel.seat_capacity || "",
        contact_no: hostel.contact_no || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/admin/waqf-run-hostels/${hostel.id}`);
    };

    return (
        <AdminLayout header="Edit Waqf Run Hostel">
            <Head title="Edit Waqf Run Hostel" />

            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Edit Waqf Run Hostel</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row g-3">

                                {/* Hostel Name */}
                                <div className="col-md-6">
                                    <label className="form-label">Hostel Name *</label>
                                    <input
                                        className="form-control"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                    {errors.name && (
                                        <small className="text-danger">{errors.name}</small>
                                    )}
                                </div>

                                {/* Seat Capacity */}
                                <div className="col-md-3">
                                    <label className="form-label">Seat Capacity *</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.seat_capacity}
                                        onChange={(e) =>
                                            setData("seat_capacity", e.target.value)
                                        }
                                    />
                                    {errors.seat_capacity && (
                                        <small className="text-danger">
                                            {errors.seat_capacity}
                                        </small>
                                    )}
                                </div>

                                {/* Contact No */}
                                <div className="col-md-3">
                                    <label className="form-label">Contact No *</label>
                                    <input
                                        className="form-control"
                                        value={data.contact_no}
                                        onChange={(e) =>
                                            setData("contact_no", e.target.value)
                                        }
                                    />
                                    {errors.contact_no && (
                                        <small className="text-danger">
                                            {errors.contact_no}
                                        </small>
                                    )}
                                </div>

                                {/* Address */}
                                <div className="col-md-12">
                                    <label className="form-label">Address *</label>
                                    <textarea
                                        rows="3"
                                        className="form-control"
                                        value={data.address}
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                    />
                                    {errors.address && (
                                        <small className="text-danger">
                                            {errors.address}
                                        </small>
                                    )}
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
                                href="/admin/waqf-run-hostels"
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
