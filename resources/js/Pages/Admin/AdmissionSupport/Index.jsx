import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

const CATEGORY_OPTIONS = [
  "Connecting",
  "Indian University",
  "Foreign University",
];

export default function Index({ records, filters }) {
  const [statusFilter, setStatusFilter] = useState(filters?.status || "");
  const [categoryFilter, setCategoryFilter] = useState(filters?.category || "");

  const changeCategory = (e) => {
    setCategoryFilter(e.target.value);
    router.get(
      "/admin/admission-support",
      { category: e.target.value, status: statusFilter },
      { preserveState: true }
    );
  };

  const changeStatus = (e) => {
    setStatusFilter(e.target.value);
    router.get(
      "/admin/admission-support",
      { category: categoryFilter, status: e.target.value },
      { preserveState: true }
    );
  };

  const resetFilters = () => {
    setStatusFilter("");
    setCategoryFilter("");
    router.get(
      "/admin/admission-support",
      { category: "", status: "" },
      { preserveState: true }
    );
  };

  /* ---------------- TOGGLE STATUS ---------------- */
  const toggleStatus = (item) => {
    if (!confirm(`Are you sure you want to ${item.is_active ? 'deactivate' : 'activate'} this record?`)) {
      return;
    }

    router.put(
      `/admin/admission-support/${item.id}/toggle-status`,
      { is_active: !item.is_active },
      {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          console.log('Status updated successfully');
        },
        onError: (errors) => {
          console.error('Error updating status:', errors);
        }
      }
    );
  };

  /* ---------------- CALCULATE S.NO ---------------- */
  const getSerialNumber = (index) => {
    const currentPage = records.current_page || 1;
    const perPage = records.per_page || 10;
    return (currentPage - 1) * perPage + index + 1;
  };

  /* ---------------- PERMANENT DELETE ---------------- */
  const handleDelete = (id, e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to permanently delete this record? This action cannot be undone!")) {
      router.delete(`/admin/admission-support/${id}`, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          console.log('Record deleted permanently');
        },
        onError: (errors) => {
          console.error('Error deleting record:', errors);
        }
      });
    }
  };

  return (
    <AdminLayout header="Admission Support">
      <Head title="Admission Support" />

      {/* FILTER + ADD BUTTON */}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            {/* CATEGORY FILTER */}
            <div className="col-md-3">
              <select
                className="form-control"
                value={categoryFilter}
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

            {/* STATUS FILTER */}
            <div className="col-md-3">
              <select
                className="form-control"
                value={statusFilter}
                onChange={changeStatus}
              >
                <option value="">All Status</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>

            {/* RESET BUTTON */}
            <div className="col-md-2">
              <button
                className="btn btn-default"
                onClick={resetFilters}
              >
                <i className="fas fa-redo mr-1"></i> Reset
              </button>
            </div>

            {/* ADD BUTTON */}
            <div className="col-md-4 d-flex justify-content-end">
              <Link
                href="/admin/admission-support/create"
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
                <th style={{ width: "70px" }}>S.No</th>
                <th>Category</th>
                <th>University</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th style={{ width: "120px", textAlign: "center" }}>Status</th>
                <th width="120">Action</th>
              </tr>
            </thead>
            <tbody>
              {records.data && records.data.length ? (
                records.data.map((r, i) => (
                  <tr key={r.id}>
                    <td>{getSerialNumber(i)}</td>
                    <td>
                      <span className="badge badge-info">{r.category}</span>
                    </td>
                    <td>{r.university || "-"}</td>
                    <td>{r.name}</td>
                    <td>{r.phone || "-"}</td>
                    <td>{r.email || "-"}</td>
                    <td style={{ textAlign: "center" }}>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id={`status-switch-${r.id}`}
                          checked={r.is_active === 1 || r.is_active === true}
                          onChange={() => toggleStatus(r)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={`status-switch-${r.id}`}
                        >
                          <span className={`badge ${r.is_active ? 'badge-success' : 'badge-secondary'}`}>
                            {r.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="btn-group">
                        <Link
                          href={`/admin/admission-support/${r.id}/edit`}
                          className="btn btn-info btn-sm"
                          title="Edit"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>

                        <button
                          onClick={(e) => handleDelete(r.id, e)}
                          className="btn btn-dark btn-sm"
                          title="Permanently Delete"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
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
          {records.links && records.links.length > 1 && (
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
          )}
        </div>
      </div>
    </AdminLayout>
  );
}