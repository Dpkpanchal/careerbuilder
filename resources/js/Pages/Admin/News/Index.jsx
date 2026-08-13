import React, { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function Index({ news = [], categories = [], filters = {} }) {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const categoryForm = useForm({
    name: "",
  });

  const openAddCategory = () => {
    setEditingCategory(null);
    categoryForm.reset();
    categoryForm.clearErrors();
    setShowCategoryModal(true);
  };

  const openEditCategory = (cat) => {
    setEditingCategory(cat);
    categoryForm.setData("name", cat.name);
    categoryForm.clearErrors();
    setShowCategoryModal(true);
  };

  const submitCategory = (e) => {
    e.preventDefault();

    if (editingCategory) {
      categoryForm.patch(route("admin.news-categories.update", editingCategory.id), {
        preserveScroll: true,
        onSuccess: () => {
          setShowCategoryModal(false);
          categoryForm.reset();
        },
      });
    } else {
      categoryForm.post(route("admin.news-categories.store"), {
        preserveScroll: true,
        onSuccess: () => {
          setShowCategoryModal(false);
          categoryForm.reset();
        },
      });
    }
  };

  const deleteCategory = (cat) => {
    if (confirm(`Delete category "${cat.name}"?`)) {
      router.delete(route("admin.news-categories.destroy", cat.id), {
        preserveScroll: true,
      });
    }
  };

  // Toggle news active/inactive
  const handleToggleStatus = (item) => {
    if (!confirm(`Are you sure you want to ${item.is_active ? 'deactivate' : 'activate'} this news?`)) {
      return;
    }

    router.patch(
      route("admin.news.toggle-status", item.id),
      { is_active: !item.is_active },
      { preserveScroll: true }
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
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-8 d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={openAddCategory}
                >
                  <i className="fas fa-tags mr-1"></i> Manage Categories
                </button>
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
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge badge-info">
                      {item.category?.name || "Uncategorized"}
                    </span>

                    {/* Status Badge - click to toggle */}
                    <span
                      role="button"
                      onClick={() => handleToggleStatus(item)}
                      className={`badge ${item.is_active ? 'badge-success' : 'badge-secondary'}`}
                      style={{ cursor: "pointer" }}
                      title={item.is_active ? "Active — click to deactivate" : "Inactive — click to activate"}
                    >
                      <i className={`fas ${item.is_active ? 'fa-check-circle' : 'fa-times-circle'} mr-1`}></i>
                      {item.is_active ? "Active" : "Inactive"}
                    </span>
                  </div>

                  <h5 className="fw-semibold line-clamp-2">
                    {item.title}
                  </h5>

                  <small className="text-muted d-block mb-2">
                    <i className="far fa-calendar-alt mr-1"></i> {item.date}
                  </small>

                  <p className="text-muted small line-clamp-3 flex-grow-1">
                    {item.description}
                  </p>
                </div>

                <div className="card-footer d-flex justify-content-between align-items-center">
                  <Link
                    href={route("admin.news.edit", item.id)}
                    className="btn btn-sm btn-info"
                  >
                    <i className="fas fa-edit"></i> Edit
                  </Link>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (confirm("Are you sure you want to permanently delete this news?")) {
                        router.delete(route("admin.news.destroy", item.id), {
                          preserveScroll: true,
                        });
                      }
                    }}
                    className="btn btn-sm btn-dark"
                    style={{ marginLeft: "auto" }}
                  >
                    <i className="fas fa-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-12 text-center text-muted py-5">
              <i className="fas fa-newspaper fa-3x mb-3 d-block"></i>
              <p>No news found</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {news.links && news.links.length > 1 && (
          <div className="d-flex justify-content-end mt-3">
            <nav>
              <ul className="pagination mb-0">
                {news.links.map((link, i) => (
                  <li
                    key={i}
                    className={`page-item ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                  >
                    <Link
                      href={link.url || '#'}
                      className="page-link"
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* CATEGORY MANAGEMENT MODAL */}
      {showCategoryModal && (
        <div
          className="modal d-block"
          style={{ background: "rgba(0,0,0,0.5)", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}
          onClick={() => setShowCategoryModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "500px", margin: "1.75rem auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between align-items-center">
                <h5 className="modal-title">Manage Categories</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCategoryModal(false)}
                  style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <form onSubmit={submitCategory} className="d-flex gap-2 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category name"
                    value={categoryForm.data.name}
                    onChange={(e) => categoryForm.setData("name", e.target.value)}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={categoryForm.processing}
                  >
                    {editingCategory ? "Update" : "Add"}
                  </button>
                  {editingCategory && (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        setEditingCategory(null);
                        categoryForm.reset();
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </form>
                {categoryForm.errors.name && (
                  <div className="text-danger small mb-3">
                    {categoryForm.errors.name}
                  </div>
                )}

                <ul className="list-group">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>{cat.name}</span>
                      <div className="d-flex gap-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-info"
                          onClick={() => openEditCategory(cat)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteCategory(cat)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </li>
                  ))}
                  {categories.length === 0 && (
                    <li className="list-group-item text-muted text-center">
                      No categories yet
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .news-card {
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-color: #dee2e6;
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
        .gap-2 {
          gap: 0.5rem;
        }
        .card-footer {
          background: #f8f9fa;
          border-top: 1px solid #e9ecef;
          padding: 0.75rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .badge-success {
          background-color: #28a745;
          color: #fff;
        }
        .badge-secondary {
          background-color: #6c757d;
          color: #fff;
        }
        .badge-info {
          background-color: #17a2b8;
          color: #fff;
        }
        .btn-close {
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .btn-close:hover {
          opacity: 1;
        }
        .modal-header {
          border-bottom: 1px solid #dee2e6;
          padding: 1rem;
        }
        .modal-body {
          padding: 1rem;
        }
        .modal-dialog {
          max-width: 500px;
          margin: 1.75rem auto;
        }
        .modal-content {
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        .flex-grow-1 {
          flex: 1 1 auto;
        }
        .card-body {
          padding: 1.25rem;
        }
        .fw-semibold {
          font-weight: 600;
        }
        .text-muted {
          color: #6c757d !important;
        }
        .small {
          font-size: 0.875rem;
        }
        .d-flex {
          display: flex;
        }
        .justify-content-between {
          justify-content: space-between;
        }
        .align-items-center {
          align-items: center;
        }
        .align-items-start {
          align-items: flex-start;
        }
        .flex-column {
          flex-direction: column;
        }
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        .mb-3 {
          margin-bottom: 1rem;
        }
        .mb-4 {
          margin-bottom: 1.5rem;
        }
        .mt-3 {
          margin-top: 1rem;
        }
        .mr-1 {
          margin-right: 0.25rem;
        }
        .ml-2 {
          margin-left: 0.5rem;
        }
        .py-5 {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        .text-center {
          text-align: center;
        }
        .btn-sm {
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        .btn-dark {
          background-color: #343a40;
          border-color: #343a40;
          color: #fff;
        }
        .btn-dark:hover {
          background-color: #23272b;
          border-color: #1d2124;
          color: #fff;
        }
        .btn-info {
          background-color: #17a2b8;
          border-color: #17a2b8;
          color: #fff;
        }
        .btn-info:hover {
          background-color: #138496;
          border-color: #117a8b;
          color: #fff;
        }
        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
          color: #fff;
        }
        .btn-primary:hover {
          background-color: #0069d9;
          border-color: #0062cc;
          color: #fff;
        }
        .btn-outline-secondary {
          color: #6c757d;
          border-color: #6c757d;
        }
        .btn-outline-secondary:hover {
          background-color: #6c757d;
          color: #fff;
        }
        .btn-outline-info {
          color: #17a2b8;
          border-color: #17a2b8;
        }
        .btn-outline-info:hover {
          background-color: #17a2b8;
          color: #fff;
        }
        .btn-outline-danger {
          color: #dc3545;
          border-color: #dc3545;
        }
        .btn-outline-danger:hover {
          background-color: #dc3545;
          color: #fff;
        }
        .fa-3x {
          font-size: 3em;
        }
        .d-block {
          display: block !important;
        }
        .gap-2 > * + * {
          margin-left: 0.5rem;
        }
        .card-footer .btn-dark {
          margin-left: auto;
        }
      `}</style>
    </AdminLayout>
  );
}