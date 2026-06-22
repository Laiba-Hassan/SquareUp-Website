/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#a4ed2e',
          400: '#a4ed2e',
          300: '#c2f56b',
        },
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#181818',
          700: '#222222',
          600: '#2c2c2c',
        },
      },
      fontFamily: {
        sans: ['"Sora"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
