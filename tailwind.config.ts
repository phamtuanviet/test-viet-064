import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['var(--font-syne)', 'sans-serif'],
        'body': ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        brand: {
          pink: '#FF2D55',
          cyan: '#00F5FF',
          purple: '#8B5CF6',
        },
      },
    },
  },
  plugins: [],
}
export default config
