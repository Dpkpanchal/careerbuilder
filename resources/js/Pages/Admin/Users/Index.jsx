import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router, usePage } from '@inertiajs/react';

const UsersIndex = ({ users, filters }) => {

    const { flash } = usePage().props;
    const [bannerMessage, setBannerMessage] = useState(null);

    useEffect(() => {
        if (flash?.success) {
            setBannerMessage({ type: 'success', text: flash.success });
        } else if (flash?.error) {
            setBannerMessage({ type: 'error', text: flash.error });
        }
    }, [flash]);

    const { data, setData } = useForm({
        search: filters.search || '',
        role: filters.role || '',
        status: filters.status || '',
        sort_field: filters.sort_field || 'created_at',
        sort_direction: filters.sort_direction || 'desc',
    });


    const [showFilters, setShowFilters] = useState(true);

    const applyFilters = () => {
        router.get('/admin/users', data, {
            preserveState: true,
            replace: true,
        });
    };

    const resetFilters = () => {
        setData({
            search: '',
            role: '',
            status: '',
            sort_field: 'created_at',
            sort_direction: 'desc',
        });

        router.get('/admin/users', {}, {
            preserveState: true,
            replace: true,
        });
    };

    const toggleBlock = (id) => {
        router.post(`/admin/users/${id}/toggle-block`, {}, {
            preserveScroll: true,
        });
    };

    const verifyUser = (id) => {
        if (!confirm('Mark this user as verified?')) return;

        router.post(route('admin.users.verify', id), {}, {
            preserveScroll: true,
            onError: (errors) => {
                console.error('Verify failed:', errors);
                alert('Failed to verify user. Check console / network tab for details.');
            },
        });
    };

    const softDeleteUser = (id) => {
        if (!confirm('Move this user to trash (soft delete)? You can restore it later.')) return;

        router.delete(`/admin/users/${id}`, {
            preserveScroll: true,
        });
    };

    const hardDeleteUser = (id) => {
        if (!confirm('This will PERMANENTLY delete this user and cannot be undone. Continue?')) return;

        router.delete(route('admin.users.force-delete', id), {
            preserveScroll: true,
            onError: (errors) => {
                console.error('Force delete failed:', errors);
                alert('Failed to permanently delete user. Check console / network tab for details.');
            },
        });
    };

    const formatRole = (role) =>
        role.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase());

    return (
        <AdminLayout header="Users Management">
            <Head title="Users Management" />

            <div className="container-fluid">

                {/* ✅ Flash message banner */}
                {/* {bannerMessage && (
                    <div
                        className={`alert ${bannerMessage.type === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show`}
                        role="alert"
                    >
                        {bannerMessage.text}
                        <button
                            type="button"
                            className="close"
                            onClick={() => setBannerMessage(null)}
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                )} */}

                {/* FILTERS */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Filters</h3>
                        <div className="card-tools">
                            <button
                                className="btn btn-tool"
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <i className={`fas ${showFilters ? 'fa-minus' : 'fa-plus'}`} />
                            </button>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        placeholder="Search by name or email"
                                        value={data.search}
                                        onChange={e => setData('search', e.target.value)}
                                    />
                                </div>

                                {/* ✅ NEW: Role filter */}
                                <div className="col-md-2">
                                    <select
                                        className="form-control"
                                        value={data.role}
                                        onChange={e => setData('role', e.target.value)}
                                    >
                                        <option value="">All Roles</option>
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                        <option value="parent">Parent</option>
                                        <option value="super_admin">Super Admin</option>
                                    </select>
                                </div>

                                <div className="col-md-3">
                                   <select
                                        className="form-control"
                                        value={data.status}
                                        onChange={e => setData('status', e.target.value)}
                                    >
                                        <option value="">All Users</option>
                                        <option value="active">Active</option>
                                        <option value="blocked">Blocked</option>
                                        <option value="deleted">Deleted</option>
                                        <option value="all">All (Including Deleted)</option>
                                    </select>
                                </div>


                                <div className="col-md-2 d-flex">
                                    <button className="btn btn-primary mr-2" onClick={applyFilters}>
                                        Apply
                                    </button>
                                    <button className="btn btn-secondary" onClick={resetFilters}>
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* TABLE */}
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">Users List</h3>
                        <div className="card-tools">
                            {/* <Link href="/admin/users/create" className="btn btn-primary btn-sm">
                                <i className="fas fa-plus mr-1" /> Add User
                            </Link> */}
                        </div>
                    </div>

                    <div className="card-body table-responsive">

                          <style>{`
                                .users-table thead th,
                                .users-table thead tr:hover th,
                                .users-table thead th:hover {
                                    background-color: #0d6efd !important;
                                    color: #fff !important;
                                }
                            `}</style>
                            <table className="table table-bordered table-hover users-table">
                                <thead style={{ backgroundColor: "#0d6efd", color: "#fff" }}>

                                <tr>
                                    <th style={{ width: 60 }}>#</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th style={{ width: 260 }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.length ? users.data.map((user, i) => (
                                    <tr key={user.id}>
                                        <td>{users.from + i}</td>

                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={user.avatar_url}
                                                    onError={(e) => {
                                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=007bff&color=fff`;
                                                    }}
                                                    alt={user.name}
                                                    className="img-circle elevation-2 mr-2"
                                                    width="32"
                                                    height="32"
                                                />
                                                {user.name}
                                            </div>
                                        </td>

                                       <td>
                                            <span
                                                className={`badge 
                                                    ${user.role === 'super_admin' ? 'bg-danger' :
                                                    user.role === 'teacher' ? 'bg-warning' :
                                                    user.role === 'parent' ? 'bg-info' :
                                                    'bg-secondary'
                                                    }`}
                                            >
                                                {user.role.replace('_', ' ').toUpperCase()}
                                            </span>
                                        </td>

                                        <td>{user.email}</td>

                                      <td>
                                        {user.deleted_at ? (
                                            <span className="badge badge-secondary">Deleted</span>
                                        ) : user.is_blocked ? (
                                            <span className="badge badge-danger">Blocked</span>
                                        ) : !user.email_verified_at ? (
                                            <span className="badge badge-warning">Not Verified</span>
                                        ) : (
                                            <span className="badge badge-success">Active</span>
                                        )}
                                        </td>

                                        <td>
                                            <div className="btn-group">

                                                {/* ✅ If user is DELETED (soft-deleted) */}
                                                {user.deleted_at ? (
                                                    <>
                                                        <button
                                                            onClick={() => router.post(route('admin.users.restore', user.id))}
                                                            className="btn btn-success btn-sm"
                                                            title="Restore User"
                                                        >
                                                            <i className="fas fa-undo" />
                                                        </button>

                                                        {/* ✅ NEW: Hard delete */}
                                                        <button
                                                            onClick={() => hardDeleteUser(user.id)}
                                                            className="btn btn-dark btn-sm"
                                                            title="Delete Permanently"
                                                        >
                                                            <i className="fas fa-trash-alt" />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        {/* ✅ NEW: Verify by Admin (only if not yet verified) */}
                                                        {!user.email_verified_at && (
                                                            <button
                                                                onClick={() => verifyUser(user.id)}
                                                                className="btn btn-info btn-sm"
                                                                title="Verify User"
                                                            >
                                                                <i className="fas fa-check-circle" />
                                                            </button>
                                                        )}

                                                        {/* ✅ Block / Unblock */}
                                                        <button
                                                            onClick={() => toggleBlock(user.id)}
                                                            className={`btn btn-sm ${user.is_blocked ? 'btn-success' : 'btn-warning'}`}
                                                            title={user.is_blocked ? 'Unblock User' : 'Block User'}
                                                        >
                                                            <i className={`fas ${user.is_blocked ? 'fa-unlock' : 'fa-ban'}`} />
                                                        </button>

                                                        {/* ✅ Soft Delete */}
                                                        <button
                                                            onClick={() => softDeleteUser(user.id)}
                                                            className="btn btn-danger btn-sm"
                                                            title="Soft Delete (can be restored)"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>

                                                        {/* ✅ Hard Delete */}
                                                        <button
                                                            onClick={() => hardDeleteUser(user.id)}
                                                            className="btn btn-dark btn-sm"
                                                            title="Delete Permanently"
                                                        >
                                                            <i className="fas fa-trash-alt" />
                                                        </button>
                                                    </>
                                                )}

                                            </div>
                                        </td>

                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="text-center text-muted py-4">
                                            No users found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* PAGINATION */}
               {users.links && users.data.length > 0 && (
                <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        
                        {/* Left info */}
                        <div className="text-muted mb-2 mb-md-0">
                            Showing {users.from} to {users.to} of {users.total} entries
                        </div>

                        {/* Right pagination */}
                        <nav>
                            <ul className="pagination pagination-sm mb-0">
                                {users.links.map((link, index) => (
                                    <li
                                        key={index}
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
                </div>
            )}


                </div>
            </div>
        </AdminLayout>
    );
};

export default UsersIndex;

