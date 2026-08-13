import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm, Link, router } from "@inertiajs/react";

export default function Edit({ news, categories = [] }) {

  const { data, setData, put, processing, errors } = useForm({
    title: news.title || "",
    category_id: news.category_id || "",
    date: news.date || "",
    description: news.description || "",
  });

  const submit = (e) => {
    e.preventDefault();

    put(route("admin.news.update", news.id), {
      preserveScroll: true,
    });
  };

  // Quick add-category modal state
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const categoryForm = useForm({ name: "" });

  const submitCategory = (e) => {
    e.preventDefault();
    categoryForm.post(route("admin.news-categories.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setShowCategoryModal(false);
        categoryForm.reset();
        router.reload({ only: ["categories"] });
      },
    });
  };

  return (
    <AdminLayout header="Edit News">
      <Head title="Edit News" />

      <div className="card">
        <div className="card-body">

          <form onSubmit={submit}>
            <div className="row">

              {/* TITLE */}
              <div className="col-md-6 mb-3">
                <label>Title</label>
                <input
                  className="form-control"
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                />
                {errors.title && <small className="text-danger">{errors.title}</small>}
              </div>

              {/* CATEGORY */}
              <div className="col-md-6 mb-3">
                <label className="d-flex justify-content-between align-items-center">
                  Category
                  <button
                    type="button"
                    className="btn btn-sm btn-link p-0"
                    onClick={() => setShowCategoryModal(true)}
                  >
                    + Add new
                  </button>
                </label>
                <select
                  className="form-control"
                  value={data.category_id}
                  onChange={(e) => setData("category_id", e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {errors.category_id && <small className="text-danger">{errors.category_id}</small>}
              </div>

              {/* DATE */}
              <div className="col-md-6 mb-3">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={data.date}
                  onChange={(e) => setData("date", e.target.value)}
                />
              </div>

              {/* DESCRIPTION */}
              <div className="col-12 mb-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  rows="5"
                  value={data.description}
                  onChange={(e) => setData("description", e.target.value)}
                />
              </div>

            </div>

            <Link
              href={route("admin.news.index")}
              className="btn btn-light mr-2"
            >
              Cancel
            </Link>

            <button className="btn btn-primary" disabled={processing}>
              {processing ? "Updating..." : "Update"}
            </button>

          </form>

        </div>
      </div>

      {/* QUICK ADD CATEGORY MODAL */}
      {showCategoryModal && (
        <div
          className="modal d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => setShowCategoryModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Category</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCategoryModal(false)}
                ></button>
              </div>
              <form onSubmit={submitCategory}>
                <div className="modal-body">
                  <label>Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={categoryForm.data.name}
                    onChange={(e) => categoryForm.setData("name", e.target.value)}
                    autoFocus
                  />
                  {categoryForm.errors.name && (
                    <small className="text-danger">{categoryForm.errors.name}</small>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowCategoryModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={categoryForm.processing}
                  >
                    {categoryForm.processing ? "Adding..." : "Add Category"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </AdminLayout>
  );
}