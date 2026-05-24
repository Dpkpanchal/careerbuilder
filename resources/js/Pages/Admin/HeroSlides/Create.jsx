import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create() {
    const [preview, setPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        title: "",
        title_gradient: "",
        subtitle: "",
        cta_text: "",
        cta_link: "",
        image: null,
        order: 0,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setData("image", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/admin/hero-slides", {
            forceFormData: true, // 🔥 required for file upload
        });
    };

    return (
        <AdminLayout header="Add Hero Slide">
            <Head title="Add Hero Slide" />

            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Create Hero Slide</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row g-3">

                                {/* Title */}
                                <div className="col-md-6">
                                    <label className="form-label">Title *</label>
                                    <input
                                        className="form-control"
                                        value={data.title}
                                        onChange={(e) => setData("title", e.target.value)}
                                    />
                                    {errors.title && (
                                        <small className="text-danger">{errors.title}</small>
                                    )}
                                </div>

                                {/* Title Gradient */}
                                <div className="col-md-6">
                                    <label className="form-label">Title Gradient</label>
                                    <input
                                        className="form-control"
                                        value={data.title_gradient}
                                        onChange={(e) =>
                                            setData("title_gradient", e.target.value)
                                        }
                                    />
                                </div>

                                {/* Subtitle */}
                                <div className="col-md-12">
                                    <label className="form-label">Subtitle</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        value={data.subtitle}
                                        onChange={(e) =>
                                            setData("subtitle", e.target.value)
                                        }
                                    />
                                </div>

                                {/* CTA Text */}
                                {/* <div className="col-md-6">
                                    <label className="form-label">CTA Text</label>
                                    <input
                                        className="form-control"
                                        value={data.cta_text}
                                        onChange={(e) =>
                                            setData("cta_text", e.target.value)
                                        }
                                    />
                                </div> */}

                                {/* CTA Link */}
                                {/* <div className="col-md-6">
                                    <label className="form-label">CTA Link</label>
                                    <input
                                        className="form-control"
                                        value={data.cta_link}
                                        onChange={(e) =>
                                            setData("cta_link", e.target.value)
                                        }
                                        placeholder="/about or https://..."
                                    />
                                </div> */}

                                {/* Image Upload */}
                                <div className="col-md-6">
                                    <label className="form-label">Upload Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                    {errors.image && (
                                        <small className="text-danger">{errors.image}</small>
                                    )}
                                </div>

                                {/* Image Preview */}
                                <div className="col-md-6">
                                    <label className="form-label">Preview</label>
                                    <div>
                                        {preview ? (
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="img-fluid rounded"
                                                style={{ maxHeight: "150px" }}
                                            />
                                        ) : (
                                            <p className="text-muted">No image selected</p>
                                        )}
                                    </div>
                                </div>

                                {/* Order */}
                                <div className="col-md-6">
                                    <label className="form-label">Order</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={data.order}
                                        onChange={(e) =>
                                            setData("order", e.target.value)
                                        }
                                    />
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
                                href="/admin/hero-slides"
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