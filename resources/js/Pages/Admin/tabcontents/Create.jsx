import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor } from "ckeditor5";



export default function TabContentCreate({ tabs }) {
    const { data, setData, post, processing, errors } = useForm({
        menu_item_tab_id: "",
        title: "",
        subtitle: "",
        html_content: "",
        sort_order: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post("/admin/tabcontents");
    };

    return (
        <AdminLayout header="Create Tab Content">
            <Head title="Create Tab Content" />

            <div className="container-fluid">
                <div className="row">

                    {/* Left Form */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add New Tab Content</h3>
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
                                            value={data.title}
                                            onChange={(e) => setData("title", e.target.value)}
                                            className="form-control"
                                            placeholder="Enter title"
                                        />
                                    </div>

                                    {/* SUBTITLE */}
                                    <div className="form-group mt-3">
                                        <label>Subtitle</label>
                                        <input
                                            type="text"
                                            value={data.subtitle}
                                            onChange={(e) => setData("subtitle", e.target.value)}
                                            className="form-control"
                                            placeholder="Enter subtitle"
                                        />
                                    </div>

                                    {/* HTML CONTENT */}
                                    <div className="form-group mt-3">
                                        <label>HTML Content</label>
                                        {/* <textarea
                                            value={data.html_content}
                                            onChange={(e) => setData("html_content", e.target.value)}
                                            className={`form-control ${errors.html_content ? "is-invalid" : ""}`}
                                            rows="5"
                                            placeholder="Enter HTML content..."
                                            required
                                        ></textarea> */}

                                        

                                       <CKEditor
                                            editor={ClassicEditor}
                                            data={data.html_content}
                                            onChange={(event, editor) => {
                                                const content = editor.getData();
                                                setData("html_content", content);
                                            }}
                                        />

                                        {errors.html_content && (
                                            <div className="invalid-feedback d-block">{errors.html_content}</div>
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
                                            {processing ? "Saving..." : "Save Content"}
                                        </button>

                                        <Link
                                            href="/admin/tabcontents"
                                            className="btn btn-default ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE HELP */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Quick Tips</h3>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fas fa-lightbulb text-warning mr-2"></i>
                                        Choose the correct Tab linked to a Menu Item
                                    </li>
                                    <li>
                                        <i className="fas fa-lightbulb text-warning mr-2"></i>
                                        HTML Content supports formatting
                                    </li>
                                    <li>
                                        <i className="fas fa-lightbulb text-warning mr-2"></i>
                                        Sort order controls display sequence
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}
