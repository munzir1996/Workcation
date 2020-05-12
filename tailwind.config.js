module.exports = {
  purge: [],
  theme: {
    extend: {},
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.200'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          }
        },
        select: {
          borderColor: 'transparent',
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.none'),
          backgroundColor: theme('colors.gray.700'),
          '&:focus': {
            backgroundColor: theme('colors.transparent'),
          },
          lineHeight: theme('lineHeight.snug'),
          icon: '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
     
        },
        checkbox: {
          borderRadius: theme('borderRadius.lg'),
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          backgroundColor: theme('colors.gray.900'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          },
          checkedColor: theme('colors.indiga.500'),
        },
        radio: {
          borderRadius: theme('borderRadius.lg'),
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          backgroundColor: theme('colors.gray.900'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
