import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function ForumCategoryIndex({ categories, filters }) {

    const { data, setData } = useForm({
        search: filters.search || '',
        sort_field: filters.sort_field || 'created_at',
        sort_direction: filters.sort_direction || 'desc',
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        router.get('/admin/forum-categories', data, {
            preserveState: true,
            replace: true,
        });
    };

    const handleReset = () => {
        setData({
            search: '',
            sort_field: 'created_at',
            sort_direction: 'desc',
        });

        router.get('/admin/forum-categories', {}, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSort = (field) => {
        const newDirection =
            data.sort_field === field && data.sort_direction === 'asc' ? 'desc' : 'asc';

        setData({ ...data, sort_field: field, sort_direction: newDirection });

        router.get(
            '/admin/forum-categories',
            { ...data, sort_field: field, sort_direction: newDirection },
            { preserveState: true, replace: true }
        );
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return 'fas fa-sort';
        return data.sort_direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
    };

    return (
        <AdminLayout header="Forum Category Management">
            <Head title="Forum Categories" />

            <div className="container-fluid">

                {/* Filters Card */}
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
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <label>Search</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={data.search}
                                            placeholder="Search forum category..."
                                            onChange={(e) => setData('search', e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
                                        />
                                    </div>
                                </div>

                                {/* Sort */}
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Sort By</label>
                                        <select
                                            className="form-control"
                                            value={data.sort_field}
                                            onChange={(e) =>
                                                setData('sort_field', e.target.value)
                                            }
                                        >
                                            <option value="created_at">Created At</option>
                                            <option value="name">Name</option>
                                            <option value="slug">Slug</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={handleFilter}
                                            >
                                                <i className="fas fa-filter mr-1"></i>
                                                Apply Filters
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-default ml-2"
                                                onClick={handleReset}
                                            >
                                                <i className="fas fa-redo mr-1"></i>
                                                Reset
                                            </button>
                                        </div>

                                        <div className="text-muted">
                                            Total Results: {categories.total}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Forum Category Table */}
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">Forum Category List</h3>
                        <div className="card-tools">
                            <Link
                                href="/admin/forum-categories/create"
                                className="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus"></i> Add Forum Category
                            </Link>
                        </div>
                    </div>

                    <div className="card-body">

                        {/* If filters applied */}
                        {filters.search && (
                            <div className="mb-3">
                                <small className="text-muted">Active Filter:</small>
                                <span className="badge badge-info ml-2">
                                    Search: "{filters.search}"
                                    <button
                                        className="btn btn-xs btn-light ml-1"
                                        onClick={() => {
                                            setData('search', '');
                                            handleFilter();
                                        }}
                                    >
                                        ×
                                    </button>
                                </span>
                            </div>
                        )}

                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th style={{ cursor: 'pointer', width: '80px' }}
                                            onClick={() => handleSort('id')}>
                                            ID <i className={getSortIcon('id')}></i>
                                        </th>

                                        <th style={{ cursor: 'pointer' }}
                                            onClick={() => handleSort('name')}>
                                            Name <i className={getSortIcon('name')}></i>
                                        </th>

                                        <th style={{ cursor: 'pointer' }}
                                            onClick={() => handleSort('slug')}>
                                            Slug <i className={getSortIcon('slug')}></i>
                                        </th>

                                        <th style={{ width: '120px' }}>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {categories.data.length > 0 ? (
                                        categories.data.map((cat) => (
                                            <tr key={cat.id}>
                                                <td>{cat.id}</td>
                                                <td>{cat.name}</td>
                                                <td>{cat.slug}</td>

                                                <td>
                                                    <div className="btn-group">
                                                        <Link
                                                            href={`/admin/forum-categories/${cat.id}/edit`}
                                                            className="btn btn-info btn-sm"
                                                            title="Edit"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>

                                                        <Link
                                                            href={`/admin/forum-categories/${cat.id}`}
                                                            method="delete"
                                                            as="button"
                                                            className="btn btn-danger btn-sm"
                                                            title="Delete"
                                                            onClick={(e) => {
                                                                if (!confirm('Delete this forum category?'))
                                                                    e.preventDefault();
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
                                            <td colSpan="4" className="text-center py-4">
                                                <i className="fas fa-folder-open fa-2x text-muted mb-2"></i>
                                                <p className="text-muted">No forum categories found.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {categories.links && categories.data.length > 0 && (
                            <div className="mt-3 d-flex justify-content-between align-items-center">
                                <div className="text-muted">
                                    Showing {categories.from} to {categories.to} of {categories.total} entries
                                </div>

                                <nav>
                                    <ul className="pagination mb-0">
                                        {categories.links.map((link, index) => (
                                            <li
                                                key={index}
                                                className={`page-item ${
                                                    link.active ? 'active' : ''
                                                } ${!link.url ? 'disabled' : ''}`}
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
                </div>
            </div>
        </AdminLayout>
    );
}
