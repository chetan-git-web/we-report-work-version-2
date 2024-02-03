
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['"Fredoka"'],
        noto: ["'Noto Sans'"],
        dmSans: ["'DM Sans'"],
      }
    },
  },
  plugins: [],
}