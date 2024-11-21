/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#82AB8D',
        'primary-hover': '#75A080',
        'input-border': '#E5E7EB',
        'input-text': '#374151',
        'label-text': '#111827',
      }
    },
  },
  plugins: [],
}

