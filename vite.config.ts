import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'
import sidebar from './config/sidebar'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar,
        github: 'https://github.com/Cyfrin/codehawks-docs',
        logo: '/logo-transparent.png',
      }),
      siteConfig: {
        title: 'CodeHawks Docs',
        description: 'A content centered site build tool',
      },
    }),
  ],
})

export default config
