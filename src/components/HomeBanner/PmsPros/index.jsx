import React, { Component } from 'react'
import pro1 from './assets/pro-1.jpg'
import pro2 from './assets/pro-2.jpg'
import pro3 from './assets/pro-3.jpg'
import pro4 from './assets/pro-4.jpg'
import pro5 from './assets/pro-5.jpg'

class PMSPros extends Component {
  render() {
    return(
      <div>
        <ul className="pms-pro-container">
          <li>
            <img src={pro1} />
            <h4>Shana Miles</h4>
            <h5>Dallas, TX</h5>
          </li>
          <li>
            <img src={pro2} />
            <h4>Shana Miles</h4>
            <h5>Dallas, TX</h5>
          </li>
          <li>
            <img src={pro3} />
            <h4>Shana Miles</h4>
            <h5>Dallas, TX</h5>
          </li>
          <li>
            <img src={pro4} />
            <h4>Shana Miles</h4>
            <h5>Dallas, TX</h5>
          </li>
          <li>
            <img src={pro5} />
            <h4>Shana Miles</h4>
            <h5>Dallas, TX</h5>
          </li>
        </ul>
      </div>

    )
  }
}

export default PMSPros;
