// resources/js/Pages/Admin/StudentSupport/Index.jsx

import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

const TONE_OPTIONS = [
  "Admissions",
  "Counselling",
  "Preparation",
  "Stay",
  "Careers",
  "Official",
];

export default function Index({ records, filters }) {
  const changeTone = (e) => {
    router.get(
      "/admin/student-support",
      { tone: e.target.value },
      { preserveState: true }
    );
  };

  return (
    <AdminLayout header="Student Support">
      <Head title="Student Support" />

      {/* FILTER + ADD BUTTON */}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            {/* LEFT: TONE FILTER */}
            <div className="col-md-4">
              <select
                className="form-control"
                value={filters.tone || ""}
                onChange={changeTone}
              >
                <option value="">All Tones</option>
                {TONE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* RIGHT: ADD BUTTON (FULL RIGHT) */}
            <div className="col-md-8 d-flex justify-content-end">
              <Link
                href={route("admin.studentSupport.create")}
                className="btn btn-primary"
              >
                <i className="fas fa-plus mr-1"></i> Add Support Item
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
                <th>Title</th>
                <th>Tone</th>
                <th>Level</th>
                <th>Icon</th>
                <th>Order</th>
                <th>Status</th>
                <th width="140">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.data.length ? (
                records.data.map((r, i) => (
                  <tr key={r.id}>
                    <td>{records.from + i}</td>
                    <td>
                      <div>{r.title}</div>
                      <small className="text-muted">{r.link}</small>
                    </td>
                    <td>
                      {r.tone ? (
                        <span className="badge badge-info">{r.tone}</span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>{r.level || "-"}</td>
                    <td>{r.icon}</td>
                    <td>{r.sort_order}</td>
                    <td>
                      {r.status ? (
                        <span className="badge badge-success">Active</span>
                      ) : (
                        <span className="badge badge-secondary">Inactive</span>
                      )}
                    </td>
                    <td>
                      <Link
                        href={route("admin.studentSupport.edit", r.id)}
                        className="btn btn-sm btn-info"
                      >
                         <i className="fas fa-edit"></i>
                      </Link>

                      {/* <Link
                        as="button"
                        method="delete"
                        href={route("admin.studentSupport.destroy", r.id)}
                        className="btn btn-sm btn-danger ml-1"
                        onClick={(e) =>
                          !confirm("Delete this record?") &&
                          e.preventDefault()
                        }
                      >
                        Delete
                      </Link> */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-muted">
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