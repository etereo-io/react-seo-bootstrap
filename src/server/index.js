import express from 'express'

import { logRequest, logError } from './logger'

// React route renderer
import serverRenderer from './renderer'
import { getSitemap, getAds, getRobots } from './sitemap'

const PORT = process.env.PORT || 3000
const path = require('path')

// initialize the application and create the routes
const app = express()

// Logging
app.use(logRequest)
app.use(logError)

const router = express.Router()

// // root (/) should always serve our server rendered page
router.use('^/$', serverRenderer)

// other static resources should just be served as they are
router.use(
  express.static(path.resolve(__dirname, '..', '..', 'build'), {
    maxAge: '30d'
  })
)

// TODO: implement data requests securely
router.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported')
})

// Sitemap Generation
router.get('/sitemap.xml', async (req, res) => {
  const site = await getSitemap()
  res.header('Content-Type', 'application/xml')
  res.send(site)
})

// Robots TXT
router.get('/robots.txt', (req, res) => {
  res.send(getRobots())
})

// Ads TXT
router.get('/ads.txt', (req, res) => {
  res.send(getAds())
})

// anything else should act as our index page
// react-router will take care of everything
router.get('*', serverRenderer)
app.use(router)

// start the app
app.listen(PORT, error => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log('listening on ' + PORT + '...')
})
