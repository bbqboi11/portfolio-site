const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/ben.newcomer/Code/corey-portfolio-site/src/pages/404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/ben.newcomer/Code/corey-portfolio-site/src/pages/about.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/ben.newcomer/Code/corey-portfolio-site/src/pages/index.jsx"))),
  "component---src-pages-works-jsx": hot(preferDefault(require("/Users/ben.newcomer/Code/corey-portfolio-site/src/pages/works.jsx")))
}

