import React, { Component } from 'react'
import bh from './assets/bh.png'
import tarbell from './assets/tarbell.png'
import prudential from './assets/prudential.png'
import kw from './assets/kw.png'
import century from './assets/century.png'

class CompaniesTrustedBy extends Component {
  render() {
    return(
      <div className="container-lg trusted-by">
        <h5>Trusted by these folks</h5>
        <div>
          <img src={bh} width="160" height="44" />
          <img src={tarbell} width="131" height="58" />
          <img src={prudential} width="221" height="53" />
          <img src={kw} width="132" height="61" />
          <img src={century} width="132" height="62" />
        </div>
      </div>
    )
  }
}

export default CompaniesTrustedBy;
