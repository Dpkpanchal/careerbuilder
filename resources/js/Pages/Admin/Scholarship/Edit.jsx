import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Form from "./Form";

export default function Edit({ scholarship }) {
    return (
        <AdminLayout>
            <Head title="Edit Scholarship" />

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Edit Scholarship</h3>
                </div>

                <div className="card">

                    <div className="card-header">
                        <h5 className="mb-0">Scholarship Details</h5>
                    </div>

                    <div className="card-body">

                        <Form
                            scholarship={scholarship}
                            submitUrl={route(
                                "admin.scholarships.update",
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