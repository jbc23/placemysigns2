import React, { Component } from 'react'
import Logo from './assets/placemysigns-logo.svg'

class MainNav extends Component {
  render() {
    return(
      <ul className="main-nav">
        <li><img className="logo" src={Logo} /></li>
        <ul className="nav-items">
          <li>Home</li>
          <li>Pricing</li>
          <li>Support</li>
        </ul>
        <div className="vertical-line-sep"></div>
        <ul className="nav-ctas">
          <li><button>Schedule Sign Placment</button></li>
          <li><button className="hire-btn">Hire Sign Placers</button></li>
        </ul>
      </ul>
    )
  }
}

export default MainNav;
