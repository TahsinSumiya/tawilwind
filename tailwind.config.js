/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
         sm:'480px',
         md:'768px',
         lg:'976px',
         xl:'1440px'
    },

    extend: {
    colors:{
    navyblue:'#120538',
    red:'#db0909',
    sky:'#0956db',
    grey:'#414142',
    lightgrey:'#7e7f80',
    white:'#f5f6f7',
    black:'#000000'
  },


    },
  },
  plugins: [],
}
