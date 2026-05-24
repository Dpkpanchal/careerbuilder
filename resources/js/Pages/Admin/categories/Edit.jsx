import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const CategoryEdit = ({ category }) => {

    const { data, setData, put, processing, errors } = useForm({
        name: category.name || '',
        slug: category.slug || '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/categories/${category.id}`);
    };

    return (
        <AdminLayout header={`Edit Category`}>
            <Head title="Edit Category" />

            <div className="container-fluid">
                <div className="row">

                    {/* LEFT COLUMN - FORM */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit Category: {category.name}</h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* Name */}
                                    <div className="form-group">
                                        <label htmlFor="name">Category Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            required
                                        />
                                        {errors.name && (
                                            <div className="invalid-feedback">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div className="form-group mt-3">
                                        <label htmlFor="slug">Slug</label>
                                        <input
                                            type="text"
                                            id="slug"
                                            value={data.slug}
                                            onChange={(e) => setData('slug', e.target.value)}
                                            className={`form-control ${errors.slug ? 'is-invalid' : ''}`}
                                            placeholder="Auto-generated or enter manually"
                                        />
                                        {errors.slug && (
                                            <div className="invalid-feedback">
                                                {errors.slug}
                                            </div>
                                        )}
                                        <small className="text-muted">
                                            Slug is used in URLs. Must be unique.
                                        </small>
                                    </div>

                                    {/* Buttons */}
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? 'Updating...' : 'Update Category'}
                                        </button>

                                        <Link
                                            href="/admin/categories"
                                            className="btn btn-default ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - INFO + DANGER ZONE */}
                    <div className="col-md-4">

                        {/* Category Info */}
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Category Information</h3>
                            </div>

                            <div className="card-body">
                                <p><strong>ID:</strong> {category.id}</p>
                                <p><strong>Created:</strong> {new Date(category.created_at).toLocaleDateString()}</p>
                                <p><strong>Last Updated:</strong> {new Date(category.updated_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="card mt-3">
                            <div className="card-header bg-danger">
                                <h3 className="card-title text-white">Danger Zone</h3>
                            </div>

                            <div className="card-body">
                                <p className="text-muted">
                                    Deleting a category will remove all related menu items and tabs.
                                    This action cannot be undone.
                                </p>

                                <Link
                                    href={`/admin/categories/${category.id}`}
                                    method="delete"
                                    as="button"
                                    className="btn btn-danger btn-block"
                                    onClick={(e) => {
                                        if (!confirm('Are you sure you want to delete this category?')) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <i className="fas fa-trash mr-2"></i>
                                    Delete Category
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </AdminLayout>
    );
};

export default CategoryEdit;
