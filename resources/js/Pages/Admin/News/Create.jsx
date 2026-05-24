import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";

const CATEGORY_OPTIONS = [
  "government",
  "scholarships",
  "exams",
  "career",
];

export default function Create() {

  const { data, setData, post, processing, errors } = useForm({
    title: "",
    category: "",
    date: "",
    description: ""
   
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("admin.news.store"));
  };

  return (
    <AdminLayout header="Create News">
      <Head title="Create News" />

      <div className="card">
        <div className="card-body">

          <form onSubmit={submit}>
            <div className="row">

              {/* TITLE */}
              <div className="col-md-6 mb-3">
                <label>Title</label>
                <input
                  className="form-control"
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                />
                {errors.title && <small className="text-danger">{errors.title}</small>}
              </div>

              {/* CATEGORY */}
              <div className="col-md-6 mb-3">
                <label>Category</label>
                <select
                  className="form-control"
                  value={data.category}
                  onChange={(e) => setData("category", e.target.value)}
                >
                  <option value="">Select Category</option>
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* DATE */}
              <div className="col-md-6 mb-3">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={data.date}
                  onChange={(e) => setData("date", e.target.value)}
                />
              </div>

            

              {/* DESCRIPTION */}
              <div className="col-12 mb-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={data.description}
                  onChange={(e) => setData("description", e.target.value)}
                />
              </div>

            </div>

            <button className="btn btn-primary">
              {processing ? "Saving..." : "Save"}
            </button>

          </form>

        </div>
      </div>
    </AdminLayout>
  );
}