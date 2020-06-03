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
    customForms: theme => ({
      default: {
        'checkbox, radio': {
          color: theme('colors.teal[600]'),
          borderWidth: theme('borderWidth.2'),
          borderColor: '#d2d6dc',
          '&:focus': {
            borderWidth: theme('borderWidth.default'),
            borderColor: theme('colors.teal[400]'),
            boxShadow: theme('boxShadow.outline-teal'),
          },
        },
      },
    })
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
