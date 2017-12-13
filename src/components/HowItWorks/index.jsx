import React, { Component } from 'react'
import HowItWorksSteps from './HowItWorksSteps/index'

class HowItWorks extends Component {
  render() {
    return(
      <div className="container-lg how-it-works-container">
        <h2>How Does Placemysigns Work?</h2>
        <HowItWorksSteps />
      </div>
    )
  }
}

export default HowItWorks;
