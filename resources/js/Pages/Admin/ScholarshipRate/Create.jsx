import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Form from "./Form";

export default function Create() {
    return (
        <AdminLayout>
            <Head title="Create Scholarship Rate" />

            <div className="container-fluid">

                <div className="card">

                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="mb-0">Create Scholarship Rate</h4>
                    </div>

                    <div className="card-body">

                        <Form
                            submitUrl={route("admin.scholarship-rates.store")}
                            method="post"
                        />

                    </div>

                </div>

            </div>
        </AdminLayout>
    );
}