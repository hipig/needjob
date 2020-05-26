module.exports = {
  purge: [],
  theme: {
    extend: {
      skew: {
        '20': '20deg',
        '-20': '-20deg'
      }
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
