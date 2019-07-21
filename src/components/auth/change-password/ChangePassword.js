import React from 'react'
import BasePage from '../../BasePage'
import { Helmet } from 'react-helmet'

class ChangePassword extends BasePage {

  render() {
    return (
      <div className="ChangePassword">
        <Helmet>
          <title>{this.state.metadata.title}</title>
          <meta
            name="description"
            content={this.state.metadata.description}
          />
        </Helmet>
        ChangePassword Works!
      </div>
    )
  }
}

export default ChangePassword
