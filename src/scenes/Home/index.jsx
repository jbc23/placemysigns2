import React, { Component } from 'react'

class Homepage extends Component {
  render() {
    return(
      <Navbar />
      <h1>Homepage</h1>
    )
  }
}

export default Homepage;

class navbar extends React.createClass({
  render() {
    return (
      <nav>
        <div className="navWide">
          <div className="wideDiv">
            <a href="Home">Home</a>
            <a href="Pricing">Pricing</a>
            <a href="Support">Support</a>
          </div>
        </div>
        <div className="navNarrow">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="narrowLinks">
            <a href="#" onClick={this.burgerToggle}>Link 1</a>
            <a href="#" onClick={this.burgerToggle}>Link 2</a>
            <a href="#" onClick={this.burgerToggle}>Link 3</a>
          </div>
        </div>
      </nav>
    );
  },

