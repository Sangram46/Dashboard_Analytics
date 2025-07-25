/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1',
          dark: '#818cf8',
        },
        secondary: {
          light: '#f43f5e',
          dark: '#fb7185',
        },
        background: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
        card: {
          light: '#ffffff',
          dark: '#1e293b',
        },
        text: {
          light: '#334155',
          dark: '#e2e8f0',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}