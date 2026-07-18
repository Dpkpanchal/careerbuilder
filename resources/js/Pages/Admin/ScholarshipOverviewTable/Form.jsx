import React from "react";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function Form({
    scholarship = null,
    submitUrl,
    method = "post",
}) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: scholarship?.name || "",
        class_of_study: scholarship?.class_of_study || "",
        website: scholarship?.website || "",
        minimum_marks: scholarship?.minimum_marks || "",
        annual_family_income: scholarship?.annual_family_income || "",
        sort_order: scholarship?.sort_order ?? 0,
        is_active: scholarship?.is_active ?? true,
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

                {/* Name */}

                <div className="col-md-6 mb-3">
                    <label className="form-label">
                        Scholarship Scheme
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.name}
                        onChange={(e) =>
                            setData("name", e.target.value)
                        }
                    />

                    {errors.name && (
                        <small className="text-danger">
                            {errors.name}
                        </small>
                    )}
                </div>

                {/* Class */}

                <div className="col-md-6 mb-3">
                    <label className="form-label">
                        Class of Study
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.class_of_study}
                        onChange={(e) =>
                            setData("class_of_study", e.target.value)
                        }
                    />

                    {errors.class_of_study && (
                        <small className="text-danger">
                            {errors.class_of_study}
                        </small>
                    )}
                </div>

                {/* Website */}

                <div className="col-md-6 mb-3">
                    <label className="form-label">
                        Website
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.website}
                        onChange={(e) =>
                            setData("website", e.target.value)
                        }
                    />

                    {errors.website && (
                        <small className="text-danger">
                            {errors.website}
                        </small>
                    )}
                </div>

                {/* Minimum Marks */}

                <div className="col-md-6 mb-3">
                    <label className="form-label">
                        Minimum Marks
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.minimum_marks}
                        onChange={(e) =>
                            setData("minimum_marks", e.target.value)
                        }
                    />

                    {errors.minimum_marks && (
                        <small className="text-danger">
                            {errors.minimum_marks}
                        </small>
                    )}
                </div>

                {/* Annual Income */}

                <div className="col-md-6 mb-3">
                    <label className="form-label">
                        Annual Family Income
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={data.annual_family_income}
                        onChange={(e) =>
                            setData(
                                "annual_family_income",
                                e.target.value
                            )
                        }
                    />

                    {errors.annual_family_income && (
                        <small className="text-danger">
                            {errors.annual_family_income}
                        </small>
                    )}
                </div>

                {/* Sort */}

                <div className="col-md-3 mb-3">
                    <label className="form-label">
                        Sort Order
                    </label>

                    <input
                        type="number"
                        className="form-control"
                        value={data.sort_order}
                        onChange={(e) =>
                            setData("sort_order", e.target.value)
                        }
                    />
                </div>

                {/* Status */}

                <div className="col-md-3 mb-3">
                    <label className="form-label">
                        Status
                    </label>

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

            <button
                type="submit"
                className="btn btn-primary"
                disabled={processing}
            >
                {processing ? "Saving..." : "Save"}
            </button>


             <Link
                href={route("admin.scholarship-overview-table.index")}
                className="btn btn-secondary"
            >
                Cancel
            </Link>


        </form>
    );
}