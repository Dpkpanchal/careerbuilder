import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm, usePage,router } from "@inertiajs/react";

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

export default function Edit({ message }) {

    const { flash } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        name: message.name || "",
        post: message.post || "",
        designation: message.designation || "",
        about: message.about || "",
        image: null,
    });

    const [preview, setPreview] = useState(
        message.image ? `/storage/${message.image}` : null
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
  
          router.post(
              `/admin/leaders/${message.id}`,
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
        <AdminLayout header="Edit Leader">
            <Head title="Edit Leader" />

            <div className="container-fluid">

               

                <div className="card shadow-sm rounded-3">

                    {/* Header */}
                    <div className="card-header bg-white border-bottom">
                        <h5 className="mb-0 fw-bold">Edit Leader</h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">

                            <div className="row g-4">

                                {/* Image */}
                                <div className="col-md-4">
                                    <label className="form-label">Image</label>

                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={handleImageChange}
                                    />

                                    {preview && (
                                        <img
                                            src={preview}
                                            className="mt-3 img-fluid rounded"
                                            style={{ maxHeight: "400px" }}
                                        />
                                    )}
                                </div>

                                {/* Fields */}
                                <div className="col-md-8">

                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Name"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />

                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Post (IAS / WBCS)"
                                        value={data.post}
                                        onChange={(e) => setData("post", e.target.value)}
                                    />

                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Designation"
                                        value={data.designation}
                                        onChange={(e) => setData("designation", e.target.value)}
                                    />

                                    {/* CKEditor */}
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
                                            setData("about", editor.getData());
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                        {/* Footer */}
                        <div className="card-footer d-flex justify-content-end gap-2">
                            <Link
                                href={route("admin.leaders.index")}
                                className="btn btn-light"
                            >
                                Cancel
                            </Link>

                            <button
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing ? "Updating..." : "Update"}
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </AdminLayout>
    );
}
