import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ records }) {
  const handleToggleStatus = (slide) => {
    router.patch(
      route("admin.hero-slides.toggle-status", slide.id),
      {},
      { preserveScroll: true }
    );
  };

  const handleDelete = (slideId) => {
    if (confirm("Delete this slide?")) {
      router.delete(route("admin.hero-slides.destroy", slideId), {
        preserveScroll: true,
      });
    }
  };

  return (
    <AdminLayout header="Hero Slides">
      <Head title="Hero Slides" />

      {/* TOP BAR */}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-4"></div>
            <div className="col-md-8 d-flex justify-content-end">
              <Link
                href={route("admin.hero-slides.create")}
                className="btn btn-primary"
              >
                <i className="fas fa-plus mr-1"></i> Add Hero Slide
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
                <th>Image</th>
                <th>Title</th>
                <th>Sub Title</th>
                <th>Status</th>
                <th width="160">Action</th>
              </tr>
            </thead>

            <tbody>
              {records.data.length ? (
                records.data.map((slide, i) => (
                  <tr key={slide.id}>
                    <td>{records.from + i}</td>

                    {/* Image */}
                    <td>
                      {slide.img_base ? (
                        <img
                          src={`/storage/${slide.img_base}`}
                          alt="slide"
                          style={{
                            width: "80px",
                            height: "50px",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                        />
                      ) : (
                        <span className="text-muted">No Image</span>
                      )}
                    </td>

                    {/* Title */}
                    <td>
                      <strong>{slide.title}</strong>
                      <br />
                      <small className="text-muted">
                        {slide.title_gradient}
                      </small>
                    </td>

                    {/* Subtitle */}
                    <td>
                      <small>{slide.subtitle || ""}</small>
                    </td>

                   <td>
                    <span
                      className={`badge ${
                        slide.is_active ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {slide.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>


                    {/* ACTION */}
                    <td>
                      <div className="hs-action-group">
                        {/* Edit */}
                        <Link
                          href={route("admin.hero-slides.edit", slide.id)}
                          className="btn btn-primary btn-sm hs-action-btn"
                          title="Edit"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>

                        {/* Active / Inactive — NOW FUNCTIONAL */}
                        <button
                          type="button"
                          className={`btn btn-sm hs-action-btn ${
                            slide.is_active ? "btn-success" : "btn-secondary"
                          }`}
                          title={
                            slide.is_active
                              ? "Active — click to deactivate"
                              : "Inactive — click to activate"
                          }
                          onClick={() => handleToggleStatus(slide)}
                        >
                          <i
                            className={`fas ${
                              slide.is_active ? "fa-check-circle" : "fa-times-circle"
                            }`}
                          ></i>
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          className="btn btn-dark btn-sm hs-action-btn"
                          title="Delete"
                          onClick={() => handleDelete(slide.id)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-muted">
                    No slides found
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

      <style>{`
        .hs-action-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hs-action-btn {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border-radius: 6px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .hs-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </AdminLayout>
  );
}
