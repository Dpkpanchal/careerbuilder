// // resources/js/Pages/Admin/Users/Create.jsx
// import React, { useEffect } from 'react';
// import AdminLayout from '@/Layouts/AdminLayout';
// import { Head, useForm, Link } from '@inertiajs/react';

// const UsersCreate = () => {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         name: '',
//         email: '',
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
//         post('/admin/users');
//     };

//     return (
//         <AdminLayout header="Create User">
//             <Head title="Create User" />
            
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h3 className="card-title">Create New User</h3>
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
//                                             autoFocus
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
//                                             required
//                                         />
//                                         {errors.password && (
//                                             <div className="invalid-feedback">
//                                                 {errors.password}
//                                             </div>
//                                         )}
//                                     </div>

//                                     <div className="form-group">
//                                         <label htmlFor="password_confirmation">Confirm Password</label>
//                                         <input
//                                             type="password"
//                                             className="form-control"
//                                             id="password_confirmation"
//                                             value={data.password_confirmation}
//                                             onChange={e => setData('password_confirmation', e.target.value)}
//                                             required
//                                         />
//                                     </div>

//                                     <div className="form-group">
//                                         <button 
//                                             type="submit" 
//                                             className="btn btn-primary" 
//                                             disabled={processing}
//                                         >
//                                             {processing ? 'Creating...' : 'Create User'}
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
//                                 <h3 className="card-title">Quick Tips</h3>
//                             </div>
//                             <div className="card-body">
//                                 <ul className="list-unstyled">
//                                     <li><i className="fas fa-info-circle text-info mr-2"></i>All fields are required</li>
//                                     <li><i className="fas fa-info-circle text-info mr-2"></i>Password must be at least 8 characters</li>
//                                     <li><i className="fas fa-info-circle text-info mr-2"></i>Email must be unique</li>
//                                     <li><i className="fas fa-info-circle text-info mr-2"></i>User will receive a verification email</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default UsersCreate;

// resources/js/Pages/Admin/Users/Create.jsx
import React, { useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

const UsersCreate = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        mobile: '',
        role: 'student',
        password: '',
        password_confirmation: '',
        is_blocked: false,
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post('/admin/users');
    };

    return (
        <AdminLayout header="Create User">
            <Head title="Create User" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Create New User</h3>
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

                                    {/* Password */}
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            value={data.password}
                                            onChange={e => setData('password', e.target.value)}
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
                                    </div>

                                    {/* Actions */}
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={processing}
                                        >
                                            {processing ? 'Creating...' : 'Create User'}
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

                    {/* Right Sidebar */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Admin Notes</h3>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>✔ Assign correct role</li>
                                    <li>✔ Mobile is optional but recommended</li>
                                    <li>✔ Blocked users cannot login</li>
                                    <li>✔ Super Admin has full access</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
};

export default UsersCreate;

