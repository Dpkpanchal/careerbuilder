import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Form from "./Form";


export default function Edit({ scholarship }) {
    return (
        <AdminLayout>
            <Head title="Edit Scholarship Overview" />

            <div className="container-fluid">

                <div className="card">

                    <div className="card-header">
                        <h4 className="mb-0">
                            Edit Scholarship Overview
                        </h4>
                    </div>

                    <div className="card-body">

                        <Form
                            scholarship={scholarship}
                            submitUrl={route(
                                "admin.scholarship-overview-table.update",
                                scholarship.id
                            )}
                            method="put"
                        />

                    </div>

                </div>

            </div>
        </AdminLayout>
    );
}