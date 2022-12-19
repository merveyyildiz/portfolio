/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        istok: ["Istok", ...theme.fontFamily.sans],
        rockNRoll: ["RocknRoll One", ...theme.fontFamily.sans]
      },
      colors: {
        "primary-light": "#f8f8f8",
        "primary-dark": "#191919",
        "gray-dark": "#141c2e",
        "gray-light":"#",
        pinkish: {
          100: "#edb5f5",
          200: "#eb7ad4",
          300: "#e86ed0"
        },
        bluish: {
          100: "#e6f8f8",
          200: "#b1e8ed"
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#e86ed0",
              "&:hover": {
                color: "#edb5f5",
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.purple.400"),
              "&hover": {
                color: theme("colors.purple.300")
              },
            },
          },
        },
      }),
    },
  },
  varients: {
    extend: {
      typography: ["dark"]
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}