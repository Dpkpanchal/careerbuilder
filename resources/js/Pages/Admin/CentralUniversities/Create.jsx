import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    city: "",
    state: "",
    website: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("admin.central-universities.store"));
  };

  return (
    <AdminLayout header="Add Central University">
      <Head title="Add Central University" />

      <div className="container-fluid">
        <div className="row">

          {/* FORM */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h4>Add Central University</h4>
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
                      placeholder="e.g. North Eastern Hill University"
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
                      placeholder="e.g. Shillong"
                    />
                  </div>

                  {/* State */}
                  <div className="form-group mt-3">
                    <label>State</label>
                    <input
                      className={`form-control ${errors.state ? "is-invalid" : ""}`}
                      value={data.state}
                      onChange={(e) => setData("state", e.target.value)}
                      placeholder="e.g. Meghalaya"
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
                      placeholder="https://www.nehu.ac.in/"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="mt-4">
                    <button className="btn btn-primary" disabled={processing}>
                      {processing ? "Saving..." : "Save"}
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

          {/* GUIDELINES */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4>Guidelines</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li>✔ Name must be official</li>
                  <li>✔ State is required</li>
                  <li>✔ Website should be valid URL</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
