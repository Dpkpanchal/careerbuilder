// import React from "react";
// import { Head, useForm, Link } from "@inertiajs/react";
// import AdminLayout from "@/Layouts/AdminLayout";
// import Select from "react-select";

// export default function Create({ categories, qualifications, subjects }) {

//     const { data, setData, post, processing, errors } = useForm({
//         name: "",
//         email: "",
//         mobile: "",
//         password: "",
//         qualification: "",
//         subject: "",
//         bio: "",
//         profile_image: null,
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         post("/admin/counsellors", { forceFormData: true });
//     };

//     return (
//         <AdminLayout header="Add Counselor">
//             <Head title="Add Counsellor" />

//             <section className="content">
//                 <div className="container-fluid">
//                     <div className="card shadow-sm border-0">
//                         <div className="card-header bg-primary text-white">
//                             <h5 className="mb-0">Create New Counsellor</h5>
//                         </div>

//                         <form onSubmit={handleSubmit}>
//                             <div className="card-body">
//                                 <div className="row g-4">

//                                     {/* Full Name */}
//                                     <div className="col-md-6">
//                                         <label className="form-label fw-semibold">Full Name *</label>
//                                         <input
//                                             className="form-control"
//                                             placeholder="Enter counsellor name"
//                                             value={data.name}
//                                             onChange={(e) => setData("name", e.target.value)}
//                                         />
//                                         {errors.name && <p className="text-danger small">{errors.name}</p>}
//                                     </div>

//                                     {/* Qualification */}
//                                     <div className="col-md-6">
//                                         <label className="form-label fw-semibold">Qualification *</label>
//                                         <input
//                                             className="form-control"
//                                             placeholder="Enter qualification"
//                                             value={data.qualification}
//                                             onChange={(e) => setData("qualification", e.target.value)}
//                                         />
//                                         {errors.qualification && (
//                                             <p className="text-danger small">{errors.qualification}</p>
//                                         )}
//                                     </div>

//                                     {/* Mobile */}
//                                     <div className="col-md-6">
//                                         <label className="form-label fw-semibold">Mobile *</label>
//                                         <input
//                                             className="form-control"
//                                             placeholder="Enter mobile number"
//                                             value={data.mobile}
//                                             onChange={(e) => setData("mobile", e.target.value)}
//                                         />
//                                         {errors.mobile && <p className="text-danger small">{errors.mobile}</p>}
//                                     </div>

//                                     {/* Email */}
//                                     <div className="col-md-6">
//                                         <label className="form-label fw-semibold">Email *</label>
//                                         <input
//                                             type="email"
//                                             className="form-control"
//                                             placeholder="Enter counsellor email"
//                                             value={data.email}
//                                             onChange={(e) => setData("email", e.target.value)}
//                                         />
//                                         {errors.email && <p className="text-danger small">{errors.email}</p>}
//                                     </div>

//                                     {/* Password */}
//                                     <div className="col-md-6">
//                                         <label className="form-label fw-semibold">Password *</label>
//                                         <input
//                                             type="password"
//                                             className="form-control"
//                                             placeholder="Temporary password"
//                                             value={data.password}
//                                             onChange={(e) => setData("password", e.target.value)}
//                                         />
//                                         {errors.password && <p className="text-danger small">{errors.password}</p>}
//                                     </div>

//                                     {/* Profile Image */}
//                                     <div className="col-md-6">
//                                         <label className="form-label fw-semibold">Profile Image</label>
//                                         <input
//                                             type="file"
//                                             className="form-control"
//                                             onChange={(e) =>
//                                                 setData("profile_image", e.target.files[0])
//                                             }
//                                         />
//                                         {errors.profile_image && (
//                                             <p className="text-danger small">{errors.profile_image}</p>
//                                         )}
//                                     </div>

//                                     {/* Subject */}
//                                     <div className="col-md-6">
//                                         <label className="form-label fw-semibold">Subject *</label>

//                                         <Select
//                                             options={subjects.map(s => ({
//                                                 value: s,
//                                                 label: s,
//                                             }))}
//                                             placeholder="Search or select subject"
//                                             classNamePrefix="select"
//                                             value={
//                                                 data.subject
//                                                     ? { value: data.subject, label: data.subject }
//                                                     : null
//                                             }
//                                             onChange={(selected) =>
//                                                 setData("subject", selected ? selected.value : "")
//                                             }
//                                             styles={{
//                                                 control: (base) => ({ ...base, minHeight: "45px" }),
//                                                 menu: (base) => ({ ...base, zIndex: 9999 }),
//                                             }}
//                                         />

//                                         {errors.subject && (
//                                             <p className="text-danger small">{errors.subject}</p>
//                                         )}
//                                     </div>

//                                     {/* Bio */}
//                                     <div className="col-12">
//                                         <label className="form-label fw-semibold">Short Bio</label>
//                                         <textarea
//                                             className="form-control"
//                                             rows="3"
//                                             placeholder="Write short introduction..."
//                                             value={data.bio}
//                                             onChange={(e) => setData("bio", e.target.value)}
//                                         />
//                                         {errors.bio && <p className="text-danger small">{errors.bio}</p>}
//                                     </div>

//                                 </div>
//                             </div>

//                             <div className="card-footer d-flex justify-content-end gap-2">
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary px-4"
//                                     disabled={processing}
//                                 >
//                                     {processing ? "Saving..." : "Create Counsellor"}
//                                 </button>

//                                 <Link
//                                     href="/admin/counsellors"
//                                     className="btn btn-secondary px-4"
//                                 >
//                                     Cancel
//                                 </Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </AdminLayout>
//     );
// }

import React from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Select from "react-select";

export default function Create({ subjects }) {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        mobile: "",
        password: "",
        subjectQualifications: [
            { subject: "", qualification: "" }
        ],
        profile_image: null,
    });

    // ✅ subjects are STRINGS
    const subjectOptions = subjects.map(s => ({
        value: s,
        label: s,
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/counsellors", { forceFormData: true });
    };

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

    return (
        <AdminLayout header="Add Counselor">
            <Head title="Add Counsellor" />

            <div className="container-fluid">
                <div className="card shadow-sm border-0">

                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Create Counsellor</h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row g-3">

                                {/* Full Name */}
                                <div className="col-md-6">
                                    <label className="form-label">Full Name *</label>
                                    <input
                                        className="form-control"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                </div>

                                {/* Mobile */}
                                <div className="col-md-6">
                                    <label className="form-label">Mobile *</label>
                                    <input
                                        className="form-control"
                                        value={data.mobile}
                                        onChange={(e) => setData("mobile", e.target.value)}
                                    />
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
                                </div>

                                {/* Password */}
                                <div className="col-md-6">
                                    <label className="form-label">Password *</label>
                                    <input
                                        type="password"
                                        className="form-control"
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
                                        <div
                                            key={index}
                                            className="row align-items-end mb-2"
                                        >
                                            {/* Subject Dropdown */}
                                            <div className="col-md-5">
                                                <label className="form-label">Subject</label>
                                                <Select
                                                    options={subjectOptions}
                                                    placeholder="Select subject"
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
                                </div>

                            </div>
                        </div>

                        <div className="card-footer text-end">
                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                                disabled={processing}
                            >
                                {processing ? "Saving..." : "Create Counsellor"}
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
