import config from '../app.config'
import { loadList } from '../services/list/listService'

const fixedRoutes = [
  {
    loc: `${config.BASE_URL}`,
    frequency: 'daily',
    priority: 1.0
  },
  {
    loc: `${config.BASE_URL}/list`,
    frequency: 'daily',
    priority: 0.9
  }
]

export const getSitemap = async () => {
  const listItems = await loadList()

  const listsUrls = listItems.map(item => {
    return {
      loc: `${config.BASE_URL}/detail/${item.slug}`,
      frequency: 'daily',
      priority: 0.9
    }
  })

  const d = new Date()
  d.setDate(d.getDate() - 1)
  const formattedDate = new Date(d).toISOString().split('T')[0]

  const totalUrls = fixedRoutes
    .concat(listsUrls)
    .map(u => {
      return `<url>
        <loc>${u.loc}</loc>
        <lastmod>${formattedDate}</lastmod>
        <changefreq>${u.frequency}</changefreq>
        <priority>${u.priority}</priority>
      </url>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${totalUrls}
  </urlset>`
}

export const getRobots = () => {
  return `Sitemap: ${config.BASE_URL}/sitemap.xml`
}

export const getAds = () => {
  return `TODO: Put your google adsense code here`
}
