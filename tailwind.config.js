/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./js/**/*.{html,js}"
  ],

  theme: {
    extend: {
      colors:{
        'clr-jambalaya': '#5C3713',
        'clr-peppermint': '#EAF5E4',
        'clr-alto': '#DEDEDE',
        'clr-millbrook': '#614539',
        'clr-indochine': '#C77803',

        'clr-guardman-red': '#CC0704',
      },

      fontFamily:{
        'ff-body': 'Roboto, sans-serif',
        'ff-heading': 'Dancing Script, sans-serif',
      },

      backgroundImage:{
        'banner-top': "linear-gradient(60deg,rgba(245, 236, 227, 0.7),rgba(245, 236, 227, 0.8)),url('./asset/background/banner-top.jpg')",
        'banner-middle': "linear-gradient(60deg,rgba(245, 236, 227, 0.9), rgba(245, 236, 227, 0.8)),url('./asset/background/truc-moc-vi-an.jpg')",
      }
    },

  },
  plugins: [],
}

