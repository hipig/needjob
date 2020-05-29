module.exports = {
  purge: [],
  theme: {
    extend: {
      skew: {
        '20': '20deg',
        '-20': '-20deg'
      },
      width: {
        '7': '1.75rem',
      },
      height: {
        '7': '1.75rem',
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
