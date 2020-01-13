import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>To contact Sexy Awakening send an email to sexyawakening@gmail.com</p>
    <h2>Address</h2>
    <p>
      Sexy Awakening <br />
      1223 Cleveland Ave., #200-114 <br />
      San Diego, CA 92103 <br />
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact