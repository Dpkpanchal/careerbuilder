import React, { useMemo } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const JobGroupEdit = ({ sectors, jobGroup }) => {

    const { data, setData, put, processing, errors } = useForm({

        job_sector_id: jobGroup?.job_sector_id ?? "",
        label: jobGroup?.label ?? "",
        website: jobGroup?.website ?? "",
        sort_order: jobGroup?.sort_order ?? 0,

        sublinks: (jobGroup?.links ?? []).map(link => ({
            label: link.label,
            href: link.href,
        })),

        rows: (jobGroup?.rows ?? []).length
            ? jobGroup.rows.map(row => ({
                recruited_by: row.recruited_by ?? "",
                website: row.website ?? "",
                post: row.post,
                eligibility: row.eligibility,
            }))
            : [{ recruited_by: "", website: "", post: "", eligibility: "" }],

    });

    const selectedSector = useMemo(() => {

        return sectors.find(
            sector => String(sector.id) === String(data.job_sector_id)
        );

    }, [sectors, data.job_sector_id]);

    const isAfterClass8 = selectedSector?.key === "after-class-8";

    const addRow = () => {

        setData("rows", [
            ...data.rows,
            { recruited_by: "", website: "", post: "", eligibility: "" },
        ]);

    };

    const removeRow = (index) => {

        if (data.rows.length === 1) return;

        setData("rows", data.rows.filter((_, i) => i !== index));

    };

    const updateRow = (index, key, value) => {

        const rows = [...data.rows];

        rows[index] = { ...rows[index], [key]: value };

        setData("rows", rows);

    };

    const addSublink = () => {

        setData("sublinks", [
            ...data.sublinks,
            { label: "", href: "" },
        ]);

    };

    const removeSublink = (index) => {

        setData("sublinks", data.sublinks.filter((_, i) => i !== index));

    };

    const updateSublink = (index, key, value) => {

        const sublinks = [...data.sublinks];

        sublinks[index] = { ...sublinks[index], [key]: value };

        setData("sublinks", sublinks);

    };

    const submit = (e) => {

        e.preventDefault();

        put(`/admin/job-groups/${jobGroup.id}`);

    };

    return (

        <AdminLayout header="Edit Job Group">

            <Head title="Edit Job Group" />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-10">

                        <div className="card">

                            <div className="card-header">
                                <h3 className="card-title">Edit Job Group</h3>
                            </div>

                            <form onSubmit={submit}>

                                <div className="card-body">

                                    <div className="row">

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>Sector</label>

                                                <select
                                                    className={`form-control ${errors.job_sector_id ? "is-invalid" : ""}`}
                                                    value={data.job_sector_id}
                                                    onChange={(e) => setData("job_sector_id", e.target.value)}
                                                >

                                                    <option value="">Select Sector</option>

                                                    {sectors.map(sector => (

                                                        <option key={sector.id} value={sector.id}>
                                                            {sector.title}
                                                        </option>

                                                    ))}

                                                </select>

                                                {errors.job_sector_id && (
                                                    <div className="invalid-feedback">{errors.job_sector_id}</div>
                                                )}

                                            </div>

                                        </div>

                                        <div className="col-md-6">

                                            <div className="form-group">

                                                <label>
                                                    {isAfterClass8 ? "Type of Job" : "Recruited By"}
                                                </label>

                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.label ? "is-invalid" : ""}`}
                                                    placeholder={isAfterClass8 ? "e.g. Driver Type Job" : "e.g. UPSC"}
                                                    value={data.label}
                                                    onChange={(e) => setData("label", e.target.value)}
                                                />

                                                {errors.label && (
                                                    <div className="invalid-feedback">{errors.label}</div>
                                                )}

                                            </div>

                                        </div>

                                        {!isAfterClass8 && (

                                            <div className="col-md-6">

                                                <div className="form-group">

                                                    <label>Official Website</label>

                                                    <input
                                                        type="url"
                                                        className={`form-control ${errors.website ? "is-invalid" : ""}`}
                                                        placeholder="https://..."
                                                        value={data.website}
                                                        onChange={(e) => setData("website", e.target.value)}
                                                    />

                                                    {errors.website && (
                                                        <div className="invalid-feedback">{errors.website}</div>
                                                    )}

                                                </div>

                                            </div>

                                        )}

                                        <div className="col-md-6">

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

                                    </div>

                                    {!isAfterClass8 && (

                                        <>

                                            <hr />

                                            <div className="form-group">

                                                <label>Extra Sublinks (optional)</label>

                                                {data.sublinks.map((link, index) => (

                                                    <div className="row mb-2" key={index}>

                                                        <div className="col-md-5">

                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Label (e.g. WBSEDCL)"
                                                                value={link.label}
                                                                onChange={(e) => updateSublink(index, "label", e.target.value)}
                                                            />

                                                        </div>

                                                        <div className="col-md-5">

                                                            <input
                                                                type="url"
                                                                className="form-control"
                                                                placeholder="https://..."
                                                                value={link.href}
                                                                onChange={(e) => updateSublink(index, "href", e.target.value)}
                                                            />

                                                        </div>

                                                        <div className="col-md-2">

                                                            <button
                                                                type="button"
                                                                className="btn btn-danger"
                                                                onClick={() => removeSublink(index)}
                                                            >
                                                                <i className="fas fa-trash"></i>
                                                            </button>

                                                        </div>

                                                    </div>

                                                ))}

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary btn-sm"
                                                    onClick={addSublink}
                                                >
                                                    <i className="fas fa-plus mr-1"></i>
                                                    Add Sublink
                                                </button>

                                            </div>

                                        </>

                                    )}

                                    <hr />

                                    <div className="form-group">

                                        <label>
                                            {isAfterClass8 ? "Rows (Recruited By + Post + Eligibility)" : "Rows (Post + Eligibility)"}
                                        </label>

                                        {errors.rows && (
                                            <div className="invalid-feedback d-block mb-2">{errors.rows}</div>
                                        )}

                                        {data.rows.map((row, index) => (

                                            <div className="card mb-2" key={index}>

                                                <div className="card-body py-2">

                                                    <div className="row align-items-start">

                                                        {isAfterClass8 && (

                                                            <>

                                                                <div className="col-md-4 mb-2">

                                                                    <input
                                                                        type="text"
                                                                        className={`form-control ${errors[`rows.${index}.recruited_by`] ? "is-invalid" : ""}`}
                                                                        placeholder="Recruited By"
                                                                        value={row.recruited_by}
                                                                        onChange={(e) => updateRow(index, "recruited_by", e.target.value)}
                                                                    />

                                                                    {errors[`rows.${index}.recruited_by`] && (
                                                                        <div className="invalid-feedback">
                                                                            {errors[`rows.${index}.recruited_by`]}
                                                                        </div>
                                                                    )}

                                                                </div>

                                                                <div className="col-md-4 mb-2">

                                                                    <input
                                                                        type="url"
                                                                        className="form-control"
                                                                        placeholder="Website (optional)"
                                                                        value={row.website}
                                                                        onChange={(e) => updateRow(index, "website", e.target.value)}
                                                                    />

                                                                </div>

                                                            </>

                                                        )}

                                                        <div className={isAfterClass8 ? "col-md-3 mb-2" : "col-md-5 mb-2"}>

                                                            <input
                                                                type="text"
                                                                className={`form-control ${errors[`rows.${index}.post`] ? "is-invalid" : ""}`}
                                                                placeholder="Post / Examination"
                                                                value={row.post}
                                                                onChange={(e) => updateRow(index, "post", e.target.value)}
                                                            />

                                                            {errors[`rows.${index}.post`] && (
                                                                <div className="invalid-feedback">
                                                                    {errors[`rows.${index}.post`]}
                                                                </div>
                                                            )}

                                                        </div>

                                                        <div className={isAfterClass8 ? "col-md-9 mb-2" : "col-md-5 mb-2"}>

                                                            <input
                                                                type="text"
                                                                className={`form-control ${errors[`rows.${index}.eligibility`] ? "is-invalid" : ""}`}
                                                                placeholder="Eligibility"
                                                                value={row.eligibility}
                                                                onChange={(e) => updateRow(index, "eligibility", e.target.value)}
                                                            />

                                                            {errors[`rows.${index}.eligibility`] && (
                                                                <div className="invalid-feedback">
                                                                    {errors[`rows.${index}.eligibility`]}
                                                                </div>
                                                            )}

                                                        </div>

                                                        <div className="col-md-1 mb-2 text-right">

                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() => removeRow(index)}
                                                                disabled={data.rows.length === 1}
                                                            >
                                                                <i className="fas fa-trash"></i>
                                                            </button>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        ))}

                                        <button
                                            type="button"
                                            className="btn btn-success btn-sm"
                                            onClick={addRow}
                                        >
                                            <i className="fas fa-plus mr-1"></i>
                                            Add Row
                                        </button>

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
                                        href="/admin/job-groups"
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

export default JobGroupEdit;
