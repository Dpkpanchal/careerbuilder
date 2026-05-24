import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function MenuItemsIndex({ menuItems, subCategories, filters }) {

    const { data, setData } = useForm({
        search: filters.search || '',
        sub_category_id: filters.sub_category_id || '',
        sort_field: filters.sort_field || 'created_at',
        sort_direction: filters.sort_direction || 'desc',
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        router.get('/admin/menuitems', data, {
            preserveState: true,
            replace: true,
        });
    };

    const handleReset = () => {
        setData({
            search: '',
            sub_category_id: '',
            sort_field: 'created_at',
            sort_direction: 'desc',
        });

        router.get('/admin/menuitems', {}, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSort = (field) => {
        const newDirection =
            data.sort_field === field && data.sort_direction === 'asc'
                ? 'desc'
                : 'asc';

        setData({ ...data, sort_field: field, sort_direction: newDirection });

        router.get(
            '/admin/menuitems',
            { ...data, sort_field: field, sort_direction: newDirection },
            { preserveState: true, replace: true }
        );
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return 'fas fa-sort';
        return data.sort_direction === 'asc'
            ? 'fas fa-sort-up'
            : 'fas fa-sort-down';
    };

    return (
        <AdminLayout header="Menu Items Management">
            <Head title="Menu Items" />

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
                                <div className="col-md-4">
                                    <label>Search</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.search}
                                        placeholder="Search menu item..."
                                        onChange={(e) => setData('search', e.target.value)}
                                    />
                                </div>

                                {/* Filter by Subcategory */}
                                <div className="col-md-4">
                                    <label>Subcategory</label>
                                    <select
                                        className="form-control"
                                        value={data.sub_category_id}
                                        onChange={(e) =>
                                            setData('sub_category_id', e.target.value)
                                        }
                                    >
                                        <option value="">All Subcategories</option>
                                        {subCategories.map((sub) => (
                                            <option key={sub.id} value={sub.id}>
                                                {sub.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Sort */}
                                <div className="col-md-4">
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

                            {/* Buttons */}
                            <div className="mt-3 d-flex justify-content-between">
                                <div>
                                    <button className="btn btn-primary" onClick={handleFilter}>
                                        <i className="fas fa-filter mr-1"></i>
                                        Apply Filters
                                    </button>

                                    <button
                                        className="btn btn-default ml-2"
                                        onClick={handleReset}
                                    >
                                        <i className="fas fa-redo mr-1"></i>
                                        Reset
                                    </button>
                                </div>

                                <div className="text-muted">
                                    Total Results: {menuItems.total}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Table */}
                <div className="card mt-3">
                     <div className="card-header">
                        <h3 className="card-title">Menu Items</h3>
                        <div className="card-tools">
                            <Link href="/admin/menuitems/create" className="btn btn-primary btn-sm">
                                <i className="fas fa-plus"></i> Add Item
                            </Link>
                        </div>
                    </div>


                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th style={{ cursor: 'pointer' }} onClick={() => handleSort('id')}>
                                            ID <i className={getSortIcon('id')}></i>
                                        </th>

                                        <th style={{ cursor: 'pointer' }} onClick={() => handleSort('name')}>
                                            Name <i className={getSortIcon('name')}></i>
                                        </th>

                                        <th>Subcategory</th>

                                        <th style={{ cursor: 'pointer' }} onClick={() => handleSort('slug')}>
                                            Slug <i className={getSortIcon('slug')}></i>
                                        </th>

                                        <th>Description</th>

                                        <th style={{ width: '140px' }}>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {menuItems.data.length > 0 ? (
                                        menuItems.data.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.sub_category?.name}</td>
                                                <td>{item.slug}</td>
                                                <td>{item.description?.substring(0, 40)}...</td>

                                                <td>
                                                    <div className="btn-group">
                                                        <Link
                                                            href={`/admin/menuitems/${item.id}/edit`}
                                                            className="btn btn-info btn-sm"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>

                                                        <Link
                                                            href={`/admin/menuitems/${item.id}`}
                                                            method="delete"
                                                            as="button"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={(e) => {
                                                                if (!confirm('Delete this menu item?'))
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
                                            <td colSpan="6" className="text-center py-4">
                                                <i className="fas fa-list-alt fa-2x text-muted mb-2"></i>
                                                <p className="text-muted">No menu items found.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {menuItems.links && (
                            <div className="mt-3 d-flex justify-content-between align-items-center">
                                <div className="text-muted">
                                    Showing {menuItems.from} to {menuItems.to} of {menuItems.total}
                                </div>

                                <ul className="pagination mb-0">
                                    {menuItems.links.map((link, index) => (
                                        <li
                                            key={index}
                                            className={`page-item ${
                                                link.active ? 'active' : ''
                                            } ${!link.url ? 'disabled' : ''}`}
                                        >
                                            <Link
                                                href={link.url || '#'}
                                                className="page-link"
                                                dangerouslySetInnerHTML={{
                                                    __html: link.label,
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
