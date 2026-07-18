import React from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Form({
    scholarship = null,
    submitUrl,
    method = "post",
}) {

    const { data, setData, post, put, processing, errors } = useForm({
        name: scholarship?.name || "",
        category: scholarship?.category || "",
        criteria: scholarship?.criteria || "",
        award: scholarship?.award || "",
        eligibility: scholarship?.eligibility || "",
        when_to_apply: scholarship?.when_to_apply || "",
        application: scholarship?.application || "",
        links:
            scholarship?.links?.length > 0
                ? scholarship.links
                : [""],
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

    const addLink = () => {
        setData("links", [...data.links, ""]);
    };

    const removeLink = (index) => {
        const links = [...data.links];
        links.splice(index, 1);
        setData("links", links.length ? links : [""]);
    };

    const updateLink = (index, value) => {
        const links = [...data.links];
        links[index] = value;
        setData("links", links);
    };

    return (
        <form onSubmit={submit}>

            <div className="row">

                <div className="col-md-6 mb-3">
                    <label>Name</label>
                    <input
                        className="form-control"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && (
                        <small className="text-danger">{errors.name}</small>
                    )}
                </div>

                <div className="col-md-6 mb-3">
                    <label>Category</label>
                    <input
                        className="form-control"
                        value={data.category}
                        onChange={(e) => setData("category", e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>When To Apply</label>
                    <input
                        className="form-control"
                        value={data.when_to_apply}
                        onChange={(e) =>
                            setData("when_to_apply", e.target.value)
                        }
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Application</label>
                    <input
                        className="form-control"
                        value={data.application}
                        onChange={(e) =>
                            setData("application", e.target.value)
                        }
                    />
                </div>

                <div className="col-md-12 mb-3">
                    <label>Criteria</label>
                    <textarea
                        rows="3"
                        className="form-control"
                        value={data.criteria}
                        onChange={(e) =>
                            setData("criteria", e.target.value)
                        }
                    />
                </div>

                <div className="col-md-12 mb-3">
                    <label>Award</label>
                    <textarea
                        rows="3"
                        className="form-control"
                        value={data.award}
                        onChange={(e) =>
                            setData("award", e.target.value)
                        }
                    />
                </div>

                <div className="col-md-12 mb-3">
                    <label>Eligibility</label>
                    <textarea
                        rows="3"
                        className="form-control"
                        value={data.eligibility}
                        onChange={(e) =>
                            setData("eligibility", e.target.value)
                        }
                    />
                </div>

            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0">Reference Links</h5>

                <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={addLink}
                >
                    + Add Link
                </button>
            </div>

            {data.links.map((link, index) => (

                <div className="input-group mb-2" key={index}>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="https://example.com"
                        value={link}
                        onChange={(e) =>
                            updateLink(index, e.target.value)
                        }
                    />

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeLink(index)}
                    >
                        <i className="fas fa-trash"></i>
                    </button>

                </div>

            ))}

            <hr />

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

            <div className="mt-3">

                <button
                    className="btn btn-primary mr-2"
                    disabled={processing}
                >
                    {processing ? "Saving..." : "Save"}
                </button>

                <Link
                    href={route("admin.scholarships.index")}
                    className="btn btn-secondary"
                >
                    Cancel
                </Link>

            </div>

        </form>
    );
}