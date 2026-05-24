import React from "react";
import { Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function ReportShow({ report }) {
  const content = report.reportable;
  const reporter = report.reporter;

  const handleDeleteContent = () => {
    if (confirm("Are you sure you want to DELETE the reported content?")) {
      router.post(`/admin/reports/${report.id}/delete-content`);
    }
  };

  const handleBlockUser = () => {
    if (confirm("Are you sure you want to BLOCK this user?")) {
      router.post(`/admin/reports/${report.id}/block-user`);
    }
  };

  const handleIgnoreReport = () => {
    if (confirm("Are you sure you want to IGNORE this report?")) {
      router.post(`/admin/reports/${report.id}/ignore`);
    }
  };

  return (
    <AdminLayout header="Report Details">
      <div className="container-fluid">

        {/* Report Info */}
        <div className="card mb-3">
          <div className="card-header bg-light">
            <h5 className="mb-0">Report Information</h5>
          </div>

          <div className="card-body">
            <p><strong>Reason:</strong> {report.reason}</p>
            <p><strong>Details:</strong> {report.details || "N/A"}</p>
            <p>
              <strong>Reported By:</strong>{" "}
              {reporter ? reporter.name : "Unknown User"}
            </p>
            <p>
              <strong>Reported At:</strong>{" "}
              {new Date(report.created_at).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Reported Content */}
        <div className="card mb-3">
          <div className="card-header bg-light">
            <h5 className="mb-0">Reported Content</h5>
          </div>

          <div className="card-body">
            {content ? (
              <>
                <p>
                  <strong>Content Type:</strong>{" "}
                  {report.reportable_type.replace("App\\Models\\", "")}
                </p>

                {/* Question */}
                {content.title && (
                  <>
                    <p><strong>Title:</strong></p>
                    <div className="border p-2 rounded bg-light">
                      {content.title}
                    </div>
                  </>
                )}

                {/* Body / Answer / Comment */}
                {content.body && (
                  <>
                    <p className="mt-2"><strong>Content:</strong></p>
                    <div className="border p-2 rounded bg-light">
                      {content.body}
                    </div>
                  </>
                )}

                {/* Owner */}
                {content.user && (
                  <p className="mt-3">
                    <strong>Content Owner:</strong>{" "}
                    {content.user.name} ({content.user.email})
                  </p>
                )}
              </>
            ) : (
              <p className="text-danger">
                ❌ This content has already been deleted.
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card">
          <div className="card-body d-flex gap-2 flex-wrap">

            <button
              className="btn btn-danger"
              onClick={handleDeleteContent}
              disabled={!content}
            >
              🗑 Delete Content
            </button>

            <button
              className="btn btn-warning"
              onClick={handleBlockUser}
              disabled={!content || !content.user}
            >
              🚫 Block User
            </button>

            <button
              className="btn btn-secondary"
              onClick={handleIgnoreReport}
            >
              ✅ Ignore Report
            </button>

            <Link
              href="/admin/reports"
              className="btn btn-light"
            >
              ← Back to Reports
            </Link>

          </div>
        </div>

      </div>
    </AdminLayout>
  );
}
