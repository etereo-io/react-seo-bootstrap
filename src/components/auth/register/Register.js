import React from 'react'
import BasePage from '../../BasePage'
import { Helmet } from 'react-helmet'

class Register extends BasePage {

  render() {
    return (
      <div className="Register">
        <Helmet>
          <title>{this.state.metadata.title}</title>
          <meta
            name="description"
            content={this.state.metadata.description}
          />
        </Helmet>
        Register Works!
      </div>
    )
  }
}

export default Register
