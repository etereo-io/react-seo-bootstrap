import React from 'react'
import config from '../../app.config'
import { Link } from 'react-router-dom'
import './footer.scss'

function Footer() {
  const links = [
    {
      route: '/login',
      text: 'login'
    },
    {
      route: '/list',
      text: 'The list page'
    }
  ]
  const linksComponent = links.map(link => {
    return (
      <li key={link.route}>
        <Link title={link.text} to={link.route}>
          {link.text}
        </Link>
      </li>
    )
  })
  return (
    <div className="footer">
      <div className="content">
        <h3>About</h3>
        <ul>
          {linksComponent}
          <li>
            <a href="/sitemap.xml" title="Sitemap">
              Sitemap
            </a>
          </li>
        </ul>
        <div className="social">
          <a title="Visit our facebook" href={config.social.facebook}>
            {' '}
            Facebook
          </a>
          <a title="Visit our instagram" href={config.social.instagram}>
            Instagram
          </a>
          <a title="Visit our twitter" href={config.social.twitter}>
            Twitter
          </a>
        </div>
        <div className="copy">
          <span role="img" aria-label="pizza">
            🍕
          </span>{' '}
          {config.copy}
        </div>
      </div>
    </div>
  )
}

export default Footer
