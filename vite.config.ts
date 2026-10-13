import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ mode }) => {
    // Base path: prefer VITE_BASE env (set by CI for GitHub Pages project pages);
    // fall back to "/" for root-domain hosting.
    const base = process.env.VITE_BASE || '/';
    return {
        base,
        plugins: [react(), tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '.'),
            },
        },
    };
});
