import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "ckeditor5";


export default function TabContentEdit({ tabcontent, tabs }) {
    const { data, setData, put, processing, errors } = useForm({
        menu_item_tab_id: tabcontent.menu_item_tab_id || "",
        title: tabcontent.title || "",
        subtitle: tabcontent.subtitle || "",
        html_content: tabcontent.html_content || "",
        sort_order: tabcontent.sort_order || 0,
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/tabcontents/${tabcontent.id}`);
    };

    return (
        <AdminLayout header="Edit Tab Content">
            <Head title="Edit Tab Content" />

            <div className="container-fluid">
                <div className="row">

                    {/* LEFT FORM */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit Tab Content</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* TAB SELECT */}
                                    <div className="form-group">
                                        <label>Select Tab</label>
                                        <select
                                            className={`form-control ${errors.menu_item_tab_id ? "is-invalid" : ""}`}
                                            value={data.menu_item_tab_id}
                                            onChange={(e) => setData("menu_item_tab_id", e.target.value)}
                                            required
                                        >
                                            <option value="">Select Tab</option>
                                            {tabs.map((tab) => (
                                                <option key={tab.id} value={tab.id}>
                                                    {tab.name} ({tab.menu_item?.name})
                                                </option>
                                            ))}
                                        </select>

                                        {errors.menu_item_tab_id && (
                                            <div className="invalid-feedback">{errors.menu_item_tab_id}</div>
                                        )}
                                    </div>

                                    {/* TITLE */}
                                    <div className="form-group mt-3">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.title}
                                            onChange={(e) => setData("title", e.target.value)}
                                            placeholder="Enter title"
                                        />
                                    </div>

                                    {/* SUBTITLE */}
                                    <div className="form-group mt-3">
                                        <label>Subtitle</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.subtitle}
                                            onChange={(e) => setData("subtitle", e.target.value)}
                                            placeholder="Enter subtitle"
                                        />
                                    </div>

                                    {/* HTML CONTENT */}
                                    <div className="form-group mt-3">
                                        <label>HTML Content</label>
                                      


                                          <CKEditor
                                            editor={ClassicEditor}
                                            data={data.html_content}
                                            onChange={(event, editor) => {
                                                const content = editor.getData();
                                                setData("html_content", content);
                                            }}
                                        />



                                        {errors.html_content && (
                                            <div className="invalid-feedback">{errors.html_content}</div>
                                        )}
                                    </div>

                                    {/* SORT ORDER */}
                                    <div className="form-group mt-3">
                                        <label>Sort Order</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={data.sort_order}
                                            onChange={(e) => setData("sort_order", e.target.value)}
                                        />
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="form-group mt-4">
                                        <button className="btn btn-primary" disabled={processing}>
                                            {processing ? "Updating..." : "Update Content"}
                                        </button>

                                        <Link href="/admin/tabcontents" className="btn btn-default ml-2">
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE DETAILS */}
                    <div className="col-md-4">

                        {/* INFO CARD */}
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Content Info</h3>
                            </div>
                            <div className="card-body">
                                <p><strong>ID:</strong> {tabcontent.id}</p>
                                <p><strong>Tab:</strong> {tabcontent.tab?.name}</p>
                                <p><strong>Created:</strong> {new Date(tabcontent.created_at).toLocaleDateString()}</p>
                                <p><strong>Updated:</strong> {new Date(tabcontent.updated_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {/* DELETE */}
                        <div className="card mt-3">
                            <div className="card-header bg-danger">
                                <h3 className="card-title text-white">Danger Zone</h3>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">
                                    Deleting this content is permanent.
                                </p>

                                <Link
                                    href={`/admin/tabcontents/${tabcontent.id}`}
                                    method="delete"
                                    as="button"
                                    className="btn btn-danger btn-block"
                                    onClick={(e) => {
                                        if (!confirm("Are you sure you want to delete this content?")) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    Delete Content
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
