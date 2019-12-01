import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TermsOfService = () => (
  <Layout>
    <SEO title="Terms Of Service" />
    <h1>Sexy Awakening Closed Beta</h1>
    <p>To request an invite to Sexy Awakening send an email to sexyawakening@gmail.com</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TermsOfService