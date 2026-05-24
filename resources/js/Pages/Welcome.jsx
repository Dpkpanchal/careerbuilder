// resources/js/Pages/Welcome.jsx
import React from 'react';
import { Head, Link } from '@inertiajs/react';

const Welcome = ({ canLogin, canRegister }) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="hold-transition login-page" style={{ minHeight: '100vh' }}>
                <div className="login-box">
                    <div className="login-logo">
                        <b>Career</b>Builder
                    </div>
                    
                    <div className="card">
                        <div className="card-body login-card-body text-center">
                            <h4 className="mb-4">Welcome to Career Builder</h4>
                           <p className="mb-4">Career Builder is your gateway to professional growth — manage opportunities, track progress, and take control of your career journey with confidence.</p>
                            
                            <div className="row">
                                <div className="col-12">
                                    {canLogin ? (
                                        <div className="d-grid gap-2">
                                            <Link href={route('login')} className="btn btn-primary btn-block">
                                                Log in
                                            </Link>
                                            {canRegister && (
                                                <Link href={route('register')} className="btn btn-success btn-block">
                                                    Register
                                                </Link>
                                            )}
                                        </div>
                                    ) : (
                                        <Link href={route('admin.dashboard')} className="btn btn-primary btn-block">
                                            Go to Dashboard
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;