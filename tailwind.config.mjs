/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#6B9E78',
          light: '#8BB896',
          dark: '#558060',
        },
        amber: {
          DEFAULT: '#D4956A',
          light: '#E0AA7D',
          dark: '#C07A4E',
        },
        slate: {
          DEFAULT: '#2D3A45',
          light: '#3D4F5C',
          dark: '#1E2830',
        },
        cream: '#F8F5F0',
        stone: '#EDE9E2',
        pearl: '#FEFCFA',
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
