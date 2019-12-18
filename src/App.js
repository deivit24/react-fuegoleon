import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Cover from './components/Cover';
import './css/main.css';
import WhatWeDo from './components/WhatWeDo';
import Particles from 'react-particles-js';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="particles">
          <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 1500
                  }
                },
                line_linked: {
                  enable: true,
                  opacity: 0.2
                },
                move: {
                  direction: 'right',
                  speed: 0.2
                },
                size: {
                  value: 1
                },
                opacity: {
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.5
                  }
                }
              },
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: 'push'
                  }
                },
                modes: {
                  push: {
                    particles_nb: 1
                  }
                }
              },
              retina_detect: true
            }}
          />
        </div>
        <Cover />
        <Nav />
        <Switch>
          <Route path="/" exact component={WhatWeDo} />
          <Redirect to="/error404" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
