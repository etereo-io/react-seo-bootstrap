import React from 'react'
import BasePage from '../../BasePage'
import { Helmet } from 'react-helmet'
import { loadItem } from '../../../services/list/listService'

class ItemDetail extends BasePage {
  load() {
    const { slug } = this.props.match.params

    loadItem(slug).then(item => {
      this.setState({
        data: item
      })
    })

  }

  transformSSRMetadata() {
    if (this.state.data) {
      this.props.staticContext.metadata.title = this.props.staticContext.metadata.title.replace('%item', this.state.data.name)
    }
  }

  render() {
    return (
      <div className="ItemDetail">
        <Helmet>
          <title>{this.state.metadata.title.replace('%item', this.state.data ? this.state.data.name : '')}</title>
          <meta
            name="description"
            content={this.state.metadata.description}
          />
        </Helmet>
        {this.state.data ? this.state.data.name : null}
      </div>
    )
  }
}

export default ItemDetail
