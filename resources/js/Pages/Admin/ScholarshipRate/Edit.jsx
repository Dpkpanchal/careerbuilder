import React from "react";
import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import Form from "./Form";

export default function Edit({ rate }) {
    return (
        <AdminLayout>
            <Head title="Edit Scholarship Rate" />

            <div className="container-fluid">

                <div className="card">

                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="mb-0">Edit Scholarship Rate</h4>
                    </div>

                    <div className="card-body">

                        <Form
                            rate={rate}
                            submitUrl={route(
                                "admin.scholarship-rates.update",
                                rate.id
                            )}
                            method="put"
                        />

                    </div>

                </div>

            </div>
        </AdminLayout>
    );
}