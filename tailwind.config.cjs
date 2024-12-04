function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    // Remove the following screen breakpoint or add other breakpoints
    // if one breakpoint is not enough for you
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: ({ colors }) => ({
      // ...colors,
      primary: withOpacity('--color-primary'),
      secondary: '#ff7e33',
      info: '#0C63E7',
      gray: {
        50: '#FAFAFC',
        100: '#E9E9EC',
        200: '#C6C8CD',
        300: '#ACAEB6',
        400: '#92959F',
        500: '#777C87',
        600: '#5D6370',
        700: '#434959',
        800: '#293041',
        900: '#0f172a',
      },
    }),

    extend: {
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-in-out',
        'accordion-up': 'accordion-up 0.3s ease-in-out',
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          accent: withOpacity('--accent'),
          inverted: withOpacity('--color-fill'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          accent: withOpacity('--accent'),
          inverted: withOpacity('--color-text-base'),
          card: withOpacity('--color-card'),
          'card-muted': withOpacity('--color-card-muted'),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity('--accent'),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity('--color-border'),
          fill: withOpacity('--color-text-base'),
          accent: withOpacity('--accent'),
        },
      },
      fill: {
        skin: {
          base: withOpacity('--color-text-base'),
          accent: withOpacity('--accent'),
        },
        transparent: 'transparent',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      blur: {
        0: '0',
        none: '0',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      brightness: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
      backdropBlur: ({ theme }) => theme('blur'),
      gradientColorStops: ({ theme }) => theme('colors'),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin'), require('tailwindcss-animate')],
};
