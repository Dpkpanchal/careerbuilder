import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ domains = [] }) {

  return (
    <AdminLayout header="Career Domains">
      <Head title="Career Domains" />

      {/* TOP BAR */}
      <div className="card">
        <div className="card-body d-flex justify-content-end">
          <Link
            href={route("admin.career-domains.create")}
            className="btn btn-primary"
          >
            <i className="fas fa-plus mr-1"></i> Add Career Domain
          </Link>
        </div>
      </div>

      {/* CARD GRID */}
      <div className="card mt-3">
        <div className="card-body">
          <div className="row">

            {domains.length ? domains.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>

                <div className="card shadow-sm h-100">

                 <img
                  src={item.image ? `/storage/${item.image}` : "/images/default.png"}
                  className="card-img-top"
                  style={{
                    height: 180,
                    objectFit: "contain",
                    background: "#f8f9fa"
                  }}
                />

                  <div className="card-body">

                    <h5 className="fw-bold">{item.title}</h5>

                    <p className="text-muted small">
                      {item.subtitle}
                    </p>

                    <p style={{ fontSize: 14 }}>
                      {item.details?.substring(0, 120)}...
                    </p>

                  </div>

                  <div className="card-footer d-flex justify-content-between">

                    <Link
                      href={route("admin.career-domains.edit", item.id)}
                      className="btn btn-sm btn-info"
                    >
                      Edit
                    </Link>

                   <Link
                      as="button"
                      method="delete"
                      href={route("admin.career-domains.destroy", item.id)}
                      className="btn btn-sm btn-danger"
                      onClick={(e) => {
                        if (!confirm("Are you sure you want to delete this item?")) {
                          e.preventDefault();
                        }
                      }}
                    >
                      Delete
                    </Link>

                  </div>

                </div>

              </div>
            )) : (
              <div className="col-12 text-center text-muted">
                No records found
              </div>
            )}

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}