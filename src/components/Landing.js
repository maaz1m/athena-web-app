import React, { Component } from 'react';
import logo from '../logo.png';
import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="App-header">
          <img src={logo} className="Logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Landing;
