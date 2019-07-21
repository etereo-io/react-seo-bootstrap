import React from 'react'

class BasePage extends React.Component {
  constructor(props) {
    super(props)

    // Read from static context sended by ssr in the server rendering
    this.state = {
      data: props.staticContext ? props.staticContext.data : null,
      metadata: props.metadata
    }

    // Initialize metadata
    this.transformSSRMetadata()
  }

  componentDidMount() {
    setTimeout(() => {
      // Hydrate with window data on the client side
      if (window.__ROUTE_DATA__) {
        this.setState({
          data: window.__ROUTE_DATA__
        })
        delete window.__ROUTE_DATA__
      } else {
        if (this.load) {
          this.load()
        }
      }
    }, 0)
  }

  transformSSRMetadata() {
    // Implement if needed
  }
}

export default BasePage
