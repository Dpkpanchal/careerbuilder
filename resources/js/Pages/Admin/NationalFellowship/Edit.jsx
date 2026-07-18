import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const NationalFellowshipEdit = ({ categories, fellowship }) => {

    const { data, setData, put, processing, errors } = useForm({

        name: fellowship?.name ?? "",
        organization: fellowship?.organization ?? "",
        link: fellowship?.link ?? "",
        category: fellowship?.category ?? "",
        sort_order: fellowship?.sort_order ?? 0,
        is_active: fellowship?.is_active ?? true,

    });

    const submit = (e) => {

        e.preventDefault();

        put(`/admin/national-fellowships/${fellowship.id}`);

    };

    return (

        <AdminLayout header="Edit National Fellowship">

            <Head title="Edit National Fellowship" />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-8">

                        <div className="card">

                            <div className="card-header">
                                <h3 className="card-title">Edit National Fellowship</h3>
                            </div>

                            <form onSubmit={submit}>

                                <div className="card-body">

                                    <div className="row">

                                        <div className="col-md-12">

                                            <div className="form-group">

                                                <label>Fellowship Name</label>

                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                                    placeholder="e.g. Ramanujan Fellowship"
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                />

                                                {errors.name && (
                                                    <div className="invalid-feedback">{errors.name}</div>
                                                )}

                                            </div>

                                        </div>

                                        <div className="col-md-8">

                                            <div className="form-group">

                                                <label>Organization</label>

                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.organization ? "is-invalid" : ""}`}
                                                    placeholder="e.g. Department Of Science And Technology"
                                                    value={data.organization}
                                                    onChange={(e) => setData("organization", e.target.value)}
                                                />

                                                {errors.organization && (
                                                    <div className="invalid-feedback">{errors.organization}</div>
                                                )}

                                            </div>

                                        </div>

                                        <div className="col-md-4">

                                            <div className="form-group">

                                                <label>Category</label>

                                                <select
                                                    className={`form-control ${errors.category ? "is-invalid" : ""}`}
                                                    value={data.category}
                                                    onChange={(e) => setData("category", e.target.value)}
                                                >

                                                    <option value="">Select Category</option>

                                                    {categories.map(cat => (
                                                        <option key={cat} value={cat}>{cat}</option>
                                                    ))}

                                                </select>

                                                {errors.category && (
                                                    <div className="invalid-feedback">{errors.category}</div>
                                                )}

                                            </div>

                                        </div>

                                        <div className="col-md-8">

                                            <div className="form-group">

                                                <label>Official Link</label>

                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.link ? "is-invalid" : ""}`}
                                                    placeholder="https://... or www.example.com"
                                                    value={data.link}
                                                    onChange={(e) => setData("link", e.target.value)}
                                                />

                                                <small className="text-muted">
                                                    Full URL or bare domain — both are fine (e.g. "www.dbtindia.nic.in").
                                                </small>

                                                {errors.link && (
                                                    <div className="invalid-feedback d-block">{errors.link}</div>
                                                )}

                                            </div>

                                        </div>

                                        <div className="col-md-4">

                                            <div className="form-group">

                                                <label>Sort Order</label>

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={data.sort_order}
                                                    onChange={(e) => setData("sort_order", e.target.value)}
                                                />

                                            </div>

                                        </div>

                                        <div className="col-md-12">

                                            <div className="form-check mt-2">

                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="is_active"
                                                    checked={data.is_active}
                                                    onChange={(e) => setData("is_active", e.target.checked)}
                                                />

                                                <label className="form-check-label" htmlFor="is_active">
                                                    Active
                                                </label>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="card-footer">

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={processing}
                                    >
                                        {processing ? "Updating..." : "Update"}
                                    </button>

                                    <Link
                                        href="/admin/national-fellowships"
                                        className="btn btn-default ml-2"
                                    >
                                        Cancel
                                    </Link>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>

    );

};

export default NationalFellowshipEdit;
