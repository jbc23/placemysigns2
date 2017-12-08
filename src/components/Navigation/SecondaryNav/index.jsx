import React, { Component } from 'react'
import FacebookIcon from './assets/fb.svg'
import InstaIcon from './assets/ig.svg'
import TwitterIcon from './assets/twitter.svg'

class SecondaryNavbar extends Component {
  render() {
    return(
      <ul>
        <li><span>C:</span> 415-941-3005</li>
        <li>Questions?<a href=""> Contact Us</a></li>
        <ul className="social">
          <li><img src={FacebookIcon}/></li>
          <li><img src={InstaIcon}/></li>
          <li><img src={TwitterIcon}/></li>
        </ul>
      </ul>
    )
  }
}

export default SecondaryNavbar;
