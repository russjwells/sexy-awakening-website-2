import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer>
    <div
        style={{
        background: '#e54560',
        marginBottom: '0',
        }}
    >
        <div
        style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
        }}
        >
        <p style={{color:'white'}}>© {new Date().getFullYear()}, 
            {` `} Sexy Awakening &nbsp; | &nbsp;
        <Link to="/guidelines/" style={{color:'white', textDecoration:'none'}}>Guidelines</Link> | &nbsp;
        <Link to="/privacy-policy/" style={{color:'white', textDecoration:'none'}}>Privacy Policy</Link> | &nbsp;
        <Link to="/terms-of-service/" style={{color:'white', textDecoration:'none'}}>Terms of Service</Link> | &nbsp;
        <Link to="/careers/" style={{color:'white', textDecoration:'none'}}>Careers</Link> | &nbsp;
        <Link to="/contact/" style={{color:'white', textDecoration:'none'}}>Contact</Link> &nbsp;
        <br /><br />
        <a href="https://www.instagram.com/sexyawakening/" style={{color:'white', textDecoration:'none'}}>Instagram</a> | &nbsp;
        <a href="https://www.facebook.com/SxxyAwakening/" style={{color:'white', textDecoration:'none'}}>Facebook</a> | &nbsp;
        <a href="https://twitter.com/sexyawakening" style={{color:'white', textDecoration:'none'}}>Twitter</a> &nbsp;
        </p>
        </div>
    </div>
  </footer>
)

export default Footer




