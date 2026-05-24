// // resources/js/Pages/Admin/Users/Edit.jsx
// import React, { useEffect } from 'react';
// import AdminLayout from '@/Layouts/AdminLayout';
// import { Head, useForm, Link } from '@inertiajs/react';

// const UsersEdit = ({ user }) => {
//     const { data, setData, put, processing, errors, reset } = useForm({
//         name: user.name || '',
//         email: user.email || '',
//         password: '',
//         password_confirmation: '',
//     });

//     useEffect(() => {
//         return () => {
//             reset('password', 'password_confirmation');
//         };
//     }, []);

//     const submit = (e) => {
//         e.preventDefault();
//         put(`/admin/users/${user.id}`);
//     };

//     return (
//         <AdminLayout header="Edit User">
//             <Head title="Edit User" />
            
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Edit User: {user.name}</h3>
//                             </div>
//                             <div className="card-body">
//                                 <form onSubmit={submit}>
//                                     <div className="form-group">
//                                         <label htmlFor="name">Name</label>
//                                         <input
//                                             type="text"
//                                             className={`form-control ${errors.name ? 'is-invalid' : ''}`}
//                                             id="name"
//                                             value={data.name}
//                                             onChange={e => setData('name', e.target.value)}
//                                             required
//                                         />
//                                         {errors.name && (
//                                             <div className="invalid-feedback">
//                                                 {errors.name}
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="form-group">
//                                         <label htmlFor="email">Email</label>
//                                         <input
//                                             type="email"
//                                             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//                                             id="email"
//                                             value={data.email}
//                                             onChange={e => setData('email', e.target.value)}
//                                             required
//                                         />
//                                         {errors.email && (
//                                             <div className="invalid-feedback">
//                                                 {errors.email}
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="form-group">
//                                         <label htmlFor="password">Password</label>
//                                         <input
//                                             type="password"
//                                             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
//                                             id="password"
//                                             value={data.password}
//                                             onChange={e => setData('password', e.target.value)}
//                                             placeholder="Leave blank to keep current password"
//                                         />
//                                         {errors.password && (
//                                             <div className="invalid-feedback">
//                                                 {errors.password}
//                                             </div>
//                                         )}
//                                         <small className="form-text text-muted">
//                                             Leave password fields blank if you don't want to change the password.
//                                         </small>
//                                     </div>

//                                     <div className="form-group">
//                                         <label htmlFor="password_confirmation">Confirm Password</label>
//                                         <input
//                                             type="password"
//                                             className="form-control"
//                                             id="password_confirmation"
//                                             value={data.password_confirmation}
//                                             onChange={e => setData('password_confirmation', e.target.value)}
//                                             placeholder="Confirm new password"
//                                         />
//                                     </div>

//                                     <div className="form-group">
//                                         <button 
//                                             type="submit" 
//                                             className="btn btn-primary" 
//                                             disabled={processing}
//                                         >
//                                             {processing ? 'Updating...' : 'Update User'}
//                                         </button>
//                                         <Link 
//                                             href="/admin/users" 
//                                             className="btn btn-default ml-2"
//                                         >
//                                             Cancel
//                                         </Link>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-md-4">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">User Information</h3>
//                             </div>
//                             <div className="card-body">
//                                 <div className="user-info">
//                                     <p><strong>ID:</strong> {user.id}</p>
//                                     <p><strong>Created:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
//                                     <p><strong>Last Updated:</strong> {new Date(user.updated_at).toLocaleDateString()}</p>
//                                     <p><strong>Email Verified:</strong> 
//                                         {user.email_verified_at 
//                                             ? ` ${new Date(user.email_verified_at).toLocaleDateString()}`
//                                             : ' Not verified'
//                                         }
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="card mt-3">
//                             <div className="card-header">
//                                 <h3 className="card-title">Danger Zone</h3>
//                             </div>
//                             <div className="card-body">
//                                 <p className="text-muted">
//                                     Once you delete a user, there is no going back. Please be certain.
//                                 </p>
//                                 <Link
//                                     href={`/admin/users/${user.id}`}
//                                     method="delete"
//                                     as="button"
//                                     className="btn btn-danger btn-block"
//                                     onClick={(e) => {
//                                         if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
//                                             e.preventDefault();
//                                         }
//                                     }}
//                                 >
//                                     <i className="fas fa-trash mr-2"></i>
//                                     Delete User
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default UsersEdit;

// resources/js/Pages/Admin/Users/Edit.jsx
import React, { useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const UsersEdit = ({ user }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        name: user.name || '',
        email: user.email || '',
        mobile: user.mobile || '',
        role: user.role || 'student',
        is_blocked: Boolean(user.is_blocked),
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/users/${user.id}`);
    };

    return (
        <AdminLayout header="Edit User">
            <Head title="Edit User" />

            <div className="container-fluid">
                <div className="row">

                    {/* LEFT SIDE FORM */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Edit User: <strong>{user.name}</strong>
                                </h3>
                            </div>

                            <div className="card-body">
                                <form onSubmit={submit}>

                                    {/* Name */}
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>

                                    {/* Email */}
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>

                                    {/* Mobile */}
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                            value={data.mobile}
                                            onChange={e => setData('mobile', e.target.value)}
                                            placeholder="e.g. 9876543210"
                                        />
                                        {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                                    </div>

                                    {/* Role */}
                                    <div className="form-group">
                                        <label>Role</label>
                                        <select
                                            className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                                            value={data.role}
                                            onChange={e => setData('role', e.target.value)}
                                        >
                                            <option value="student">Student</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="parent">Parent</option>
                                            <option value="super_admin">Super Admin</option>
                                        </select>
                                        {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                                    </div>

                                    {/* Block / Unblock */}
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="is_blocked"
                                            checked={data.is_blocked}
                                            onChange={e => setData('is_blocked', e.target.checked)}
                                        />
                                        <label className="form-check-label" htmlFor="is_blocked">
                                            Block this user
                                        </label>

                                        {data.is_blocked && (
                                            <small className="form-text text-danger">
                                                Blocked users will not be able to login.
                                            </small>
                                        )}
                                    </div>

                                    <hr />

                                    {/* Password */}
                                    <div className="form-group">
                                        <label>Password (Optional)</label>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            value={data.password}
                                            onChange={e => setData('password', e.target.value)}
                                            placeholder="Leave blank to keep current password"
                                        />
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            value={data.password_confirmation}
                                            onChange={e => setData('password_confirmation', e.target.value)}
                                        />
                                    </div>

                                    {/* Actions */}
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? 'Updating...' : 'Update User'}
                                        </button>

                                        <Link
                                            href="/admin/users"
                                            className="btn btn-secondary ml-2"
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="col-md-4">

                        {/* Info */}
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">User Information</h3>
                            </div>
                            <div className="card-body">
                                <p><strong>ID:</strong> {user.id}</p>
                                <p><strong>Role:</strong> {user.role}</p>
                                <p><strong>Status:</strong> {user.is_blocked ? 'Blocked' : 'Active'}</p>
                                <p><strong>Created:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                                <p><strong>Updated:</strong> {new Date(user.updated_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="card mt-3">
                            <div className="card-header bg-danger">
                                <h3 className="card-title text-white">Danger Zone</h3>
                            </div>
                            <div className="card-body">
                                <p className="text-muted">
                                    Deleting a user is permanent and cannot be undone.
                                </p>

                                <Link
                                    href={`/admin/users/${user.id}`}
                                    method="delete"
                                    as="button"
                                    className="btn btn-danger btn-block"
                                    onClick={(e) => {
                                        if (!confirm('Are you sure you want to delete this user?')) {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <i className="fas fa-trash mr-2"></i>
                                    Delete User
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default UsersEdit;
