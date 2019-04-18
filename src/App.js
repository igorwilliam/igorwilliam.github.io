import React, { Component } from 'react';
import logo from './assets/intro.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p/>

           <a
            className="App-link"
            href="https://www.linkedin.com/in/igorwilliam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My linkedin
          </a>
        </header>
      </div>
    );
  }
}

export default App;
