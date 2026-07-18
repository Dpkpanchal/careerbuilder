import React from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Form({
    rate = null,
    submitUrl,
    method = "post",
}) {
    const { data, setData, post, put, processing, errors } = useForm({
        type: rate?.type || "",
        class_of_study: rate?.class_of_study || "",

        day_admission_fee: rate?.day_admission_fee || 0,
        day_maintenance_allowance: rate?.day_maintenance_allowance || 0,
        day_total: rate?.day_total || 0,

        hosteller_admission_fee: rate?.hosteller_admission_fee || 0,
        hosteller_maintenance_allowance:
            rate?.hosteller_maintenance_allowance || 0,
        hosteller_total: rate?.hosteller_total || 0,

        sort_order: rate?.sort_order ?? 0,
        is_active: rate?.is_active ?? true,
    });

    const submit = (e) => {
        e.preventDefault();

        if (method === "put") {
            put(submitUrl);
        } else {
            post(submitUrl);
        }
    };

    return (
        <form onSubmit={submit}>

            <div className="row">

                {/* Type */}

                <div className="col-md-6 mb-3">
                    <label>Type</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.type}
                        onChange={(e) =>
                            setData("type", e.target.value)
                        }
                    />
                    {errors.type && (
                        <small className="text-danger">
                            {errors.type}
                        </small>
                    )}
                </div>

                {/* Class */}

                <div className="col-md-6 mb-3">
                    <label>Class of Study</label>
                    <input
                        type="text"
                        className="form-control"
                        value={data.class_of_study}
                        onChange={(e) =>
                            setData(
                                "class_of_study",
                                e.target.value
                            )
                        }
                    />
                    {errors.class_of_study && (
                        <small className="text-danger">
                            {errors.class_of_study}
                        </small>
                    )}
                </div>

            </div>

            {/* Day Scholar */}

            <div className="card mb-4">
                <div className="card-header">
                    <strong>Day Scholar</strong>
                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <label>Admission Fee</label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.day_admission_fee}
                                onChange={(e) =>
                                    setData(
                                        "day_admission_fee",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Maintenance Allowance</label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.day_maintenance_allowance}
                                onChange={(e) =>
                                    setData(
                                        "day_maintenance_allowance",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Total</label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.day_total}
                                onChange={(e) =>
                                    setData(
                                        "day_total",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                    </div>

                </div>
            </div>

            {/* Hosteller */}

            <div className="card mb-4">

                <div className="card-header">
                    <strong>Hosteller</strong>
                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <label>Admission Fee</label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.hosteller_admission_fee}
                                onChange={(e) =>
                                    setData(
                                        "hosteller_admission_fee",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Maintenance Allowance</label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.hosteller_maintenance_allowance}
                                onChange={(e) =>
                                    setData(
                                        "hosteller_maintenance_allowance",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Total</label>
                            <input
                                type="number"
                                className="form-control"
                                value={data.hosteller_total}
                                onChange={(e) =>
                                    setData(
                                        "hosteller_total",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                    </div>

                </div>

            </div>

            {/* Bottom */}

            <div className="row">

                <div className="col-md-3 mb-3">
                    <label>Sort Order</label>
                    <input
                        type="number"
                        className="form-control"
                        value={data.sort_order}
                        onChange={(e) =>
                            setData("sort_order", e.target.value)
                        }
                    />
                </div>

                <div className="col-md-3 mb-3">
                    <label>Status</label>
                    <select
                        className="form-control"
                        value={data.is_active ? 1 : 0}
                        onChange={(e) =>
                            setData(
                                "is_active",
                                Boolean(Number(e.target.value))
                            )
                        }
                    >
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                    </select>
                </div>

            </div>

            <div className="mt-3 d-flex gap-2">

                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={processing}
                >
                    {processing ? "Saving..." : "Save"}
                </button>

                <Link
                    href={route("admin.scholarship-rates.index")}
                    className="btn btn-secondary"
                >
                    Cancel
                </Link>

            </div>

        </form>
    );
}