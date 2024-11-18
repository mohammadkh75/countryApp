export default {
  content: ['./src/**/*.{html,ts}', './**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        semibold: '600',
        extrabold: '800',
      },
      colors :{
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlueBg: 'hsl(207, 26%, 17%)',
        veryDarkBlueText: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)'

      },
      fontSize: {
        base: '14px',
        detail: '16px'
      },
    },
  },
  plugins: [],
};
