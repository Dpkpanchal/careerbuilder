import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Form from "./Form";

export default function Create() {
    return (
        <AdminLayout>
            <Head title="Create Scholarship" />

            <div className="container-fluid">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Create Scholarship</h3>
                </div>

                <div className="card">

                    <div className="card-header">
                        <h5 className="mb-0">Scholarship Details</h5>
                    </div>

                    <div className="card-body">

                        <Form
                            submitUrl={route("admin.scholarships.store")}
                            method="post"
                        />

                    </div>

                </div>

            </div>
        </AdminLayout>
    );
}