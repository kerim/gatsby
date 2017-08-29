import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          This is a test of Gatsby!
        </h1>
        <p>Consuetudium lectorum Mirum est notare. Eodem modo typi qui nunc nobis videntur parum clari fiant sollemnes in futurum? Assum Typi non habent claritatem insitam est usus legentis in iis. Claritatem Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius Claritas est etiam. Nam liber tempor cum soluta. Est etiam processus dynamicus qui.</p>
      </div>
    )
  }
}
