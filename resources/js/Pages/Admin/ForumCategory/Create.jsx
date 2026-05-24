import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const ForumCategoryCreate = () => {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        category_icon: '', // <-- Updated field
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/forum-categories');
    };

    return (
        <AdminLayout header="Create Forum Category">
            <Head title="Create Forum Category" />

            <div className="container-fluid">
                <div className="row">

                    {/* Left Column - Form */}
                    <div className="col-md-8">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <h3 className="card-title">Add New Forum Category</h3>
                            </div>

                            <div className="card-body">

                                <form onSubmit={submit}>

                                    {/* Name */}
                                    <div className="form-group">
                                        <label htmlFor="name" className="fw-semibold">Category Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            placeholder="Example: Programming, NEET, IELTS"
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
                                        <label htmlFor="slug" className="fw-semibold">Slug (Optional)</label>
                                        <input
                                            type="text"
                                            id="slug"
                                            value={data.slug}
                                            onChange={(e) => setData('slug', e.target.value)}
                                            className={`form-control ${errors.slug ? 'is-invalid' : ''}`}
                                            placeholder="Auto-generated if left empty"
                                        />

                                        {errors.slug && (
                                            <div className="invalid-feedback">
                                                {errors.slug}
                                            </div>
                                        )}
                                    </div>

                                    {/* Category Icon */}
                                    <div className="form-group mt-3">
                                        <label htmlFor="category_icon" className="fw-semibold">Category Icon</label>
                                        <input
                                            type="text"
                                            id="category_icon"
                                            value={data.category_icon}
                                            onChange={(e) => setData('category_icon', e.target.value)}
                                            className={`form-control ${errors.category_icon ? 'is-invalid' : ''}`}
                                            placeholder="e.g., 🎓 or fa-solid fa-graduation-cap"
                                        />

                                        {errors.category_icon && (
                                            <div className="invalid-feedback">
                                                {errors.category_icon}
                                            </div>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="form-group mt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary px-4"
                                            disabled={processing}
                                        >
                                            {processing ? 'Saving...' : 'Save Category'}
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

                    {/* Right Column – Tips */}
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <h3 className="card-title">Tips</h3>
                            </div>

                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-check text-success mr-2"></i> Name must be unique</li>
                                    <li><i className="fas fa-robot text-success mr-2"></i> Slug auto-generates from name</li>
                                    <li><i className="fas fa-icons text-success mr-2"></i> You can use emojis or FontAwesome class names for icons</li>
                                    <li><i className="fas fa-layer-group text-success mr-2"></i> Categories help group discussions properly</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default ForumCategoryCreate;
