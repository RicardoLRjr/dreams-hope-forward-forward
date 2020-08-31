import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Welcome! {" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>This is the beginning of my new blog, Dreams, Hope, Forward, Forward*</p>
        <p>
         The blog is still under construction, but once I've finished it this will be the home page. Hope you'll stick around!
        </p>
        <p>*bet you can't guess what this is a reference too <span role="img" aria-label="wink emoji">
          😉</span></p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
