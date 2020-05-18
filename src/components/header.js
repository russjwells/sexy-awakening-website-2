import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/phoenix_red.svg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#e54560`,
            textDecoration: `none`,
          }}
        >
          <div 
          style={{
            fontSize: '2em', 
            fontFamily: 'helvetica, arial, sans-serif',
            fontWeight: 'bold',
            display: 'flex',
            flex: '1',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <img src={logo} width="80" height="80" />
            {siteTitle}
          </div>
        </Link>
      </div>
      <div
        style={{
          color: `#e54560`,
          textDecoration: `none`,
          fontFamily: 'helvetica, arial, sans-serif',
              fontWeight: 'bold',
        }}
      >
        SWIPE WITH INTENTION
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
