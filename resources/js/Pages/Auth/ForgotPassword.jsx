// resources/js/Pages/Auth/ForgotPassword.jsx
import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

const ForgotPassword = ({ status }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="login-box">
                <div className="login-logo">
                    <Link href="/">
                        <b>Career</b>Builder
                    </Link>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

                        {status && (
                            <div className="alert alert-success" role="alert">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
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

                            <div className="row">
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={processing}
                                    >
                                        {processing ? 'Sending...' : 'Send Password Reset Link'}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <p className="mt-3 mb-1">
                            <Link href={route('login')}>Login</Link>
                        </p>
                        <p className="mb-0">
                            <Link href={route('register')} className="text-center">
                                Register a new membership
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default ForgotPassword;