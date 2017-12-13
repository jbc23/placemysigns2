import React, { Component } from 'react'
import HeroContent from './HeroContent/index.jsx'
import Button from './Button/index.jsx'
import PMSPros from './PmsPros/index.jsx'

class HomeBanner extends Component {
  render() {
    return(
      <div>
        <div className="blue-bg">
          <div className="container-lg">
            <HeroContent/>
            <Button/>
            <h3>Placemysigns Professionals</h3>
            <PMSPros/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeBanner;
