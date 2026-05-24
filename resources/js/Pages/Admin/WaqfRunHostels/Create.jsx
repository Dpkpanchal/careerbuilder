import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        address: "",
        seat_capacity: "",
        contact_no: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/waqf-run-hostels");
    };

    return (
        <AdminLayout header="Add Waqf Run Hostel">
            <Head title="Add Waqf Run Hostel" />

            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Create Waqf Run Hostel</h3>
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
                                        placeholder="e.g. 9143467342 / 9475890484"
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
                                {processing ? "Saving..." : "Save"}
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
