// resources/js/Components/Layout/Navbar.jsx
import React from 'react';
import { Link, usePage } from '@inertiajs/react';

const Navbar = ({ onToggleSidebar, user }) => {
    console.log('Navbar user:', user);
    
    // Safe avatar URL function
    const getAvatarUrl = (avatarPath, userName, size = 60) => {
        if (avatarPath && avatarPath.trim() !== '') {
            if (avatarPath.startsWith('http')) {
                return avatarPath;
            }
            if (avatarPath.startsWith('avatars/')) {
                return `/storage/${avatarPath}`;
            }
            return `/storage/${avatarPath}`;
        }
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(userName || 'User')}&background=007bff&color=fff&size=${size}`;
    };

    const smallAvatarUrl = getAvatarUrl(user?.avatar, user?.name, 25);
    const largeAvatarUrl = getAvatarUrl(user?.avatar, user?.name, 60);

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button 
                        className="nav-link" 
                        onClick={onToggleSidebar}
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#" style={{ cursor: 'pointer' }}>
                        <i className="far fa-bell"></i>
                        <span className="badge badge-warning navbar-badge">15</span>
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" style={{ cursor: 'pointer' }}>
                        <img 
                            src={smallAvatarUrl}
                            alt="User Avatar" 
                            className="img-circle elevation-2"
                            style={{ 
                                width: '25px', 
                                height: '25px', 
                                objectFit: 'cover', 
                                marginRight: '5px',
                                border: '2px solid #dee2e6'
                            }}
                            onError={(e) => {
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=007bff&color=fff&size=25`;
                            }}
                        />
                        {user?.name || 'User'}
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">
                            <div className="text-center">
                                <img 
                                    src={largeAvatarUrl}
                                    alt="User Avatar" 
                                    className="img-circle elevation-2"
                                    style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        objectFit: 'cover',
                                        border: '3px solid #007bff'
                                    }}
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'User')}&background=007bff&color=fff&size=60`;
                                    }}
                                />
                                <p className="mt-2 mb-0">{user?.name || 'User'}</p>
                                <small className="text-muted">{user?.email || 'No email'}</small>
                            </div>
                        </span>
                        <div className="dropdown-divider"></div>
                        <Link href="/admin/profile" className="dropdown-item">
                            <i className="fas fa-user mr-2"></i> Profile
                        </Link>
                        <div className="dropdown-divider"></div>
                        {/* <Link href="/logout" method="post" as="button" className="dropdown-item">
                            <i className="fas fa-sign-out-alt mr-2"></i> Logout
                        </Link> */}

                       <Link
                            href={route('admin.logout')}
                            method="post"
                            as="button"
                            className="dropdown-item"
                            >
                            <i className="fas fa-sign-out-alt mr-2"></i> Logout
                            </Link>

                       

                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;