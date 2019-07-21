import React from 'react'
import BasePage from '../BasePage'
import { Helmet } from 'react-helmet'

import { Generic, GenericCollection, JSONLD } from 'react-structured-data'
class Faqs extends BasePage {
  faqs = [
    {
      question: 'Some question?',
      answer: 'Some answer',
      id: 1
    },
    {
      question: 'Another question?',
      answer: 'Another answer',
      id: 2
    }
  ]

  render() {
    return (
      <div className="faqs-page">
        <Helmet>
          <title>{this.state.metadata.title}</title>
          <meta name="description" content={this.state.metadata.description} />
        </Helmet>
        <JSONLD>
          <Generic type="FAQPage" jsonldtype="FAQPage">
            <GenericCollection type="mainEntity">
              {this.faqs.map(faq => (
                <Generic
                  key={faq.id}
                  jsonldtype="Question"
                  schema={{ name: faq.question }}
                >
                  <Generic
                    type="acceptedAnswer"
                    jsonldtype="Answer"
                    schema={{ text: faq.answer }}
                  />
                </Generic>
              ))}
            </GenericCollection>
          </Generic>
        </JSONLD>

        <div className="faq-list">
          {this.faqs.map(faq => (
            <div className="faq" key={faq.id}>
              <h2>{faq.question}</h2>
              <p className="answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Faqs
