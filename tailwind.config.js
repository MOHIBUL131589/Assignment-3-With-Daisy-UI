/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors:{
        'button-color': 'rgba(171, 239, 95, 1)',
        'button-color-1': 'rgba(171, 239, 95, 0.5)'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

