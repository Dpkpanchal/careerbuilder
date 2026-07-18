import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Form from "./Form";

export default function Create() {
    return (
        <AdminLayout>
            <Head title="Create Scholarship Overview" />

            <div className="container-fluid">

                <div className="card">

                    <div className="card-header">
                        <h4 className="mb-0">
                            Create Scholarship Overview
                        </h4>
                    </div>

                    <div className="card-body">

                        <Form
                            submitUrl={route(
                                "admin.scholarship-overview-table.store"
                            )}
                            method="post"
                        />

                    </div>

                </div>

            </div>

        </AdminLayout>
    );
}