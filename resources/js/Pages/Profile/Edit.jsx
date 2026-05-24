import React, { useState, useRef } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, router } from '@inertiajs/react';

const ProfileEdit = ({ user }) => {

    const profileForm = useForm({
        name: user.name || '',
        email: user.email || '',
    });

    const passwordForm = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const avatarForm = useForm({
        avatar: null,
    });

    const [activeTab, setActiveTab] = useState('profile');
    const fileInputRef = useRef(null);

    /** ---------------- Profile Update ---------------- */
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        profileForm.patch(route('admin.profile.update'), {
            preserveScroll: true,
        });
    };

    /** ---------------- Password Update ---------------- */
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        passwordForm.patch(route('admin.profile.password.update'), {
            onSuccess: () => passwordForm.reset(),
            preserveScroll:true,
        });
    };

    /** ---------------- Avatar Upload ---------------- */
    const handleAvatarSubmit = (e) => {
        e.preventDefault();

        avatarForm.post(route('admin.profile.avatar.update'), {
            forceFormData: true,
            onSuccess: () => {
                avatarForm.reset();

                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            },
            preserveScroll:true,
        });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            avatarForm.setData('avatar', file);

            const preview = document.getElementById('avatar-preview');
            preview.src = URL.createObjectURL(file);
        }
    };

    /** ---------------- Delete Account ---------------- */
    const handleDeleteAccount = () => {
        if (!confirm('Are you sure? This cannot be undone.')) return;

        const password = prompt('Enter password to confirm deletion:');

        if (password) {
            router.delete(route('admin.profile.destroy'), {
                data: { password },
            });
        }
    };

    return (
        <AdminLayout header="Profile Settings">
            <Head title="Profile Settings" />

            <div className="container-fluid">
                <div className="row">

                    {/* ----------- LEFT SIDE MENU ----------- */}
                    <div className="col-md-3">

                        {/* User Info Card */}
                        <div className="card card-primary card-outline">
                            <div className="card-body box-profile text-center">
                                <img
                                    id="avatar-preview"
                                    className="profile-user-img img-fluid img-circle"
                                    src={user.avatar ? `/storage/${user.avatar}` : "/images/default-avatar.jpg"}
                                    onError={e => e.target.src = "/images/default-avatar.jpg"}
                                    alt="User profile picture"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                                <h3 className="profile-username mt-2">{user.name}</h3>
                                <p className="text-muted">{user.email}</p>
                            </div>
                        </div>

                        {/* Menu */}
                        {/* <div className="card">
                            <div className="card-header"><strong>Settings</strong></div>
                            <div className="card-body p-0">
                                <ul className="nav nav-pills flex-column">

                                    <li className="nav-item">
                                        <button
                                            className={`nav-link w-100 text-left ${activeTab === 'profile' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('profile')}
                                        >
                                            <i className="fas fa-user mr-2"></i> Profile Information
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button
                                            className={`nav-link w-100 text-left ${activeTab === 'password' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('password')}
                                        >
                                            <i className="fas fa-lock mr-2"></i> Change Password
                                        </button>
                                    </li>

                                    <li className="nav-item">
                                        <button
                                            className={`nav-link w-100 text-left ${activeTab === 'avatar' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('avatar')}
                                        >
                                            <i className="fas fa-camera mr-2"></i> Update Avatar
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        </div> */}

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Settings</h3>
                            </div>
                            <div className="card-body p-0">
                                <ul className="nav nav-pills flex-column">

                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                                            onClick={(e) => { e.preventDefault(); setActiveTab('profile'); }}
                                        >
                                            <i className="fas fa-user mr-2"></i>
                                            Profile Information
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            className={`nav-link ${activeTab === 'password' ? 'active' : ''}`}
                                            onClick={(e) => { e.preventDefault(); setActiveTab('password'); }}
                                        >
                                            <i className="fas fa-lock mr-2"></i>
                                            Change Password
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            className={`nav-link ${activeTab === 'avatar' ? 'active' : ''}`}
                                            onClick={(e) => { e.preventDefault(); setActiveTab('avatar'); }}
                                        >
                                            <i className="fas fa-camera mr-2"></i>
                                            Update Avatar
                                        </a>
                                    </li>

                                    

                                </ul>
                            </div>
                        </div>



                    </div>

                    {/* ----------- RIGHT SIDE CONTENT ----------- */}
                    <div className="col-md-9">

                        {/* -------- Profile Form -------- */}
                        {activeTab === 'profile' && (
                            <form onSubmit={handleProfileSubmit} className="card card-body">
                                <h4>Profile Information</h4>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${profileForm.errors.name && 'is-invalid'}`}
                                        value={profileForm.data.name}
                                        onChange={e => profileForm.setData('name', e.target.value)}
                                    />
                                    {profileForm.errors.name && <div className="invalid-feedback">{profileForm.errors.name}</div>}
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className={`form-control ${profileForm.errors.email && 'is-invalid'}`}
                                        value={profileForm.data.email}
                                        onChange={e => profileForm.setData('email', e.target.value)}
                                    />
                                    {profileForm.errors.email && <div className="invalid-feedback">{profileForm.errors.email}</div>}
                                </div>

                                <button className="btn btn-primary" disabled={profileForm.processing}>
                                    {profileForm.processing ? 'Saving...' : 'Save Changes'}
                                </button>
                            </form>
                        )}

                        {/* -------- Password Form -------- */}
                        {activeTab === 'password' && (
                            <form onSubmit={handlePasswordSubmit} className="card card-body">
                                <h4>Change Password</h4>

                                <div className="form-group">
                                    <label>Current Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${passwordForm.errors.current_password && 'is-invalid'}`}
                                        value={passwordForm.data.current_password}
                                        onChange={e => passwordForm.setData('current_password', e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>New Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${passwordForm.errors.password && 'is-invalid'}`}
                                        value={passwordForm.data.password}
                                        onChange={e => passwordForm.setData('password', e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={passwordForm.data.password_confirmation}
                                        onChange={e => passwordForm.setData('password_confirmation', e.target.value)}
                                    />
                                </div>

                                <button className="btn btn-primary" disabled={passwordForm.processing}>
                                    {passwordForm.processing ? 'Updating...' : 'Update Password'}
                                </button>
                            </form>
                        )}

                        {/* -------- Avatar Form -------- */}
                        {activeTab === 'avatar' && (
                            <form onSubmit={handleAvatarSubmit} className="card card-body">
                                <h4>Update Avatar</h4>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="form-control"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                />

                                <button className="btn btn-primary mt-3" disabled={!avatarForm.data.avatar || avatarForm.processing}>
                                    {avatarForm.processing ? 'Uploading...' : 'Upload Avatar'}
                                </button>
                            </form>
                        )}

                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ProfileEdit;
