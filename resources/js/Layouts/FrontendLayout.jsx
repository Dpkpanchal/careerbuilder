import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '../Components/Frontend/Navbar';
import MegaFooter from '../Components/Frontend/Footer';



export default function FrontendLayout({ title, children }) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <main className="pt-20">
                {children}
            <MegaFooter />
            </main>
        </>
    );
}