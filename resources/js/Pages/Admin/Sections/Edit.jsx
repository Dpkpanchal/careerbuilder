import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm,Link } from "@inertiajs/react";

export default function Edit({ section }) {

    const { data, setData, put, errors,processing } = useForm({
        section_key: section.section_key || "",
        heading_prefix: section.heading_prefix || "",
        heading_highlight: section.heading_highlight || "",
        subheading: section.subheading || ""
    });

   const submit = (e) => {
    e.preventDefault();
    put(route("admin.sections.update", section.id));
};

    return (
        <AdminLayout header="Edit Section">
            <Head title="Edit Section" />

            <div className="container-fluid">
                <div className="card shadow-sm">

                    <div className="card-header">
                        <h5>Edit Section</h5>
                    </div>

                    <div className="card-body">

                        <form onSubmit={submit}>

                            <div className="mb-3">
                                <label>Section Key</label>
                                <input
                                    className="form-control"
                                    value={data.section_key}
                                    onChange={e => setData("section_key", e.target.value)}
                                    readOnly
                                />
                            </div>

                            <div className="mb-3">
                                <label>Heading Prefix</label>
                                <input
                                    className="form-control"
                                    value={data.heading_prefix}
                                    onChange={e => setData("heading_prefix", e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Heading Highlight</label>
                                <input
                                    className="form-control"
                                    value={data.heading_highlight}
                                    onChange={e => setData("heading_highlight", e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Subheading</label>
                                <textarea
                                    className="form-control"
                                    value={data.subheading}
                                    onChange={e => setData("subheading", e.target.value)}
                                />
                            </div>


                         
                            <Link
                                href={route("admin.sections.index")}
                                className="btn btn-light mr-2"
                            >
                                Cancel
                            </Link>

                            <button
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                {processing ? "Updating..." : "Update"}
                            </button>
                        



                            {/* <button className="btn btn-primary">Update</button> */}

                        </form>

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}