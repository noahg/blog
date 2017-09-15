import Typography from 'typography'
import Wordpress2014 from 'typography-theme-wordpress-2014'

const typography = new Typography(Wordpress2014)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography