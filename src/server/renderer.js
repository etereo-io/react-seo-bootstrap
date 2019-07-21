import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import serialize from 'serialize-javascript'

// import our main App component
import App from '../App'
import Routes from '../routes'

const path = require('path')
const fs = require('fs')

export default (req, res) => {

  const route = Routes.find(route => matchPath(req.url, route)) || {}
  let promise

  // Preload data if the route requires so
  if (route.loadData) {
    const match = matchPath(req.path, route)
    promise = route.loadData(match)
  } else {
    promise = Promise.resolve(null)
  }

  promise.then(data => {
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html')

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
      if (err) {
        console.error('err', err)
        return res.status(404).end()
      }

      // render the app as a string
      // Let's add the data to the context
      const context = { data, metadata: route.metadata }

      const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )

      // Using context from the 404
      if (context.status === 404) {
        res.status(404)
      }

      // We can trigger redirects from the client side using context url
      if (context.url) {
        return res.redirect(301, context.url)
      }

      // inject the rendered app into our html and send it
      return res.send(
        htmlData
          .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
          .replace(
            '</body>',
            `<script>window.__ROUTE_DATA__ = ${serialize(data)}</script></body>`
          )
          .replace('_META_TITLE_', context.metadata.title)
          .replace('_META_DESCRIPTION_', context.metadata.description)
      )
    })
  })
}
