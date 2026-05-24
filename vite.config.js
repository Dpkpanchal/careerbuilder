import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
        dedupe: [
            '@ckeditor/ckeditor5-react',
            '@ckeditor/ckeditor5-core',
            '@ckeditor/ckeditor5-utils',
            '@ckeditor/ckeditor5-engine',
        ],
    },
});