import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const CategoryCreate = () => {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        slug: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/categories');   // ✅ No CSRF needed (Inertia handles it)
    };

    return (
        <AdminLayout header="Create Category">
            <Head title="Create Category" />

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Add New Category</h3>
                            </div>

                            <div className="card-body">

                                <form onSubmit={submit}>

                                    {/* Category Name */}
                                    <div className="form-group">
                                        <label htmlFor="name">Category Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            placeholder="Enter category name"
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
                                        <label htmlFor="slug">Slug (optional)</label>
                                        <input
                                            type="text"
                                            id="slug"
                                            value={data.slug}
                                            onChange={(e) => setData('slug', e.target.value)}
                                            className="form-control"
                                            placeholder="auto-generated if left empty"
                                        />
                                    </div>

                                    {/* Submit Buttons */}
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? 'Saving...' : 'Save Category'}
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

                    {/* Right Side Tips */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Quick Tips</h3>
                            </div>

                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-lightbulb text-warning mr-2"></i> Category name must be unique</li>
                                    <li><i className="fas fa-lightbulb text-warning mr-2"></i> Slug auto-generates from name</li>
                                    <li><i className="fas fa-lightbulb text-warning mr-2"></i> Used for menu and navigation</li>
                                    <li><i className="fas fa-lightbulb text-warning mr-2"></i> Keep category names short</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </AdminLayout>
    );
};

export default CategoryCreate;
