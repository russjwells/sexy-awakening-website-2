import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Careers = () => (
  <Layout>
    <SEO title="Careers" />
    <h1>Careers</h1>
    <p>If you'd like to work at Sexy Awakening, send an email to sexyawakening@gmail.com.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Careers