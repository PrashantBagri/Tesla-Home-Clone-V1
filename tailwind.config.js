export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gotham': ['gotham']
      },
      keyframes:{
        'sidebar_anim_in':{
          "0%": {transform: "translate-x-full"},
          "100%": {transform: "translate-x-0"}
        },
        Animation:{
          'sidebar_anim_in': 'sidebar_anim_in ease-in-out 1s'
        },
      }
    },
  },
  plugins: [],
}