import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Edit({ university }) {
  const { data, setData, put, processing, errors } = useForm({
    name: university.name || "",
    city: university.city || "",
    state: university.state || "",
    website: university.website || "",
  });

  const submit = (e) => {
    e.preventDefault();
    put(route("admin.central-universities.update", university.id));
  };

  return (
    <AdminLayout header={`Edit: ${university.name}`}>
      <Head title={`Edit ${university.name}`} />

      <div className="container-fluid">
        <div className="row">

          {/* FORM */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4>Edit Central University</h4>
              </div>

              <div className="card-body">
                <form onSubmit={submit}>

                  {/* Name */}
                  <div className="form-group">
                    <label>University Name</label>
                    <input
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      value={data.name}
                      onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  {/* City */}
                  <div className="form-group mt-3">
                    <label>City</label>
                    <input
                      className="form-control"
                      value={data.city}
                      onChange={(e) => setData("city", e.target.value)}
                    />
                  </div>

                  {/* State */}
                  <div className="form-group mt-3">
                    <label>State</label>
                    <input
                      className={`form-control ${errors.state ? "is-invalid" : ""}`}
                      value={data.state}
                      onChange={(e) => setData("state", e.target.value)}
                    />
                    {errors.state && <div className="invalid-feedback">{errors.state}</div>}
                  </div>

                  {/* Website */}
                  <div className="form-group mt-3">
                    <label>Website</label>
                    <input
                      className="form-control"
                      value={data.website}
                      onChange={(e) => setData("website", e.target.value)}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="mt-4">
                    <button className="btn btn-primary" disabled={processing}>
                      {processing ? "Updating..." : "Update"}
                    </button>

                    <Link
                      href={route("admin.central-universities.index")}
                      className="btn btn-default ml-2"
                    >
                      Cancel
                    </Link>
                  </div>

                </form>
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4>Record Info</h4>
              </div>
              <div className="card-body">
                <p><strong>ID:</strong> {university.id}</p>
                <p><strong>Created:</strong> {new Date(university.created_at).toLocaleDateString()}</p>
                <p><strong>Updated:</strong> {new Date(university.updated_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
