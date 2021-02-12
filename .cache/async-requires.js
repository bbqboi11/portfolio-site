// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-jsx": () => import("./../../../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-about-jsx": () => import("./../../../src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-index-jsx": () => import("./../../../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-works-jsx": () => import("./../../../src/pages/works.jsx" /* webpackChunkName: "component---src-pages-works-jsx" */)
}

