import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { router } from "@inertiajs/react";

const ForumCategoryEdit = ({ category }) => {

    const { data, setData, post, processing, errors } = useForm({
        name: category.name || '',
        slug: category.slug || '',
        category_icon: category.category_icon || '', // UPDATED
    });

 const submit = (e) => {
    e.preventDefault();

    router.post(
        `/admin/forum-categories/${category.id}`,
        {
            ...data,
            _method: "PUT",  // tells Laravel it's a PUT request
        },
        {
            preserveScroll: true,
        }
    );
};

    return (
        <AdminLayout header={`Edit Forum Category`}>
            <Head title={`Edit Forum Category - ${category.name}`} />

            <div className="container-fluid">
                <div className="row">

                    {/* LEFT COLUMN - FORM */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit: {category.name}</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* Name */}
                                    <div className="form-group">
                                        <label htmlFor="name">Forum Category Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.name && (
                                            <div className="invalid-feedback">{errors.name}</div>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div className="form-group mt-3">
                                        <label htmlFor="slug">Slug (optional)</label>
                                        <input
                                            type="text"
                                            id="slug"
                                            value={data.slug}
                                            onChange={(e) => setData('slug', e.target.value)}
                                            className={`form-control ${errors.slug ? 'is-invalid' : ''}`}
                                            placeholder="Auto-generated if left empty"
                                        />
                                        {errors.slug && (
                                            <div className="invalid-feedback">{errors.slug}</div>
                                        )}
                                        <small className="text-muted">
                                            Used in URLs. Must be unique.
                                        </small>
                                    </div>

                                    {/* Category Icon */}
                                    <div className="form-group mt-3">
                                        <label htmlFor="category_icon">Category Icon</label>
                                        <input
                                            type="text"
                                            id="category_icon"
                                            value={data.category_icon}
                                            onChange={(e) => setData('category_icon', e.target.value)}
                                            className={`form-control ${errors.category_icon ? 'is-invalid' : ''}`}
                                            placeholder="Example: 🎓 or fa-solid fa-laptop-code"
                                        />
                                        {errors.category_icon && (
                                            <div className="invalid-feedback">{errors.category_icon}</div>
                                        )}
                                        <small className="text-muted">
                                            You can use emoji or FontAwesome class name.
                                        </small>
                                    </div>

                                    {/* Buttons */}
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary px-4"
                                            disabled={processing}
                                        >
                                            {processing ? 'Updating...' : 'Update Category'}
                                        </button>

                                        <Link
                                            href="/admin/forum-categories"
                                            className="btn btn-secondary px-4 ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - INFO + DELETE */}
                    <div className="col-md-4">

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Category Details</h3>
                            </div>

                            <div className="card-body">
                                <p><strong>ID:</strong> {category.id}</p>
                                <p><strong>Created:</strong> {new Date(category.created_at).toLocaleString()}</p>
                                <p><strong>Last Updated:</strong> {new Date(category.updated_at).toLocaleString()}</p>
                            </div>
                        </div>

                        {/* Delete Zone */}
                        <div className="card mt-3">
                            <div className="card-header bg-danger text-white">
                                <h3 className="card-title">Danger Zone</h3>
                            </div>

                            <div className="card-body">
                                <p className="text-muted">Deleting this category will remove related data. This action cannot be undone.</p>

                                <Link
                                    href={`/admin/forum-categories/${category.id}`}
                                    method="delete"
                                    as="button"
                                    className="btn btn-danger btn-block"
                                    onClick={(e) => {
                                        if (!confirm('Are you sure you want to delete this category?')) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <i className="fas fa-trash mr-2"></i>Delete Category
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </AdminLayout>
    );
};

export default ForumCategoryEdit;
