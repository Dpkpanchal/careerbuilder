import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function SubcategoriesIndex({ subCategories, filters = {}, categories = [] }) {

    const { data, setData } = useForm({
        search: filters.search || "",
        category_id: filters.category_id || "",
        sort_field: filters.sort_field || "created_at",
        sort_direction: filters.sort_direction || "desc",
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        router.get('/admin/subcategories', data, { preserveState: true, replace: true });
    };

    const handleReset = () => {
        setData({
            search: "",
            category_id: "",
            sort_field: "created_at",
            sort_direction: "desc",
        });

        router.get('/admin/subcategories', {}, { preserveState: true, replace: true });
    };

    const handleSort = (field) => {
        const direction =
            data.sort_field === field && data.sort_direction === "asc"
                ? "desc" : "asc";

        setData({ ...data, sort_field: field, sort_direction: direction });

        router.get(
            "/admin/subcategories",
            { ...data, sort_field: field, sort_direction: direction },
            { preserveState: true, replace: true }
        );
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return "fas fa-sort";
        return data.sort_direction === "asc" ? "fas fa-sort-up" : "fas fa-sort-down";
    };

    return (
        <AdminLayout header="Subcategories Management">
            <Head title="Subcategories" />

            <div className="container-fluid">

                {/* Filters */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Filters</h3>

                          <div className="card-tools">
                            <button
                                type="button"
                                className="btn btn-tool"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <i className={`fas ${showFilters ? 'fa-minus' : 'fa-plus'}`}></i>
                            </button>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="card-body">
                            <div className="row">

                                {/* Search */}
                                <div className="col-md-3">
                                    <label>Search</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.search}
                                        onChange={(e) => setData("search", e.target.value)}
                                        placeholder="Search subcategory..."
                                    />
                                </div>

                                {/* Category Filter */}
                                <div className="col-md-3">
                                    <label>Category</label>
                                    <select
                                        className="form-control"
                                        value={data.category_id}
                                        onChange={(e) => setData("category_id", e.target.value)}
                                    >
                                        <option value="">All Categories</option>
                                        {categories.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Sort Field */}
                                <div className="col-md-3">
                                    <label>Sort By</label>
                                    <select
                                        className="form-control"
                                        value={data.sort_field}
                                        onChange={(e) => setData("sort_field", e.target.value)}
                                    >
                                        <option value="created_at">Created</option>
                                        <option value="name">Name</option>
                                        <option value="slug">Slug</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="btn btn-primary" onClick={handleFilter}>
                                    Apply Filters
                                </button>
                                <button className="btn btn-default ml-2" onClick={handleReset}>
                                    Reset
                                </button>
                                <span className="ml-3 text-muted">
                                    Total: {subCategories.total}
                                </span>
                            </div>
                        </div>
                    )}
                </div>



                {/* Table */}
                <div className="card mt-3">
                  
                      <div className="card-header">
                        <h3 className="card-title">Subcategory List</h3>
                        <div className="card-tools">
                           <Link href="/admin/subcategories/create" className="btn btn-primary btn-sm">
                                <i className="fas fa-plus"></i> Add Subcategory
                            </Link>
                        </div>
                    </div>





                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>
                                            ID <i className={getSortIcon("id")}></i>
                                        </th>
                                        <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
                                            Name <i className={getSortIcon("name")}></i>
                                        </th>
                                        <th>Category</th>
                                        <th onClick={() => handleSort("slug")} style={{ cursor: "pointer" }}>
                                            Slug <i className={getSortIcon("slug")}></i>
                                        </th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {subCategories.data.length > 0 ? (
                                        subCategories.data.map(sc => (
                                            <tr key={sc.id}>
                                                <td>{sc.id}</td>
                                                <td>{sc.name}</td>
                                                <td>{sc.category ? sc.category.name : '--'}</td>
                                                <td>{sc.slug}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <Link
                                                            href={`/admin/subcategories/${sc.id}/edit`}
                                                            className="btn btn-info btn-sm"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>
                                                        <Link
                                                            href={`/admin/subcategories/${sc.id}`}
                                                            method="delete"
                                                            as="button"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={(e) => {
                                                                if (!confirm("Delete this subcategory?")) {
                                                                    e.preventDefault();
                                                                }
                                                            }}
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center text-muted py-3">
                                                No subcategories found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="mt-3 d-flex justify-content-between">
                            <div className="text-muted">
                                Showing {subCategories.from}–{subCategories.to} of {subCategories.total}
                            </div>

                            <ul className="pagination mb-0">
                                {subCategories.links.map((link, index) => (
                                    <li key={index} className={`page-item ${link.active ? "active" : ""}`}>
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
                </div>

            </div>
        </AdminLayout>
    );
}
