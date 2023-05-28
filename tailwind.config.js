/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-roboto-mono)'],
        russo: ['var(--font-russo-one)']
      },
      colors: {
        'background': 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        'accent-light': 'var(--accent-light)',
        'accent-medium': 'var(--accent-medium)',
        'accent-dark': 'var(--accent-dark)',
        'type-primary': 'var(--type-primary)',
        'type-secondary': 'var(--type-secondary)',
        'type-tertiary': 'var(--type-tertiary)'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
