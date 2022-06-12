/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {},
  },
  variants: ["responsive", "group-hover", "hover", "focus", "active"],
  plugins: [],
}