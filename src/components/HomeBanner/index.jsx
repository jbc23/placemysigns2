import React, { Component } from 'react'
import HeroContent from './HeroContent/index.jsx'
import Button from './Button/index.jsx'

class HomeBanner extends Component {
  render() {
    return(
      <div>
        <div className="container-lg">
          <HeroContent/>
          <Button/>
        </div>
      </div>
    )
  }
}

export default HomeBanner;
