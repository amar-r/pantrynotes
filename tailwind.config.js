/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        'cream': '#faf8f5',
        'bark': '#1a1208',
        'forest': {
          50:  '#f2f7ed',
          100: '#e0ecda',
          200: '#c1d9b5',
          300: '#96be80',
          400: '#6ba34c',
          500: '#4d8230',
          600: '#3a6623',
          700: '#2d5016',
          800: '#243f12',
          900: '#1a300d',
          950: '#0f1e07',
        },
        'terra': {
          50:  '#fdf3ec',
          100: '#fbe3d1',
          200: '#f6c4a3',
          300: '#ef9d6a',
          400: '#e8763f',
          500: '#c4622d',
          600: '#a84f22',
          700: '#8a3d1b',
          800: '#6e2f15',
          900: '#572510',
        },
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
        'card':   '0 4px 20px 0 rgb(26 18 8 / 0.08)',
        'warm':   '0 8px 32px 0 rgb(26 18 8 / 0.12)',
        'header': '0 1px 4px 0 rgb(0 0 0 / 0.08)',
      },
      borderRadius: {
        'xl':  '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in':  'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.35s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
