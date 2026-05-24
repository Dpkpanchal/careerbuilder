import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";

const CATEGORY_OPTIONS = [
  "Connecting",
  "Indian University",
  "Foreign University",
];

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    category: "",
    university: "",
    name: "",
    phone: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/admin/admission-support");
  };

  return (
    <AdminLayout header="Add Admission Support">
      <Head title="Add Admission Support" />

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
                <option value="">Select</option>
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              {errors.category && <small className="text-danger">{errors.category}</small>}
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
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            <div className="col-md-6">
              <label>Phone</label>
              <input
                className="form-control"
                placeholder="Multiple numbers allowed"
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
                Save
              </button>
            </div>

          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
