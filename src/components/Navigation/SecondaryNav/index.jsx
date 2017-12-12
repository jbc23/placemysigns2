import React, { Component } from 'react'
import FacebookIcon from './assets/fb.svg'
import InstaIcon from './assets/ig.svg'
import TwitterIcon from './assets/twitter.svg'

class SecondaryNavbar extends Component {
  render() {
    return(
      <ul className="secondary-nav">
        <li className="phone"><span>C:</span> 415-941-3005</li>
        <li className="contact-us">Questions?<a href=""> Contact Us</a></li>
        <ul className="social">
          <li className="icon"><img src={FacebookIcon}/></li>
          <li className="icon"><img src={InstaIcon}/></li>
          <li className="icon"><img src={TwitterIcon}/></li>
        </ul>
      </ul>
    )
  }
}

export default SecondaryNavbar;
