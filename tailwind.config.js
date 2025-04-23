/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {

      },
      textShadow: {
        'default': '0 0 8px #ffffff',
        'sm': '0 0 4px #ffffff',
        'md': '0 0 12px #ffffff',
        'lg': '0 0 16px #ffffff',
        'none': 'none',
      },
    },
  },
  plugins: [

    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.textglow': {
          textShadow: theme('textShadow.default'),
        },
        '.textglow-sm': {
            textShadow: theme('textShadow.sm'),
        },
        '.textglow-md': {
            textShadow: theme('textShadow.md'),
        },
        '.textglow-lg': {
            textShadow: theme('textShadow.lg'),
        },
        '.textglow-none': {
            textShadow: theme('textShadow.none'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};