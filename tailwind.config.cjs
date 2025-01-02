const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const lineClamp = require('@tailwindcss/line-clamp');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const plugin = require('tailwindcss/plugin'); // Import plugin for custom utilities

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'border-spin': 'border-spin 2s linear infinite',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
      screens: {
        '3xl': '1600px',
      },
      fontFamily: {
        poppins: ['Poppins', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'], // Add the custom font family here
      },
    },
  },

  daisyui: {
    themes: [
      {
        adhyaaya23: {
          primary: '#ffffff',
          secondary: '#ffd700',
          accent: '#222A51',
          neutral: '#191D24',
          'base-100': '#000000',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#f2b8b5',
          error: '#b32613',
        },
      },
    ],
  },

  plugins: [
    forms,
    typography,
    lineClamp,
    aspectRatio,
    daisyui,
    // Add the custom plugin for text shadow
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 0 10px rgba(255, 255, 0, 0.673)',
        },
        '.on-scroll-visible': {
          animation: 'fadeUp 0.7s ease-out forwards',
        },
      });
    }),
  ],
};

module.exports = config;
