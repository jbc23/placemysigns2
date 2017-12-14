import React, { Component } from 'react';
import logo from './logo.svg';
import Homepage from './scenes/Home/index'
import Nav from './components/Navigation/index'
import './css/nav.css';
import './css/main.css';
import './css/button.css';
import './css/hero.css';
import './css/how-it-works.css'
import './css/servicing-cities.css'
import './css/trusted-by.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Homepage />
      </div>
    );
  }
}

export default App;

