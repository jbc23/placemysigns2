import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return(
      <div className="container-lg">

        <p>Call 24/7 415-941-3005</p>
        <p>© Placemysigns</p>
        <div>
        <ul>
          <li>Company</li> {/* Use First Child to Style */}
          <li>Pricing</li>
        </ul>
        <ul>
          <li>Resources</li>
          <li>Support</li>
          <li>Privacy & Terms</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>FAQ</li>
          <li>Press Center</li>
        </ul>
        <ul>
          <li>Social</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
        </div>
      </div>
    )
  }
}

export default Footer;
