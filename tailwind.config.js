/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

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
        'ff-heading': 'Dancing+Script, sans-serif',
      },

      backgroundImage:{
        'banner-top': "url('./asset/background/banner-top.jpg')",
        'bg-middle': "url('./asset/background/truc-moc-vi-an.jpg')",
      }
    },

  },
  plugins: [],
}

