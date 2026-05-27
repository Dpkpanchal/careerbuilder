import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

// CKEditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Heading,
    Bold,
    Italic,
    List,
    Link as LinkPlugin,
    GeneralHtmlSupport
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export default function Create() {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        post: "",
        designation: "",
        about: "",
        image: null,
    });

    const [preview, setPreview] = useState(null);

    // IMAGE PREVIEW
    const handleImageChange = (e) => {

        const file = e.target.files[0];

        setData("image", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    // SUBMIT
   const handleSubmit = (e) => {

    e.preventDefault();

    post(
        route("admin.leaders.store"),
        {
            forceFormData: true,
            preserveScroll: true,
        }
    );
};

    return (
        <AdminLayout header="Create Leader">

            <Head title="Create Leader" />

            <div className="container-fluid">

                <div className="card shadow-sm rounded-3">

                    {/* Header */}
                    <div className="card-header bg-white border-bottom py-3 px-4">

                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">

                            <div>

                                <h5 className="mb-1 fw-bold">
                                    Create Leader
                                </h5>

                                <small className="text-muted">
                                    Add a new leader profile and information
                                </small>

                            </div>

                            {/* VIEW LIST BUTTON */}
                            <Link
                                href={route("admin.leaders.index")}
                                className="btn btn-dark d-flex align-items-center gap-2 px-3"
                                style={{
                                    borderRadius: "10px",
                                    height: "42px"
                                }}
                            >
                                View Leaders
                            </Link>

                        </div>

                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit}>

                        <div className="card-body">

                            <div className="row g-4">

                                {/* IMAGE */}
                                <div className="col-md-4">

                                    <label className="form-label fw-medium">
                                        Leader Image
                                    </label>

                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleImageChange}
                                    />

                                    {errors.image && (
                                        <small className="text-danger">
                                            {errors.image}
                                        </small>
                                    )}

                                    {/* PREVIEW */}
                                    {preview && (

                                        <img
                                            src={preview}
                                            className="mt-3 img-fluid rounded shadow-sm"
                                            style={{
                                                maxHeight: "400px",
                                                objectFit: "cover"
                                            }}
                                        />

                                    )}

                                </div>

                                {/* FIELDS */}
                                <div className="col-md-8">

                                    {/* NAME */}
                                    <div className="mb-3">

                                        <label className="form-label fw-medium">
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter leader name"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        {errors.name && (
                                            <small className="text-danger">
                                                {errors.name}
                                            </small>
                                        )}

                                    </div>

                                    {/* POST */}
                                    <div className="mb-3">

                                        <label className="form-label fw-medium">
                                            Post
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="IAS / WBCS / IPS"
                                            value={data.post}
                                            onChange={(e) =>
                                                setData(
                                                    "post",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        {errors.post && (
                                            <small className="text-danger">
                                                {errors.post}
                                            </small>
                                        )}

                                    </div>

                                    {/* DESIGNATION */}
                                    <div className="mb-3">

                                        <label className="form-label fw-medium">
                                            Designation
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter designation"
                                            value={data.designation}
                                            onChange={(e) =>
                                                setData(
                                                    "designation",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        {errors.designation && (
                                            <small className="text-danger">
                                                {errors.designation}
                                            </small>
                                        )}

                                    </div>

                                    {/* ABOUT */}
                                    <div className="mb-3">

                                        <label className="form-label fw-medium mb-2">
                                            About Leader
                                        </label>

                                        <CKEditor
                                            editor={ClassicEditor}
                                            config={{
                                                licenseKey: "GPL",

                                                plugins: [
                                                    Essentials,
                                                    Paragraph,
                                                    Heading,
                                                    Bold,
                                                    Italic,
                                                    List,
                                                    LinkPlugin,
                                                    GeneralHtmlSupport
                                                ],

                                                toolbar: [
                                                    "heading",
                                                    "|",
                                                    "bold",
                                                    "italic",
                                                    "|",
                                                    "bulletedList",
                                                    "numberedList",
                                                    "|",
                                                    "link"
                                                ],

                                                htmlSupport: {
                                                    allow: [
                                                        {
                                                            name: /.*/,
                                                            attributes: true,
                                                            classes: true,
                                                            styles: true
                                                        }
                                                    ]
                                                }
                                            }}
                                            data={data.about}
                                            onChange={(event, editor) => {
                                                setData(
                                                    "about",
                                                    editor.getData()
                                                );
                                            }}
                                        />

                                        {errors.about && (
                                            <small className="text-danger">
                                                {errors.about}
                                            </small>
                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* FOOTER */}
                        <div className="card-footer bg-white d-flex justify-content-end gap-2">

                            <Link
                                href={route("admin.leaders.index")}
                                className="btn btn-light"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing
                                    ? "Creating..."
                                    : "Create Leader"}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </AdminLayout>
    );
}