import React, { Component } from 'react'
import HomeBanner from '../../components/HomeBanner/index'
import HowItWorks from '../../components/HowItWorks/index'
import CompaniesTrustedBy from '../../components/TrustedByCompanies/index'
import ServicingCities from '../../components/ServicingCities/index'

class Homepage extends Component {
  render() {
    return(
      <div>
        <HomeBanner/>
        <HowItWorks/>
        <CompaniesTrustedBy />
        <ServicingCities/>
      </div>
    )
  }
}

export default Homepage;

