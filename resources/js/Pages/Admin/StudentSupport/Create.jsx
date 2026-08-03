// resources/js/Pages/Admin/StudentSupport/Create.jsx

import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, useForm } from "@inertiajs/react";

const ICON_OPTIONS = [
  "Briefcase", "GraduationCap", "University", "Globe",
  "Users", "BookOpen", "Home", "Link2",
];

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    description: "",
    link: "",
    icon: "University",
    tone: "",
    level: "",
    sort_order: 0,
    status: true,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route("admin.studentSupport.store"));
  };

  return (
    <AdminLayout header="Add Support Item">
      <Head title="Add Support Item" />

      <div className="card">
        <div className="card-body">
          <form onSubmit={submit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
              />
              {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>

            <div className="form-group">
              <label>Link (URL / Path)</label>
              <input
                type="text"
                className={`form-control ${errors.link ? "is-invalid" : ""}`}
                placeholder="/more/admission-support"
                value={data.link}
                onChange={(e) => setData("link", e.target.value)}
              />
              {errors.link && <div className="invalid-feedback">{errors.link}</div>}
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                rows={3}
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
              />
            </div>

            <div className="row">
              <div className="col-md-3 form-group">
                <label>Icon</label>
                <select
                  className="form-control"
                  value={data.icon}
                  onChange={(e) => setData("icon", e.target.value)}
                >
                  {ICON_OPTIONS.map((icon) => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3 form-group">
                <label>Tone (tag)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Admissions"
                  value={data.tone}
                  onChange={(e) => setData("tone", e.target.value)}
                />
              </div>

              <div className="col-md-3 form-group">
                <label>Level</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="India"
                  value={data.level}
                  onChange={(e) => setData("level", e.target.value)}
                />
              </div>

              <div className="col-md-3 form-group">
                <label>Sort Order</label>
                <input
                  type="number"
                  className="form-control"
                  value={data.sort_order}
                  onChange={(e) => setData("sort_order", e.target.value)}
                />
              </div>
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="status"
                checked={data.status}
                onChange={(e) => setData("status", e.target.checked)}
              />
              <label className="form-check-label" htmlFor="status">
                Active
              </label>
            </div>

            <button type="submit" className="btn btn-primary" disabled={processing}>
              Save
            </button>
            <Link href={route("admin.studentSupport.index")} className="btn btn-secondary ml-1">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}