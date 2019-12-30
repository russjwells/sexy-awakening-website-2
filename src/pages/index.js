import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p><b>Android: </b><a href="https://play.google.com/store/apps/details?id=com.DigitalHyperspace.SexyAwakening">Download from the Play Store</a> <b>iOS: </b>Coming Soon <b>Web: </b>Coming Soon</p>
    <p>Sexy Awakening is the best way to meet new romantic interests, lovers, and friends online. Explore conscious sexuality and relationships!</p>
    <h2>Swipe With Intention</h2>
    <p>Swipe right for sex, up for romance, left for friendship, and down to pass. If someone swipes on you with the same intention you are connected and can begin connecting with a <b>mutual understanding</b>.</p>
    <h2>About Us</h2>
    <p>We believe that relationships are a <b>transformational experience</b> and we exist in order to facilitate <b>evolutionary connections</b>. We encourage honest upfront communication and radical self-expression on our platform. Sexy Awakening is a place for and to connect with beings of <b>higher consciousness</b>. This is a sex positive and inclusive space held for everyone to express, grow, play and connect through. On Sexy Awakening there is space for your sexuality, desires, and abilities in their fullnesses. We understand sexuality to be fluid, gender as nonbinary, and everyone as sacred. Sexy Awakening is designed to cultivate higher consciousness in its members and create a culture of consent on Earth by enhancing your life with quality, meaningful, and impactful connections. Enjoy yourselves.</p>
    <h2>Membership</h2>
    <p>Sexy Awakening is <b>free to join</b>. Full memberships will be available for $11 per month. You must be 18 or older to create an account.</p>
    <h2>How to Join</h2>
    <p>We are in the approval process for the app stores. For now, use these options:</p>
    <p><b>Android: </b><a href="https://play.google.com/store/apps/details?id=com.DigitalHyperspace.SexyAwakening">Download from the Play Store</a> <b>iOS: </b>Coming Soon <b>Web: </b>Coming Soon</p>
    {/*<p>iPhone users download the app <a href="https://testflight.apple.com/join/A52QNb4b">here</a>. Android users can download the App in the <a href="https://play.google.com/store/apps/details?id=com.DigitalHyperspace.SexyAwakening">Play Store.</a></p>*/}
    <h2>Conscious Culture</h2>
    <p>Sexy Awakening encourages a culture of immediacy, sexuality, play, exploration, intuition, and transformation, grounded in a deeply rooted sense of autonomy, respect, and consent.</p>
    <p>Sexy Awakening is a transformational space.</p>
    <p>Please take a look at our <Link to="/guidelines/">guidelines</Link> before connecting.</p>
    <h2>Support Us on Patreon</h2>
    <p>Sexy Awakening is independently run and self-funded. We are accepting financial support for Sexy Awakening's initial development and launch. If you'd like to support us before memberships are live then you may <a href="https://www.patreon.com/sexyawakening">become our Patron</a> on Patreon. Sexy Awakening is independently created and self-funded. Your financial support helps keep Sexy Awakening soverign and free of influence from corporate interests.</p>
    <h2>Coming Soon</h2>
    <p>We are adding more features to make Sexy Awakening even more activating, empowering, and safe. <Link to="/coming-soon/">See more</Link>.</p>
  </Layout>
)

export default IndexPage
