import React from 'react'
import TeaserRegister from '../teasers/teaser-register/TeaserRegister'
import BasePage from '../BasePage'
import { Helmet } from 'react-helmet'

class Home extends BasePage {
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>{this.state.metadata.title}</title>
          <meta name="description" content={this.state.metadata.description} />
        </Helmet>
        <div className="content">
          <TeaserRegister />
        </div>
      </div>
    )
  }
}

export default Home
