import React from "react";
import { Head, useForm, Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Select from "react-select";

export default function Edit({ counsellor, subjects }) {

    const { data, setData, processing, errors } = useForm({
        name: counsellor.name || "",
        email: counsellor.email || "",
        mobile: counsellor.mobile || "",
        password: "",
        subjectQualifications: counsellor.counselor_details?.length
            ? counsellor.counselor_details.map(row => ({
                id: row.id,                 // needed for update/delete
                subject: row.subject,
                qualification: row.qualification,
            }))
            : [{ subject: "", qualification: "" }],
        profile_image: null,
    });

    const subjectOptions = subjects.map(s => ({
        value: s,
        label: s,
    }));

    const updateRow = (index, field, value) => {
        const rows = [...data.subjectQualifications];
        rows[index][field] = value;
        setData("subjectQualifications", rows);
    };

    const addRow = () => {
        setData("subjectQualifications", [
            ...data.subjectQualifications,
            { subject: "", qualification: "" }
        ]);
    };

    const removeRow = (index) => {
        setData(
            "subjectQualifications",
            data.subjectQualifications.filter((_, i) => i !== index)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(
            `/admin/counsellors/${counsellor.id}`,
            {
                ...data,
                _method: "PUT",
            },
            {
                forceFormData: true,
                preserveScroll: true,
            }
        );
    };

    return (
        <AdminLayout header="Edit Counsellor">
            <Head title="Edit Counsellor" />

            <div className="container-fluid">
                <div className="card shadow-sm border-0">

                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Edit Counsellor</h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row g-3">

                                {/* Name */}
                                <div className="col-md-6">
                                    <label className="form-label">Full Name *</label>
                                    <input
                                        className="form-control"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                    {errors.name && <small className="text-danger">{errors.name}</small>}
                                </div>

                                {/* Email */}
                                <div className="col-md-6">
                                    <label className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={data.email}
                                        onChange={(e) => setData("email", e.target.value)}
                                    />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </div>

                                {/* Mobile */}
                                <div className="col-md-6">
                                    <label className="form-label">Mobile *</label>
                                    <input
                                        className="form-control"
                                        value={data.mobile}
                                        onChange={(e) => setData("mobile", e.target.value)}
                                    />
                                    {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
                                </div>

                                {/* Password */}
                                <div className="col-md-6">
                                    <label className="form-label">Password (Optional)</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Leave blank to keep existing password"
                                        value={data.password}
                                        onChange={(e) => setData("password", e.target.value)}
                                    />
                                </div>

                                {/* SUBJECT + QUALIFICATION ROWS */}
                                <div className="col-12 mt-3">
                                    <label className="form-label fw-semibold">
                                        Subject & Qualification
                                    </label>

                                    {data.subjectQualifications.map((row, index) => (
                                        <div key={index} className="row align-items-end mb-2">

                                            {/* Subject */}
                                            <div className="col-md-5">
                                                <label className="form-label">Subject</label>
                                                <Select
                                                    options={subjectOptions}
                                                    value={
                                                        row.subject
                                                            ? { value: row.subject, label: row.subject }
                                                            : null
                                                    }
                                                    onChange={(opt) =>
                                                        updateRow(
                                                            index,
                                                            "subject",
                                                            opt ? opt.value : ""
                                                        )
                                                    }
                                                    placeholder="Select subject"
                                                    menuPortalTarget={document.body}
                                                    styles={{
                                                        menuPortal: base => ({
                                                            ...base,
                                                            zIndex: 9999
                                                        })
                                                    }}
                                                />
                                            </div>

                                            {/* Qualification */}
                                            <div className="col-md-5">
                                                <label className="form-label">Qualification</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="e.g. Ph.D (Physics)"
                                                    value={row.qualification}
                                                    onChange={(e) =>
                                                        updateRow(
                                                            index,
                                                            "qualification",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            {/* Remove */}
                                            <div className="col-md-2">
                                                {data.subjectQualifications.length > 1 && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger w-100"
                                                        onClick={() => removeRow(index)}
                                                    >
                                                        Remove
                                                    </button>
                                                )}
                                            </div>

                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-primary mt-2"
                                        onClick={addRow}
                                    >
                                        + Add More
                                    </button>
                                </div>

                                {/* Profile Image */}
                                <div className="col-md-6">
                                    <label className="form-label">Profile Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) =>
                                            setData("profile_image", e.target.files[0])
                                        }
                                    />

                                    {counsellor.avatar && (
                                        <img
                                            src={`/storage/${counsellor.avatar}`}
                                            alt="Avatar"
                                            width="90"
                                            className="mt-2 rounded"
                                        />
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className="card-footer text-end">
                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                                disabled={processing}
                            >
                                {processing ? "Updating..." : "Save Changes"}
                            </button>

                            <Link
                                href="/admin/counsellors"
                                className="btn btn-secondary"
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
