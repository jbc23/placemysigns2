import React, { Component } from 'react'
import HomeBanner from '../../components/HomeBanner/index'
import HowItWorks from '../../components/HowItWorks/index'

class Homepage extends Component {
  render() {
    return(
      <div>
        <HomeBanner/>
        <HowItWorks/>
      </div>
    )
  }
}

export default Homepage;

