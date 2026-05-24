import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm , usePage} from "@inertiajs/react";
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

export default function Create({ message }) {

    const { data, setData, post, processing, errors } = useForm({
        content: message?.content || "",
        image: null,
    });

    const [preview, setPreview] = useState(
        message?.image ? `/storage/${message.image}` : null
    );

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/admin/cm-message", {
            forceFormData: true,
        });
    };

    const { flash } = usePage().props;

    return (
        <AdminLayout header="CM Message">
            <Head title="Create CM Message" />


            <div className="container-fluid">
                <div className="card shadow-sm rounded-3">

                    <div className="card-header bg-white border-bottom">
                        <h5 className="mb-0 fw-bold">
                            Add Chief Minister Message
                        </h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">

                            <div className="row g-4">

                                {/* Image Upload */}
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold">
                                        Upload Image
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

                                    {preview && (
                                        <div className="mt-3">
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="img-fluid rounded shadow-sm"
                                                style={{ maxHeight: "400px" }}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* CKEditor */}
                                <div className="col-md-8">
                                    <label className="form-label fw-semibold">
                                        Message Content
                                    </label>

                                    <div className="border rounded p-2">
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
                                            data={data.content}
                                            onChange={(event, editor) => {
                                                setData("content", editor.getData());
                                            }}
                                        />
                                    </div>

                                    {errors.content && (
                                        <small className="text-danger">
                                            {errors.content}
                                        </small>
                                    )}
                                </div>

                            </div>

                        </div>

                        <div className="card-footer d-flex justify-content-end gap-2">
                          

                            <button
                                className="btn btn-primary px-4"
                                disabled={processing}
                            >
                                {processing ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </AdminLayout>
    );
}
