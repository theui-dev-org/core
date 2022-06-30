// const defaultTheme = require('tailwindcss/defaultTheme')

// let withOpacity = (variableName) => {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`
//     }
//     return `rgb(var(${variableName}))`
//   }
// }

// let brandColors = {
//   "brand"		        : withOpacity("--brand"),
//   "brand-active"    : withOpacity("--brand-active"),
// }

// let textColors  = {
// 	"on-brand"    		: withOpacity("--text-on-brand"),
// 	"primary"    		  : withOpacity("--ui-text-primary"),
// }

// let bgColors    = {
//   "primary"					: withOpacity("--ui-bg-primary"),
//   "secondary"       : withOpacity("--ui-bg-secondary"),
//   "tertiary"        : withOpacity("--ui-bg-tertiary"),
// }

const config = {
  mode: "jit",
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand           : 'rgb(var(--ui-brand) / <alpha-value>)',
        "brand-active"  : 'rgb(var(--ui-brand-active) / <alpha-value>)',
        "on-brand"      : 'rgb(var(--ui-text-on-brand) / <alpha-value>)',
        primary         : 'rgb(var(--ui-bg-primary) / <alpha-value>)',
        secondary       : 'rgb(var(--ui-bg-secondary) / <alpha-value>)',
        tertiary        : 'rgb(var(--ui-bg-tertiary) / <alpha-value>)',
      },
      textColor : {
        brand           : 'rgb(var(--ui-brand) / <alpha-value>)',
        "brand-active"  : 'rgb(var(--ui-brand-active) / <alpha-value>)',
        "on-brand"      : 'rgb(var(--ui-text-on-brand) / <alpha-value>)',
        default         : 'rgb(var(--ui-text-default) / <alpha-value>)',
      },
      backgroundColor : {
        brand           : 'rgb(var(--ui-brand) / <alpha-value>)',
        "brand-active"  : 'rgb(var(--ui-brand-active) / <alpha-value>)',
        primary         : 'rgb(var(--ui-bg-primary) / <alpha-value>)',
        secondary       : 'rgb(var(--ui-bg-secondary) / <alpha-value>)',
        tertiary        : 'rgb(var(--ui-bg-tertiary) / <alpha-value>)',
      },
			fontWeight: ['dark'],
			fill : ['dark'],
		},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

module.exports = config
