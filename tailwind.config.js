/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      maxWidth: {
        1920: '1920px',
      },
      colors: {
        primary: '#4338CA',
        hilight: '#667eea',
        'body-primary': '#f3f4f6',
        'input-default': '#d1d5db',
        'input-error': '#f87171',
        'text-input-error': '#f87171',
      },
      height: {
        '100vh-[header+footer]': 'calc(100vh - 136px)',
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
