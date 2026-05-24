import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Index({ sections = [] }) {

    const { flash } = usePage().props;

    return (
        <AdminLayout header="Sections">
            <Head title="Sections" />

            <div className="container-fluid">

               

                <div className="row">

                    {sections.length > 0 ? (
                        sections.map((item) => (
                            <div className="col-md-4 mb-4" key={item.id}>

                                <Link
                                    href={route("admin.sections.edit", item.id)}
                                    className="text-decoration-none text-dark"
                                >
                                    <div className="card shadow-sm h-100 hover-card">

                                        {/* Card Header */}
                                        <div className="card-header bg-white border-bottom">
                                            <h6 className="mb-0 fw-semibold text-capitalize">
                                                {item.section_key.replace(/_/g, ' ')}
                                            </h6>
                                        </div>

                                        {/* Card Body */}
                                        <div className="card-body">

                                            <h5 className="fw-bold">
                                                {item.heading_prefix}{" "}
                                                <span className="gradient-text">
                                                    {item.heading_highlight}
                                                </span>
                                            </h5>

                                            <p className="text-muted mt-2">
                                                {item.subheading}
                                            </p>

                                        </div>

                                    </div>
                                </Link>

                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center text-muted">
                            No sections found
                        </div>
                    )}

                </div>

            </div>
        </AdminLayout>
    );
}