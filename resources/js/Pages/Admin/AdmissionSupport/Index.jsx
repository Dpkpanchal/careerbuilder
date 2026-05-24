import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

const CATEGORY_OPTIONS = [
  "Connecting",
  "Indian University",
  "Foreign University",
];

export default function Index({ records, filters }) {
  const changeCategory = (e) => {
    router.get(
      "/admin/admission-support",
      { category: e.target.value },
      { preserveState: true }
    );
  };

  return (
    <AdminLayout header="Admission Support">
      <Head title="Admission Support" />

      {/* FILTER + ADD BUTTON */}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            {/* LEFT: CATEGORY FILTER */}
            <div className="col-md-4">
              <select
                className="form-control"
                value={filters.category || ""}
                onChange={changeCategory}
              >
                <option value="">All Categories</option>
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* RIGHT: ADD BUTTON (FULL RIGHT) */}
            <div className="col-md-8 d-flex justify-content-end">
              <Link
                href={route("admin.admission-support.create")}
                className="btn btn-primary"
              >
                <i className="fas fa-plus mr-1"></i> Add Admission Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="card mt-3">
        <div className="card-body table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Category</th>
                <th>University</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th width="140">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.data.length ? (
                records.data.map((r, i) => (
                  <tr key={r.id}>
                    <td>{records.from + i}</td>
                    <td>
                      <span className="badge badge-info">{r.category}</span>
                    </td>
                    <td>{r.university || "-"}</td>
                    <td>{r.name}</td>
                    <td>{r.phone || "-"}</td>
                    <td>{r.email || "-"}</td>
                    <td>
                      <Link
                        href={route("admin.admission-support.edit", r.id)}
                        className="btn btn-sm btn-info"
                      >
                        Edit
                      </Link>

                      <Link
                        as="button"
                        method="delete"
                        href={route("admin.admission-support.destroy", r.id)}
                        className="btn btn-sm btn-danger ml-1"
                        onClick={(e) =>
                          !confirm("Delete this record?") &&
                          e.preventDefault()
                        }
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="card-footer d-flex justify-content-end">
          <ul className="pagination mb-0">
            {records.links.map((link, i) => (
              <li
                key={i}
                className={`page-item ${link.active ? "active" : ""} ${
                  !link.url ? "disabled" : ""
                }`}
              >
                <Link
                  href={link.url || "#"}
                  className="page-link"
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
}
