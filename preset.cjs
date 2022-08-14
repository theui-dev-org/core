/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const config = {
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand                     : 'rgb(var(--ui-brand) / <alpha-value>)',
        "brand-active"            : 'rgb(var(--ui-brand-active) / <alpha-value>)',
        "brand-secondary"         : 'rgb(var(--ui-brand-secondary) / <alpha-value>)',
        "brand-secondary-active"  : 'rgb(var(--ui-brand-secondary-active) / <alpha-value>)',
        "on-brand"                : 'rgb(var(--ui-text-on-brand) / <alpha-value>)',
        primary                   : 'rgb(var(--ui-bg-primary) / <alpha-value>)',
        secondary                 : 'rgb(var(--ui-bg-secondary) / <alpha-value>)',
        tertiary                  : 'rgb(var(--ui-bg-tertiary) / <alpha-value>)',
      },
      textColor : {
        brand                     : 'rgb(var(--ui-brand) / <alpha-value>)',
        "brand-active"            : 'rgb(var(--ui-brand-active) / <alpha-value>)',
        "brand-secondary"         : 'rgb(var(--ui-brand-secondary) / <alpha-value>)',
        "brand-secondary-active"  : 'rgb(var(--ui-brand-secondary-active) / <alpha-value>)',
        "on-brand"                : 'rgb(var(--ui-text-on-brand) / <alpha-value>)',
        default                   : 'rgb(var(--ui-text-default) / <alpha-value>)',
      },
      backgroundColor : {
        brand                     : 'rgb(var(--ui-brand) / <alpha-value>)',
        "brand-active"            : 'rgb(var(--ui-brand-active) / <alpha-value>)',
        "brand-secondary"         : 'rgb(var(--ui-brand-secondary) / <alpha-value>)',
        "brand-secondary-active"  : 'rgb(var(--ui-brand-secondary-active) / <alpha-value>)',
        primary                   : 'rgb(var(--ui-bg-primary) / <alpha-value>)',
        secondary                 : 'rgb(var(--ui-bg-secondary) / <alpha-value>)',
        tertiary                  : 'rgb(var(--ui-bg-tertiary) / <alpha-value>)',
      },
			fontWeight: ['dark'],
			fill : ['dark'],
		},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-child)')
      addVariant('not-last', '&:not(:last-child)')
    })
  ],
}

module.exports = config
