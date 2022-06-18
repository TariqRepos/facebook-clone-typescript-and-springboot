/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'fb-blue': '#3b5998',
      },
    },
  },
  variants: ["responsive", "group-hover", "hover", "focus", "active"],
  plugins: [],
}