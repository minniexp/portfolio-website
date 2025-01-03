/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lightAccent: 'hsl(60, 4.35%, 95.49%)',
      },
      fontFamily: {
        merriweather: ['var(--font-merriweather)', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        halyard: ['halyard-display', 'sans-serif'],
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
