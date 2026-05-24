// resources/js/Layouts/GuestLayout.jsx
import React from 'react';
import { Head } from '@inertiajs/react';

const GuestLayout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="hold-transition login-page">
                {children}
            </div>

            <style jsx>{`
                .login-page {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                }
            `}</style>
        </>
    );
};

export default GuestLayout;