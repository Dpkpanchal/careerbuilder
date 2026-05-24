
import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";



export default function Index({ items = [] }) {

const TYPE_MAP = {
  fact_card: "Fact Card",
  scheme: "Scheme",
};

  return (
    <AdminLayout header="Loan & Schemes">
      <Head title="Loan Sections" />

      {/* TOP BAR */}
      <div className="card">
        <div className="card-body d-flex justify-content-end">
          <Link
            href={route("admin.loan-sections.create")}
            className="btn btn-primary"
          >
            <i className="fas fa-plus mr-1"></i> Add Item
          </Link>
        </div>
      </div>

      {/* TABLE */}
      <div className="card mt-3">
        <div className="card-body table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Title</th>
                <th>Short</th>
                <th>Order</th>
                <th width="140">Action</th>
              </tr>
            </thead>

            <tbody>
              {items.length ? (
                items.map((item, i) => (
                  <tr key={item.id}>
                    <td>{i + 1}</td>

               
                   <td>
                    <span
                      className={`badge ${
                        item.type === "fact_card"
                          ? "badge-primary"
                          : "badge-success"
                      }`}
                    >
                      {TYPE_MAP[item.type] || item.type}
                    </span>
                  </td>

                    <td>{item.title || "-"}</td>
                    <td>{item.short || "-"}</td>
                    <td>{item.order}</td>

                    <td>
                      <Link
                        href={route("admin.loan-sections.edit", item.id)}
                        className="btn btn-sm btn-info"
                      >
                        Edit
                      </Link>

                      <Link
                        as="button"
                        method="delete"
                        href={route("admin.loan-sections.destroy", item.id)}
                        className="btn btn-sm btn-danger ml-1"
                        onClick={(e) =>
                          !confirm("Delete this item?") &&
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
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}