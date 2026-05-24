import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";

const CATEGORY_OPTIONS = [
  "Connecting",
  "Indian University",
  "Foreign University",
];

export default function Edit({ record }) {
  const { data, setData, put, processing, errors } = useForm({
    category: record.category || "",
    university: record.university || "",
    name: record.name || "",
    phone: record.phone || "",
    email: record.email || "",
  });

  const submit = (e) => {
    e.preventDefault();
    put(`/admin/admission-support/${record.id}`);
  };

  return (
    <AdminLayout header="Edit Admission Support">
      <Head title="Edit Admission Support" />

      <div className="card">
        <div className="card-body">
          <form onSubmit={submit} className="row g-3">

            <div className="col-md-6">
              <label>Category *</label>
              <select
                className="form-control"
                value={data.category}
                onChange={(e) => setData("category", e.target.value)}
              >
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="col-md-6">
              <label>University</label>
              <input
                className="form-control"
                value={data.university}
                onChange={(e) => setData("university", e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label>Name *</label>
              <input
                className="form-control"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label>Phone</label>
              <input
                className="form-control"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label>Email</label>
              <input
                className="form-control"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
            </div>

            <div className="col-12">
              <button className="btn btn-primary" disabled={processing}>
                Update
              </button>
            </div>

          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
