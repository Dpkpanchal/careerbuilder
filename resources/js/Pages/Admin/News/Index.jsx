import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

const CATEGORY_MAP = {
  all: "All",
  government: "Government Announcements",
  scholarships: "Scholarships & Financial Aid",
  exams: "Exams & Results",
  career: "Career Guidance",
};

export default function Index({ news = [], filters = {} }) {

  const handleCategory = (e) => {
    router.get(
      "/admin/news",
      { category: e.target.value },
      { preserveState: true }
    );
  };

  return (
    <AdminLayout header="News Management">
      <Head title="News" />

      <div className="container-fluid">

        {/* TOP BAR */}
     <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">

          {/* LEFT: FILTER */}
          <div className="col-md-4">
            <select
              className="form-control"
              value={filters.category || ""}
              onChange={(e) =>
                router.get(
                  "/admin/news",
                  { category: e.target.value },
                  { preserveState: true }
                )
              }
            >
              <option value="">All</option>
              <option value="government">Government</option>
              <option value="scholarships">Scholarships</option>
              <option value="exams">Exams</option>
              <option value="career">Career</option>
            </select>
          </div>

          {/* RIGHT: ADD BUTTON */}
          <div className="col-md-8 d-flex justify-content-end">
            <Link
              href={route("admin.news.create")}
              className="btn btn-primary"
            >
              <i className="fas fa-plus mr-1"></i> Add News
            </Link>
          </div>

        </div>
      </div>
    </div>

        {/* CARD GRID */}
        <div className="row">

          {news.length ? news.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>

              <div className="card news-card h-100">

                <div className="card-body">

                  {/* CATEGORY BADGE */}
                  <span className="badge badge-info mb-2">
                    {CATEGORY_MAP[item.category]}
                  </span>

                  {/* TITLE */}
                  <h5 className="fw-semibold line-clamp-2">
                    {item.title}
                  </h5>

                  {/* DATE */}
                  <small className="text-muted d-block mb-2">
                    {item.date}
                  </small>

                  {/* DESCRIPTION */}
                  <p className="text-muted small line-clamp-3">
                    {item.description}
                  </p>

                </div>

                {/* ACTIONS */}
                <div className="card-footer d-flex justify-content-between">

                  <Link
                    href={route("admin.news.edit", item.id)}
                    className="btn btn-sm btn-info"
                  >
                    Edit
                  </Link>

                  <Link
                    href={route("admin.news.destroy", item.id)}
                    method="delete"
                    as="button"
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      if (!confirm("Delete this news?")) {
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
            <div className="col-12 text-center text-muted py-5">
              No news found
            </div>
          )}

        </div>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .news-card {
          border-radius: 16px;
          transition: 0.3s;
          border: 1px solid #eee;
        }

        .news-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

    </AdminLayout>
  );
}
