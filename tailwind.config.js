/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black12: '#121212',
        black18: '#181818',
        black21: '#212121',
        black32: '#323232',
        black38: '#383838',
        black47: '#474747',
        grayAAA : '#aaa',
        blue : '#3DA6FF',
        mywhite : '#fff'
    },
    fontFamily: {
        'roboto': ["Roboto", 'sans-serif'],
    },
    },
  },
  plugins: [
  ],
}

