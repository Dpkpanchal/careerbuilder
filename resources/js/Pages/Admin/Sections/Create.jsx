import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {

    const { data, setData, post, errors } = useForm({
        section_key: "",
        heading_prefix: "",
        heading_highlight: "",
        subheading: ""
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("sections.store"));
    };

    return (
        <AdminLayout header="Create Section">
            <Head title="Create Section" />

            <div className="container-fluid">
                <div className="card shadow-sm">

                    <div className="card-header">
                        <h5>Create Section</h5>
                    </div>

                    <div className="card-body">

                        <form onSubmit={submit}>

                            <div className="mb-3">
                                <label>Section Key</label>
                                <input
                                    className="form-control"
                                    onChange={e => setData("section_key", e.target.value)}
                                />
                                {errors.section_key && <div className="text-danger">{errors.section_key}</div>}
                            </div>

                            <div className="mb-3">
                                <label>Heading Prefix</label>
                                <input
                                    className="form-control"
                                    onChange={e => setData("heading_prefix", e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Heading Highlight</label>
                                <input
                                    className="form-control"
                                    onChange={e => setData("heading_highlight", e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Subheading</label>
                                <textarea
                                    className="form-control"
                                    onChange={e => setData("subheading", e.target.value)}
                                />
                            </div>

                            <button className="btn btn-success">Save</button>

                        </form>

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}