import React, { Component } from 'react'
import ClientQuotes from './ClientQuotes/index'

class Testimonials extends Component {
  render() {
    return(
      <div className="container-lg trusted-by">
        <h2>Hear From Real Clients</h2>
        <ClientQuotes/>

      </div>
    )
  }
}

export default Testimonials;
