/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('active-link', [
        '&[data-status="active"]',
        '[data-status="active"] &',
      ])
    },
  ],
}
