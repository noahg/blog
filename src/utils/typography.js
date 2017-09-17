import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.8,
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  // See below for the full list of options.
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography