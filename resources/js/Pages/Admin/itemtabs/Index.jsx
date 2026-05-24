import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function TabsIndex({ tabs, filters }) {

    const { data, setData } = useForm({
        search: filters.search || '',
        sort_field: filters.sort_field || 'created_at',
        sort_direction: filters.sort_direction || 'desc',
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        router.get('/admin/itemtabs', data, {
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

        router.get('/admin/itemtabs', {}, {
            preserveState: true,
            replace: true,
        });
    };

    const handleSort = (field) => {
        const newDirection =
            data.sort_field === field && data.sort_direction === 'asc' ? 'desc' : 'asc';

        setData({ ...data, sort_field: field, sort_direction: newDirection });

        router.get(
            '/admin/itemtabs',
            { ...data, sort_field: field, sort_direction: newDirection },
            { preserveState: true, replace: true }
        );
    };

    const getSortIcon = (field) => {
        if (data.sort_field !== field) return 'fas fa-sort';
        return data.sort_direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
    };

    return (
        <AdminLayout header="Menu Item Tabs Management">
            <Head title="Tabs" />

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
                                        placeholder="Search tab or menu item..."
                                        onChange={(e) => setData('search', e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
                                    />
                                </div>

                                {/* Sort */}
                                <div className="col-md-3">
                                    <label>Sort By</label>
                                    <select
                                        className="form-control"
                                        value={data.sort_field}
                                        onChange={(e) => setData('sort_field', e.target.value)}
                                    >
                                        <option value="created_at">Created At</option>
                                        <option value="name">Tab Name</option>
                                        <option value="sort_order">Sort Order</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 d-flex justify-content-between">
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
                                        Total Results: {tabs.total}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Tabs Table */}
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">Tabs List</h3>
                        <div className="card-tools">
                            <Link
                                href="/admin/itemtabs/create"
                                className="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus"></i> Add Menu Tab
                            </Link>
                        </div>
                    </div>

                    <div className="card-body">

                        {/* Active Filters */}
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
                                        <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>
                                            ID <i className={getSortIcon('id')}></i>
                                        </th>

                                        <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                                            Tab Name <i className={getSortIcon('name')}></i>
                                        </th>

                                        <th>Icon</th>

                                        <th>Menu Item</th>

                                        <th
                                            onClick={() => handleSort('sort_order')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Sort Order <i className={getSortIcon('sort_order')}></i>
                                        </th>

                                        <th style={{ width: '120px' }}>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {tabs.data.length > 0 ? (
                                        tabs.data.map((tab) => (
                                            <tr key={tab.id}>
                                                <td>{tab.id}</td>
                                                <td>{tab.name}</td>
                                                <td>{tab.icon || '-'}</td>
                                                <td>{tab.menu_item?.name || '-'}</td>
                                                <td>{tab.sort_order}</td>

                                                <td>
                                                    <div className="btn-group">
                                                        <Link
                                                            href={`/admin/itemtabs/${tab.id}/edit`}
                                                            className="btn btn-info btn-sm"
                                                            title="Edit"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>

                                                        <Link
                                                            href={`/admin/itemtabs/${tab.id}`}
                                                            method="delete"
                                                            as="button"
                                                            className="btn btn-danger btn-sm"
                                                            title="Delete"
                                                            onClick={(e) => {
                                                                if (!confirm('Delete this tab?'))
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
                                                <i className="fas fa-folder-open fa-2x text-muted mb-2"></i>
                                                <p className="text-muted">No tabs found.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>


                        {/* Pagination */}
                        {tabs.links && tabs.data.length > 0 && (
                            <div className="mt-3 d-flex justify-content-between align-items-center">
                                <div className="text-muted">
                                    Showing {tabs.from} to {tabs.to} of {tabs.total} entries
                                </div>

                                <nav>
                                    <ul className="pagination mb-0">
                                        {tabs.links.map((link, index) => (
                                            <li
                                                key={index}
                                                className={`page-item ${link.active ? 'active' : ''} ${
                                                    !link.url ? 'disabled' : ''
                                                }`}
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
