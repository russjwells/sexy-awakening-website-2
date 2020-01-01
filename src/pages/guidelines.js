import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Guidelines = () => (
  <Layout>
    <SEO title="Guidelines" />
    <h1>Guidelines</h1>
    <p>Guidelines for Sexy Awakening</p>
    <ul>
      <li>Honor</li>
      <li>Integrity</li>
      <li>Respect</li>
      <li>Consent</li>
      <li>Boundary awareness</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Guidelines