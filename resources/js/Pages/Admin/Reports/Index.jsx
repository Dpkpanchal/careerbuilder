import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";

export default function ReportsIndex({ reports }) {
  const badge = (status) => {
    if (status === "pending") return "badge bg-warning";
    if (status === "action_taken") return "badge bg-success";
    if (status === "ignored") return "badge bg-secondary";
    return "badge bg-light";
  };

  return (
    <AdminLayout header="Reports">
      <div className="card">
        <div className="card-body table-responsive">

          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Reason</th>
                <th>Preview</th>
                <th>Reporter</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {reports.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center text-muted">
                    No reports found
                  </td>
                </tr>
              )}

              {reports.map((report, i) => (
                <tr key={report.id}>
                  <td>{i + 1}</td>
                  <td>{report.type}</td>
                  <td>{report.reason}</td>
                  <td>{report.content_preview || "—"}</td>
                  <td>{report.reporter || "Unknown"}</td>
                  <td>
                    <span className={badge(report.status)}>
                      {report.status.replace("_", " ").toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <Link
                      href={`/admin/reports/${report.id}`}
                      className="btn btn-sm btn-primary"
                    >
                      View
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
