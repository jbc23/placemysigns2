import React, { Component } from 'react'
import SecondaryNavbar from './SecondaryNav/index.jsx'
import MainNav from './MainNav/index.jsx'

class Nav extends Component {
  render() {
    return(
      <div>
        <div className="container-full-width">
          <div className="container-lg">
            <SecondaryNavbar />
          </div>
        </div>
        <div className="container-lg">
          <MainNav />
        </div>
      </div>
    )
  }
}

export default Nav;
