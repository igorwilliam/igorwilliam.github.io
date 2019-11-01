import React from 'react';
import { Button, Icon } from 'semantic-ui-react'


import Glitch1 from './assets/backgroud future/glitch-2717630_1920.jpg';
import Glitch2 from './assets/backgroud future/glitch-2717632_1920.jpg';
import Glitch3 from './assets/backgroud future/glitch-2717633_1920.jpg';
import Glitch4 from './assets/backgroud future/glitch-2717636_1920.jpg';
import Glitch5 from './assets/backgroud future/glitch-2722503_1920.jpg';


import logo from './assets/intro.gif';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

const GLITCHES = [
  Glitch1,
  Glitch2,
  Glitch3,
  Glitch4,
  Glitch5,
];

function random(min, max) {
  const random = Math.random() * (+max - +min) + +min; 

  return Math.floor(random);
}

function App() {
  const [Bg, setBg] = React.useState(Glitch1);


  React.useEffect(() => {
    setInterval(() => {
      setBg(GLITCHES[random(0, 4)])
    }, random(600, 900));
  }); 

  return (
    <div className="App" style={{ backgroundSize: 'cover', backgroundImage: `url(${Bg})` }}>

      <header className="App-header">

        <img src={logo} className="App-logo" alt="Igor William" />

        <a
          className="animated infinite tada alternative"
          href="https://www.linkedin.com/in/igorwilliam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Button color='linkedin' size='huge'>
            <Icon name='linkedin' /> LinkedIn
           </Button> */}

        </a>

        <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="pt_BR" data-type="vertical" data-theme="dark" data-vanity="igorwilliam"><a class="LI-simple-link" href='https://br.linkedin.com/in/igorwilliam?trk=profile-badge'>Igor William Pessoa da Silva</a></div>
      </header>
    </div>
  );
}

export default App;
