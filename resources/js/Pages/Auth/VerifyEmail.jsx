// import PrimaryButton from '@/Components/PrimaryButton';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function VerifyEmail({ status }) {
//     const { post, processing } = useForm({});

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('verification.send'));
//     };

//     return (
//         <GuestLayout>
//             <Head title="Email Verification" />

//             <div className="mb-4 text-sm text-gray-600">
//                 Thanks for signing up! Before getting started, could you verify
//                 your email address by clicking on the link we just emailed to
//                 you? If you didn't receive the email, we will gladly send you
//                 another.
//             </div>

//             {status === 'verification-link-sent' && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     A new verification link has been sent to the email address
//                     you provided during registration.
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div className="mt-4 flex items-center justify-between">
//                     <PrimaryButton disabled={processing}>
//                         Resend Verification Email
//                     </PrimaryButton>

//                     <Link
//                         href={route('logout')}
//                         method="post"
//                         as="button"
//                         className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                     >
//                         Log Out
//                     </Link>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }

import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});
    const [resendCooldown, setResendCooldown] = useState(0);
    const [isResendDisabled, setIsResendDisabled] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
        
        // Start cooldown
        setIsResendDisabled(true);
        setResendCooldown(60);
    };

    useEffect(() => {
        let timer;
        if (resendCooldown > 0) {
            timer = setInterval(() => {
                setResendCooldown(prev => {
                    if (prev <= 1) {
                        setIsResendDisabled(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [resendCooldown]);

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4">
                <div className="w-full max-w-md">
                    {/* Main Card */}
                    <div className="bg-white rounded-2xl shadow-2xl shadow-blue-100/50 overflow-hidden relative">
                        {/* Premium Top Gradient Bar */}
                        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>
                        
                        <div className="p-8">
                            {/* Logo */}
                            <div className="text-center mb-8">
                                <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-xl shadow-lg shadow-blue-200/50">
                                    <div className="text-white text-2xl font-bold flex items-center gap-2">
                                        <span className="text-3xl">🚀</span>
                                        <span>Career Builder</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mt-2 font-medium tracking-wide">
                                    Empowering Your Career Journey
                                </p>
                            </div>

                            {/* Animated Icon */}
                            <div className="text-center my-8">
                                <div className="inline-block relative">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 animate-ping"></div>
                                    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 w-24 h-24 rounded-full flex items-center justify-center shadow-inner border border-blue-100">
                                        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    {/* Decorative dots */}
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-300"></div>
                                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-500 rounded-full shadow-lg shadow-indigo-300"></div>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                                Verify Your Email
                            </h2>
                            
                            <p className="text-gray-600 text-center text-sm leading-relaxed">
                                Thanks for signing up! Before getting started, please verify your email address.
                            </p>

                            {/* Status Message */}
                            {status === 'verification-link-sent' && (
                                <div className="mt-4 bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div className="text-sm text-green-700">
                                        <span className="font-medium">Success!</span> A new verification link has been sent to your email address.
                                    </div>
                                </div>
                            )}

                            {/* Info Box */}
                            <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div className="text-sm text-gray-700">
                                        <p className="font-medium text-gray-800">Didn't receive the email?</p>
                                        <p className="text-gray-600 text-xs mt-1">
                                            Check your spam folder or click the button below to resend.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 space-y-4">
                                <form onSubmit={submit}>
                                    <button
                                        type="submit"
                                        disabled={processing || isResendDisabled}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base"
                                    >
                                        {processing ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : isResendDisabled ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Wait {resendCooldown}s
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                </svg>
                                                Resend Verification Email
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Logout Link */}
                                <div className="text-center">
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center gap-1.5 w-full py-2 rounded-lg hover:bg-gray-50"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                        </svg>
                                        Log Out
                                    </Link>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex justify-center gap-6 text-xs text-gray-400">
                                    <span>Secure • Encrypted</span>
                                    <span>•</span>
                                    <span>© {new Date().getFullYear()} Career Builder</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-4 flex justify-center gap-6 text-xs text-gray-400">
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                            <span>Secure Connection</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                            <span>Privacy Protected</span>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}