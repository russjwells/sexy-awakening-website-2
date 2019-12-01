import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Sexy Awakening is the best way to meet new romantic interests, lovers, and friends online. Explore conscious sexuality and relationships!</p>
    <h2>Swipe With Intention</h2>
    <p>Swipe right for sex, up for romance, left for friendship, and down to pass. If someone swipes on you with the same intention you are connected and can <b>begin connecting with a mutual understanding</b>. Sexy Awakening cultivates higher consciousness, a culture of consent, and intentional connections.</p>
    <h2>About Us</h2>
    <p>We believe that relationships are a <b>transformational experience</b> and we exist in order to facilitate <b>evolutionary connections</b>. We encourage honest upfront communication and radical self-expression on our platform. Sexy Awakening is a place for and to connect with beings of <b>higher consciousness</b>. This is a sex positive and inclusive space held for everyone to express, grow, play and connect on. On Sexy Awakening there is space for your sexuality, desires, and abilities in their fullnesses. We understand sexuality to be fluid, gender as nonbinary, and everyone as sacred. Enjoy yourselves.</p>
    <h2>Membership</h2>
    <p>Sexy Awakening is <b>free to join</b>. Unlimited memberships will be available for $11 per month. They include unlimited connections and advanced match filters. You must be 18 or older to create an account.</p>
    <h2>How to Join</h2>
    <p>Relaunching soon for iOS, Android, and the web.</p>
    {/*<p>iPhone users download the app <a href="https://testflight.apple.com/join/A52QNb4b">here</a>. Android users can download the App in the <a href="https://play.google.com/store/apps/details?id=com.DigitalHyperspace.SexyAwakening">Play Store.</a></p>*/}
    <h2>Conscious Culture</h2>
    <p>Sexy Awakening encourages a culture of immediacy, sexuality, play, exploration, intuition, and transformation, grounded in a deeply rooted sense of autonomy, respect, and consent.</p>
    <p>Please take a look at our <Link to="/guidelines/">guidelines</Link> before connecting.</p>
    <h2>Support via Patreon</h2>
    <p>Sexy Awakening is independently run and self-funded. We are accepting financial support for Sexy Awakening's initial development and launch. If you'd like to support us before memberships are live then <a href="https://www.patreon.com/sexyawakening">become our Patron on Patreon</a>. Sexy Awakening is independently run and self-funded. Your financial support helps keep Sexy Awakening soverign and free of influence from corporate interests.</p>
    <h2>Coming Soon</h2>
    <p>We are adding more features to make Sexy Awakening even more, activating, empowering, evolutionary, and safe. See what's <Link to="/coming-soon/">brewing</Link>.</p>
  </Layout>
)

export default IndexPage
