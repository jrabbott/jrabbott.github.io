import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://jrabbott.github.io',
    integrations: [
        starlight({
            title: 'Jon Abbott v1.1',
            customCss: ['./src/styles/custom.css'],
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/jrabbott',
                },
            ],
            sidebar: [
                { label: 'GET /overview', link: '/' },
                { label: 'GET /specs', link: '/specs/' },
                { label: 'CONFIG /management', link: '/management/' },
                { label: 'POST /communication', link: '/comms/' },
                { label: 'ENV /drivers', link: '/drivers/' },
            ],
        }),
    ],
});
