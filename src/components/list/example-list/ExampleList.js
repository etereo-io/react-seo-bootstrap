import React from 'react'
import BasePage from '../../BasePage'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { loadList } from '../../../services/list/listService'

class ExampleList extends BasePage {
  load() {
    loadList().then(items => {
      this.setState({
        data: items
      })
    })
  }
  transformSSRMetadata() {
    if (this.state.data && this.state.data.length) {
      this.props.staticContext.metadata.description = this.state.data.length + ' items on this list'
    }
  }
  render() {
    return (
      <div className="ExampleList">
        <Helmet>
          <title>{this.state.metadata.title}</title>
          <meta
            name="description"
            content={this.state.metadata.description}
          />
        </Helmet>

        {this.state.data
          ? this.state.data.map(item => (
              <div className="item" key={item.slug}>
                <Link to={`/list/detail/${item.slug}`} title="See detail">
                  {item.name}
                </Link>
              </div>
            ))
          : null}
      </div>
    )
  }
}

export default ExampleList
