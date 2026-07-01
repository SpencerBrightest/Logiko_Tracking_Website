/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E63946',
        'primary-dark': '#C1121F',
        navy: '#1A1F2E',
        'navy-light': '#252B3B',
        'navy-dark': '#10141F',
        accent: '#3B82F6',
        success: '#22C55E',
        warning: '#F4B400',
        danger: '#E63946',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
