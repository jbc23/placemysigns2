import React, { Component } from 'react'
import Cities from './Cities/index'

class ServicingCities extends Component {
  render() {
    return(
      <div>
        Currently serviscing up to 50 miles beyond these cities
        <Cities/>
        Don’t see your city? Contact us
      </div>
    )
  }
}

export default ServicingCities;
