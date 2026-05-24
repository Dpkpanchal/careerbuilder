//import 'bootstrap/dist/css/bootstrap.min.css';

//import './bootstrap';

// if (!window.location.pathname.startsWith('/admin')) {
//     import('@/Styles/globals.css');
//     import('@/Styles/forum.css');
// }

const path = window.location.pathname;

// Load global styles for all non-admin pages
if (!path.startsWith("/admin")) {
    import("@/Styles/globals.css");

    // Load forum.css ONLY when NOT home page (/)
    if (path !== "/") {
        import("@/Styles/forum.css");
    }
}

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'My App';

<link
  rel="preload"
  as="image"
  href="/images/hero-bg-6985ea392a88a-1024.webp"
  imagesrcset="/images/hero-bg-6985ea392a88a-640.webp 640w, /images/hero-bg-6985ea392a88a-1024.webp 1024w, /images/hero-bg-6985ea392a88a-1440.webp 1440w"
  imagesizes="100vw"
/>




const pages = import.meta.glob('./Pages/**/*.jsx');

// createInertiaApp({
//     title: (title) => title ? `${title} - ${appName}` : appName,
//     resolve: (name) => {
//         // Handle both frontend and admin pages
//         return resolvePageComponent(
//             `./Pages/${name}.jsx`,
//             import.meta.glob('./Pages/**/*.jsx'),
//         );
//     },
//     setup({ el, App, props }) {

//         const root = createRoot(el);

//         root.render(<App {...props} />);
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,

    resolve: async (name) => {
        const pagePath = `./Pages/${name}.jsx`;

        if (pages[pagePath]) {
            const page = await pages[pagePath]();
            return page;
        }

        // ✅ fallback to NotFound page
        const notFound = await pages['./Pages/NotFound.jsx']();
        return notFound;
    },

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },

    progress: {
        color: '#4B5563',
    },
});
