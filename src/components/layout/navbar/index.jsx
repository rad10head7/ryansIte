import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import {NavbarElement, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <span className="align-middle"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
