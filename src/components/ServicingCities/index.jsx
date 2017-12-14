import React, { Component } from 'react'
import Cities from './Cities/index'

class ServicingCities extends Component {
  render() {
    return(
      <div className="container-lg servicing-cities">
        <h4>Currently serviscing up to 50 miles beyond these cities</h4>
        <Cities/>
        <h6>Don’t see your city? <a href="">Contact us</a></h6>
      </div>
    )
  }
}

export default ServicingCities;
