import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Deb's Space"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
      
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>I am a Software Engineer with 10+ years of experience with various back-end technologies. You are on my home page.</p>
		Here's my &nbsp;
        
        <Link to="https://debamitra.github.io/debs-journal/">
          journal
        </Link>
		!
      </Layout>
    )
  }
}

export default IndexPage
