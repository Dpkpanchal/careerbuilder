// resources/js/Pages/Auth/Login.jsx
import React, { useEffect } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

   const submit = (e) => {
    e.preventDefault();
    post(route('admin.login.store')); // ✅ admin guard route
};

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="login-box">
                <div className="login-logo">
                    <Link href="/">
                        <b>Career</b>Builder
                    </Link>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        {status && (
                            <div className="alert alert-success alert-dismissible">
                                <button type="button" className="close" data-dismiss="alert">×</button>
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    autoFocus
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                                {errors.email && (
                                    <div className="invalid-feedback">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                                {errors.password && (
                                    <div className="invalid-feedback">
                                        {errors.password}
                                    </div>
                                )}
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={processing}
                                    >
                                        {processing ? 'Signing In...' : 'Sign In'}
                                    </button>
                                </div>
                            </div>
                        </form>

                        {canResetPassword && (
                            <p className="mb-1">
                                <Link href={route('password.request')} className="text-center">
                                    I forgot my password
                                </Link>
                            </p>
                        )}

                        {route().has('register') && (
                            <p className="mb-0">
                                <Link href={route('register')} className="text-center">
                                    {/* Register a new membership */}
                                </Link>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Login;