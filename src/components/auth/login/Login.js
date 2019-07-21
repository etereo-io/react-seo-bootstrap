import React from 'react'
import BasePage from '../../BasePage'
import { Helmet } from 'react-helmet'

class Login extends BasePage {

  render() {
    return (
      <div className="login">
        <Helmet>
          <title>{this.state.metadata.title}</title>
          <meta
            name="description"
            content={this.state.metadata.description}
          />
        </Helmet>
        Login Works!
      </div>
    )
  }
}

export default Login
