import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ universities, filters }) {

  const changeState = (e) => {
    router.get(
      "/admin/central-universities",
      { state: e.target.value },
      { preserveState: true, replace: true }
    );
  };

  return (
    <AdminLayout header="Central Universities">
      <Head title="Central Universities" />

      {/* FILTER + ADD BUTTON */}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">

            {/* LEFT: STATE FILTER */}
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Filter by State"
                value={filters.state || ""}
                onChange={changeState}
              />
            </div>

            {/* RIGHT: ADD BUTTON */}
            <div className="col-md-8 d-flex justify-content-end">
              <Link
                href={route("admin.central-universities.create")}
                className="btn btn-primary"
              >
                <i className="fas fa-plus mr-1"></i> Add Central University
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="card mt-3">
        <div className="card-body table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th width="60">#</th>
                <th>University Name</th>
                <th>City</th>
                <th>State</th>
                <th>Website</th>
                <th width="140">Action</th>
              </tr>
            </thead>

            <tbody>
              {universities.data.length ? (
                universities.data.map((u, i) => (
                  <tr key={u.id}>
                    <td>{universities.from + i}</td>
                    <td>{u.name}</td>
                    <td>{u.city}</td>
                    <td>
                      <span className="badge badge-secondary">
                        {u.state}
                      </span>
                    </td>
                    <td>
                      {u.website ? (
                        <a
                          href={u.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {u.website}
                        </a>
                      ) : "-"}
                    </td>
                    <td>
                      <Link
                        href={route("admin.central-universities.edit", u.id)}
                        className="btn btn-sm btn-info"
                      >
                        Edit
                      </Link>

                      <Link
                        as="button"
                        method="delete"
                        href={route("admin.central-universities.destroy", u.id)}
                        className="btn btn-sm btn-danger ml-1"
                        onClick={(e) =>
                          !confirm("Delete this university?") &&
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
                  <td colSpan="6" className="text-center text-muted">
                    No central universities found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="card-footer d-flex justify-content-end">
          <ul className="pagination mb-0">
            {universities.links.map((link, i) => (
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
