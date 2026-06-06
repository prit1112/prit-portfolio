import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        electric: '#3b82f6'
      },
      boxShadow: {
        'soft-glow': '0 0 0 1px rgba(59,130,246,0.25)'
      }
    }
  },
  plugins: []
} satisfies Config;

