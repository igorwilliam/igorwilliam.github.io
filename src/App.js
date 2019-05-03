import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

import logo from './assets/intro.gif';
import './App.css';
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          
          <a
            className="animated infinite tada alternative"
            href="https://www.linkedin.com/in/igorwilliam/"
            target="_blank"
            rel="noopener noreferrer"
          >      
            <Button color='linkedin' size='huge'>
              <Icon name='linkedin' /> LinkedIn
           </Button>

          </a>

            <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="pt_BR" data-type="vertical" data-theme="dark" data-vanity="igorwilliam"><a class="LI-simple-link" href='https://br.linkedin.com/in/igorwilliam?trk=profile-badge'>Igor William Pessoa da Silva</a></div>    
          
   
        </header>
      </div>
    );
  }
}

export default App;
