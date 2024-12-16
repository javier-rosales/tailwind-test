/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import { light } from "daisyui/src/theming/themes.js"
import { dark } from "daisyui/src/theming/themes.js"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...light
        },
        dark: {
          ...dark,
          "base-content": "#eeeeee"
        }
      }
    ]
  },
  darkMode: ["selector", "[data-theme='dark']"]
}

