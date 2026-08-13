// import React, { useState } from 'react';
// import AdminLayout from '@/Layouts/AdminLayout';
// import { Head, Link, useForm, router } from '@inertiajs/react';

// export default function ForumCategoryIndex({ categories, filters }) {

//     const { data, setData } = useForm({
//         search: filters.search || '',
//         sort_field: filters.sort_field || 'created_at',
//         sort_direction: filters.sort_direction || 'desc',
//     });

//     const [showFilters, setShowFilters] = useState(false);

//     const handleFilter = () => {
//         router.get('/admin/forum-categories', data, {
//             preserveState: true,
//             replace: true,
//         });
//     };

//     const handleReset = () => {
//         setData({
//             search: '',
//             sort_field: 'created_at',
//             sort_direction: 'desc',
//         });

//         router.get('/admin/forum-categories', {}, {
//             preserveState: true,
//             replace: true,
//         });
//     };

//     const handleSort = (field) => {
//         const newDirection =
//             data.sort_field === field && data.sort_direction === 'asc' ? 'desc' : 'asc';

//         setData({ ...data, sort_field: field, sort_direction: newDirection });

//         router.get(
//             '/admin/forum-categories',
//             { ...data, sort_field: field, sort_direction: newDirection },
//             { preserveState: true, replace: true }
//         );
//     };

//     const getSortIcon = (field) => {
//         if (data.sort_field !== field) return 'fas fa-sort';
//         return data.sort_direction === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
//     };

//     return (
//         <AdminLayout header="Forum Category Management">
//             <Head title="Forum Categories" />

//             <div className="container-fluid">

//                 {/* Filters Card */}
//                 <div className="card">
//                     <div className="card-header">
//                         <h3 className="card-title">Filters</h3>
//                         <div className="card-tools">
//                             <button
//                                 type="button"
//                                 className="btn btn-tool"
//                                 onClick={() => setShowFilters(!showFilters)}
//                             >
//                                 <i className={`fas ${showFilters ? 'fa-minus' : 'fa-plus'}`}></i>
//                             </button>
//                         </div>
//                     </div>

//                     {showFilters && (
//                         <div className="card-body">
//                             <div className="row">

//                                 {/* Search */}
//                                 <div className="col-md-4">
//                                     <div className="form-group">
//                                         <label>Search</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             value={data.search}
//                                             placeholder="Search forum category..."
//                                             onChange={(e) => setData('search', e.target.value)}
//                                             onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Sort */}
//                                 <div className="col-md-3">
//                                     <div className="form-group">
//                                         <label>Sort By</label>
//                                         <select
//                                             className="form-control"
//                                             value={data.sort_field}
//                                             onChange={(e) =>
//                                                 setData('sort_field', e.target.value)
//                                             }
//                                         >
//                                             <option value="created_at">Created At</option>
//                                             <option value="name">Name</option>
//                                             <option value="slug">Slug</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Buttons */}
//                             <div className="row">
//                                 <div className="col-12">
//                                     <div className="d-flex justify-content-between">
//                                         <div>
//                                             <button
//                                                 type="button"
//                                                 className="btn btn-primary"
//                                                 onClick={handleFilter}
//                                             >
//                                                 <i className="fas fa-filter mr-1"></i>
//                                                 Apply Filters
//                                             </button>

//                                             <button
//                                                 type="button"
//                                                 className="btn btn-default ml-2"
//                                                 onClick={handleReset}
//                                             >
//                                                 <i className="fas fa-redo mr-1"></i>
//                                                 Reset
//                                             </button>
//                                         </div>

//                                         <div className="text-muted">
//                                             Total Results: {categories.total}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Forum Category Table */}
//                 <div className="card mt-3">
//                     <div className="card-header">
//                         <h3 className="card-title">Forum Category List</h3>
//                         <div className="card-tools">
//                             <Link
//                                 href="/admin/forum-categories/create"
//                                 className="btn btn-primary btn-sm"
//                             >
//                                 <i className="fas fa-plus"></i> Add Forum Category
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="card-body">

//                         {/* If filters applied */}
//                         {filters.search && (
//                             <div className="mb-3">
//                                 <small className="text-muted">Active Filter:</small>
//                                 <span className="badge badge-info ml-2">
//                                     Search: "{filters.search}"
//                                     <button
//                                         className="btn btn-xs btn-light ml-1"
//                                         onClick={() => {
//                                             setData('search', '');
//                                             handleFilter();
//                                         }}
//                                     >
//                                         ×
//                                     </button>
//                                 </span>
//                             </div>
//                         )}

//                         <div className="table-responsive">
//                             <table className="table table-bordered table-striped table-hover">
//                                 <thead>
//                                     <tr>
//                                         <th style={{ cursor: 'pointer', width: '80px' }}
//                                             onClick={() => handleSort('id')}>
//                                             ID <i className={getSortIcon('id')}></i>
//                                         </th>

//                                         <th style={{ cursor: 'pointer' }}
//                                             onClick={() => handleSort('name')}>
//                                             Name <i className={getSortIcon('name')}></i>
//                                         </th>

//                                         <th style={{ cursor: 'pointer' }}
//                                             onClick={() => handleSort('slug')}>
//                                             Slug <i className={getSortIcon('slug')}></i>
//                                         </th>

//                                         <th style={{ width: '120px' }}>Actions</th>
//                                     </tr>
//                                 </thead>

//                                 <tbody>
//                                     {categories.data.length > 0 ? (
//                                         categories.data.map((cat) => (
//                                             <tr key={cat.id}>
//                                                 <td>{cat.id}</td>
//                                                 <td>{cat.name}</td>
//                                                 <td>{cat.slug}</td>

//                                                 <td>
//                                                     <div className="btn-group">
//                                                         <Link
//                                                             href={`/admin/forum-categories/${cat.id}/edit`}
//                                                             className="btn btn-info btn-sm"
//                                                             title="Edit"
//                                                         >
//                                                             <i className="fas fa-edit"></i>
//                                                         </Link>

//                                                         <Link
//                                                             href={`/admin/forum-categories/${cat.id}`}
//                                                             method="delete"
//                                                             as="button"
//                                                             className="btn btn-danger btn-sm"
//                                                             title="Delete"
//                                                             onClick={(e) => {
//                                                                 if (!confirm('Delete this forum category?'))
//                                                                     e.preventDefault();
//                                                             }}
//                                                         >
//                                                             <i className="fas fa-trash"></i>
//                                                         </Link>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))
//                                     ) : (
//                                         <tr>
//                                             <td colSpan="4" className="text-center py-4">
//                                                 <i className="fas fa-folder-open fa-2x text-muted mb-2"></i>
//                                                 <p className="text-muted">No forum categories found.</p>
//                                             </td>
//                                         </tr>
//                                     )}
//                                 </tbody>
//                             </table>
//                         </div>

//                         {/* Pagination */}
//                         {categories.links && categories.data.length > 0 && (
//                             <div className="mt-3 d-flex justify-content-between align-items-center">
//                                 <div className="text-muted">
//                                     Showing {categories.from} to {categories.to} of {categories.total} entries
//                                 </div>

//                                 <nav>
//                                     <ul className="pagination mb-0">
//                                         {categories.links.map((link, index) => (
//                                             <li
//                                                 key={index}
//                                                 className={`page-item ${
//                                                     link.active ? 'active' : ''
//                                                 } ${!link.url ? 'disabled' : ''}`}
//                                             >
//                                                 <Link
//                                                     href={link.url || '#'}
//                                                     className="page-link"
//                                                     dangerouslySetInnerHTML={{ __html: link.label }}
//                                                 />
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </nav>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// }

import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function ForumCategoryIndex({ categories, filters }) {

    const { data, setData } = useForm({
        search: filters.search || '',
        status: filters.status || '',
        sort_field: filters.sort_field || 'created_at',
        sort_direction: filters.sort_direction || 'desc',
    });

    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        const params = {};
        if (data.search) params.search = data.search;
        if (data.status) params.status = data.status;
        if (data.sort_field) params.sort_field = data.sort_field;
        if (data.sort_direction) params.sort_direction = data.sort_direction;

        router.get('/admin/forum-categories', params, {
            preserveState: true,
            replace: true,
        });
    };

    const handleReset = () => {
        setData({
            search: '',
            status: '',
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

    // Toggle Status
    const toggleStatus = (item) => {
        if (!confirm(`Are you sure you want to ${item.status ? 'deactivate' : 'activate'} this category?`)) {
            return;
        }

        router.put(
            `/admin/forum-categories/${item.id}/toggle-status`,
            { status: !item.status },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    console.log('Status updated successfully');
                },
                onError: (errors) => {
                    console.error('Error updating status:', errors);
                }
            }
        );
    };

    // Get serial number
    const getSerialNumber = (index) => {
        const currentPage = categories.current_page || 1;
        const perPage = categories.per_page || 10;
        return (currentPage - 1) * perPage + index + 1;
    };

    // Permanent Delete
    const handleDelete = (id, e) => {
        e.preventDefault();
        if (confirm("Are you sure you want to permanently delete this category? This action cannot be undone!")) {
            router.delete(`/admin/forum-categories/${id}`, {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    console.log('Category deleted permanently');
                },
                onError: (errors) => {
                    console.error('Error deleting category:', errors);
                }
            });
        }
    };

    return (
        <AdminLayout header="Forum Category Management">
            <Head title="Forum Categories" />

            <div className="container-fluid">

                {/* Filters Card */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            <i className="fas fa-filter mr-2"></i> Filters
                        </h3>
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

                                {/* Status */}
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Status</label>
                                        <select
                                            className="form-control"
                                            value={data.status}
                                            onChange={(e) => setData('status', e.target.value)}
                                        >
                                            <option value="">All Status</option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                    </div>
                                </div>

                              
                              

                                {/* Apply Button */}
                                <div className="col-md-2">
                                    <div className="form-group">
                                        <label>&nbsp;</label>
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block"
                                            onClick={handleFilter}
                                        >
                                            <i className="fas fa-filter mr-1"></i> Apply
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="row mt-2">
                                <div className="col-12">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-default"
                                                onClick={handleReset}
                                            >
                                                <i className="fas fa-redo mr-1"></i>
                                                Reset
                                            </button>
                                        </div>

                                        <div className="text-muted">
                                            Total: {categories.total}
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
                        <h3 className="card-title">
                            <i className="fas fa-list mr-2"></i> Forum Category List
                        </h3>
                        <div className="card-tools">
                            <Link
                                href="/admin/forum-categories/create"
                                className="btn btn-primary btn-sm"
                            >
                                <i className="fas fa-plus mr-1"></i> Add Forum Category
                            </Link>
                        </div>
                    </div>

                    <div className="card-body p-0">
                        {/* Active Filters Display */}
                        {(filters.search || filters.status) && (
                            <div className="p-3 bg-light border-bottom">
                                <small className="text-muted mr-2">Active Filters:</small>
                                {filters.search && (
                                    <span className="badge badge-info mr-2">
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
                                )}
                                {filters.status && (
                                    <span className="badge badge-info mr-2">
                                        Status: {filters.status === '1' ? 'Active' : 'Inactive'}
                                        <button
                                            className="btn btn-xs btn-light ml-1"
                                            onClick={() => {
                                                setData('status', '');
                                                handleFilter();
                                            }}
                                        >
                                            ×
                                        </button>
                                    </span>
                                )}
                            </div>
                        )}

                        <div className="table-responsive">
                            <table className="table table-bordered table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th style={{ width: '70px' }}>S.No</th>

                                        <th style={{ cursor: 'pointer' }}
                                            onClick={() => handleSort('name')}>
                                            Name <i className={getSortIcon('name')}></i>
                                        </th>

                                        <th style={{ cursor: 'pointer' }}
                                            onClick={() => handleSort('slug')}>
                                            Slug <i className={getSortIcon('slug')}></i>
                                        </th>

                                        <th style={{ width: '150px', textAlign: 'center' }}>
                                            Status
                                        </th>

                                        <th style={{ width: '120px', textAlign: 'center' }}>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {categories.data && categories.data.length > 0 ? (
                                        categories.data.map((cat, index) => (
                                            <tr key={cat.id}>
                                                <td>{getSerialNumber(index)}</td>
                                                <td>{cat.name}</td>
                                                <td>
                                                    <code className="bg-light px-2 py-1 rounded">
                                                        {cat.slug}
                                                    </code>
                                                </td>

                                                <td style={{ textAlign: 'center' }}>
                                                    <div className="custom-control custom-switch d-inline-block">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id={`status-switch-${cat.id}`}
                                                            checked={cat.status === 1 || cat.status === true}
                                                            onChange={() => toggleStatus(cat)}
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor={`status-switch-${cat.id}`}
                                                        >
                                                            <span className={`badge ${cat.status ? 'badge-success' : 'badge-secondary'}`}>
                                                                {cat.status ? 'Active' : 'Inactive'}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="btn-group">
                                                        <Link
                                                            href={`/admin/forum-categories/${cat.id}/edit`}
                                                            className="btn btn-info btn-sm"
                                                            title="Edit"
                                                        >
                                                            <i className="fas fa-edit"></i>
                                                        </Link>

                                                        <button
                                                            onClick={(e) => handleDelete(cat.id, e)}
                                                            className="btn btn-dark btn-sm"
                                                            title="Permanently Delete"
                                                        >
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4">
                                                <i className="fas fa-folder-open fa-2x text-muted mb-2 d-block"></i>
                                                <p className="text-muted">No forum categories found.</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {categories.links && categories.data && categories.data.length > 0 && (
                            <div className="p-3 bg-light border-top">
                                <div className="d-flex justify-content-between align-items-center">
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
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .table tbody td {
                    vertical-align: middle;
                }
                .badge {
                    font-weight: 500;
                    font-size: 0.8rem;
                    padding: 4px 10px;
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
                .btn-tool {
                    color: #495057;
                }
                .btn-tool:hover {
                    color: #212529;
                }
                .custom-control-label {
                    cursor: pointer;
                }
                .custom-switch .custom-control-input:checked ~ .custom-control-label::before {
                    background-color: #28a745;
                    border-color: #28a745;
                }
                code {
                    font-size: 0.85rem;
                    color: #6c757d;
                    background-color: #f8f9fa;
                    padding: 2px 8px;
                    border-radius: 4px;
                }
                .btn-group .btn {
                    margin: 0 2px;
                }
                .bg-light {
                    background-color: #f8f9fa !important;
                }
                .border-top {
                    border-top: 1px solid #dee2e6 !important;
                }
                .border-bottom {
                    border-bottom: 1px solid #dee2e6 !important;
                }
                .btn-block {
                    width: 100%;
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
                .btn-default {
                    background-color: #f8f9fa;
                    border-color: #ddd;
                    color: #333;
                }
                .btn-default:hover {
                    background-color: #e9ecef;
                    border-color: #ccc;
                }
                .table-bordered {
                    border: 1px solid #dee2e6;
                }
                .table-hover tbody tr:hover {
                    background-color: rgba(0,0,0,0.03);
                }
                .card {
                    border-radius: 8px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                }
                .card-header {
                    background-color: #f8f9fa;
                    border-bottom: 1px solid #dee2e6;
                    padding: 12px 20px;
                }
                .card-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0;
                    color: #333;
                }
                .page-item.active .page-link {
                    background-color: #007bff;
                    border-color: #007bff;
                    color: #fff;
                }
                .page-link {
                    color: #007bff;
                }
                .page-link:hover {
                    color: #0056b3;
                }
                @media (max-width: 768px) {
                    .table {
                        font-size: 0.85rem;
                    }
                    .btn-group .btn {
                        padding: 4px 8px;
                        font-size: 0.75rem;
                    }
                }
            `}</style>
        </AdminLayout>
    );
}