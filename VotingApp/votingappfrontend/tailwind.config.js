/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        blue: "#4c3ed8",
        silver: "#ecebff",
        bermuda: "#78dcca",
        gray: "#f5f5f6",
        lightgray: "#747579",
        lightpurple: "#857be4",
        hoverpurple: "#edecfb",
        dot: "#f7c32e",
        bordergray: "#9b9c9f",
        red: "#d6293e",
        black: "#000000",
        darkblue: "#0f172a",
        loginborder: "#e5e5e5",
        lightgreen: "#e6f8f3",
        peach: "#fbe9eb",
        lightred: "#fbe9eb",
        skyblue: "#e7f6f8",
        goldstar: "#f7c32e",
        bluegray: "#191b1f",
        darkgray: "#2a2c31",
        darkgray1: "#191b1d",
        brightgreen: "#0cbc87",
        lightgray1: "#dfdfe3",
        facebook: "#5D82D1",
        instagram: "#C22B72",
        twitter: "#40BFF5",
        linkedin: "#238CC8",
        lightorange: "#fff2e7",
        orange: "#fda36d",
        pink: "#d10568",
      },

      fontFamily: {
        // 'sans': ['ui-sans-serif', 'system-ui'],
        // 'serif': ['ui-serif', 'Georgia', ...],
        // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
        // 'display': ['Oswald', ...],
        dmsans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        backgroundimage: "url('Assets/images/Home/bg.svg')",
        banner: "url('Assets/images/Home/banner.png')",
      },
    },
  },
  plugins: [],
};