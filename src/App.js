import React, { Component } from 'react';
import logo from './logo.svg';
import Homepage from './scenes/Home/index'
import Nav from './components/Navigation/index'
import './main.css';
import './nav.css';

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

