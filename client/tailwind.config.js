module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // Set Outfit as the default sans font
      edu: ['Edu SA Beginner', 'cursive'], // Optional: Add other fonts
        lato: ['Lato', 'sans-serif'], // Optional: Add other fonts
      },
    },
  },
  plugins: [],
}