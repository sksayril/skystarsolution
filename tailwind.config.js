/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      fontSize: {
        'heading-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'heading-lg': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-md': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'heading-sm': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'body-lg': ['1.25rem', { lineHeight: '1.6' }],
        'body-md': ['1.125rem', { lineHeight: '1.6' }],
        'body-sm': ['1rem', { lineHeight: '1.5' }],
        'caption': ['0.875rem', { lineHeight: '1.4' }],
        'code': ['0.875rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
};
