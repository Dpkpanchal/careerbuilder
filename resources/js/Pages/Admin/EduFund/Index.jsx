// resources/js/Pages/Admin/EduFund/Index.jsx

import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ sections }) {
  return (
    <AdminLayout header="Scholarships & Education Loans">
      <Head title="Scholarships & Education Loans" />

      <div className="card">
        <div className="card-body table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Section</th>
                <th>Heading</th>
                <th>Cards</th>
                <th>Schemes</th>
                <th width="100">Action</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>
                    <span className="badge badge-info text-capitalize">{s.key}</span>
                  </td>
                  <td>
                    {s.heading_prefix} <b>{s.heading_highlight}</b>
                  </td>
                  <td>{s.cards_count}</td>
                  <td>{s.schemes_count}</td>
                  <td>
                    <Link
                      href={route("admin.eduFund.edit", s.id)}
                      className="btn btn-sm btn-info"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}