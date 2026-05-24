import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm,Link } from "@inertiajs/react";

const CATEGORY_OPTIONS = [
  "government",
  "scholarships",
  "exams",
  "career",
];

export default function Edit({ news }) {

 const { data, setData, put, processing, errors } = useForm({
    title: news.title || "",
    category: news.category || "",
    date: news.date || "",
    description: news.description || "",

  });

 const submit = (e) => {
  e.preventDefault();

  put(route("admin.news.update", news.id), {
    preserveScroll: true,
  });
};

  

  return (
    <AdminLayout header="Edit News">
      <Head title="Edit News" />

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

              <Link
                href={route("admin.news.index")}
                className="btn btn-light mr-2"
              >
                Cancel
              </Link>


            <button className="btn btn-primary">
              {processing ? "Updating..." : "Update"}
            </button>

          </form>

        </div>
      </div>
    </AdminLayout>
  );
}