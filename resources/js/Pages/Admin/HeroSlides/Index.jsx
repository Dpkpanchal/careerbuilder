import React from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ records }) {
  return (
    <AdminLayout header="Hero Slides">
      <Head title="Hero Slides" />

      {/* TOP BAR (NO FILTER, ONLY BUTTON) */}
      <div className="card">
        <div className="card-body">
          <div className="row align-items-center">

            {/* LEFT (EMPTY / CAN ADD FILTER LATER) */}
            <div className="col-md-4"></div>

            {/* RIGHT: ADD BUTTON */}
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

                    {/* CTA */}
                    <td>
                  
                      <small>{slide.subtitle || ""}</small>
                    </td>

                   

                    {/* ACTION */}
                    <td>
                      <Link
                        href={route("admin.hero-slides.edit", slide.id)}
                        className="btn btn-sm btn-info"
                      >
                        Edit
                      </Link>

                      <Link
                        as="button"
                        method="delete"
                        href={route("admin.hero-slides.destroy", slide.id)}
                        className="btn btn-sm btn-danger ml-1"
                        onClick={(e) =>
                          !confirm("Delete this slide?") &&
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
    </AdminLayout>
  );
}