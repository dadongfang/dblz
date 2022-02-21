module.exports = {
  // mode: 'jit',
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      // '2xl': '1536px',
      '2xl': '1350px',
      // => @media (min-width: 1536px) { ... }
    },

    // padding: {
    //   sm: '8px',
    //   md: '16px',
    //   lg: '24px',
    //   xl: '48px',
    // },
  },
  variants: {},
  plugins: [],
  colors: {
    main: '#FE5E10'
  }
};
