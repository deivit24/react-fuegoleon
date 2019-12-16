import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from '../src/components/About';

import Fee from '../src/components/Fee';
import Services from '../src/components/Services';
import Philosophy from '../src/components/Philosophy';
import Contact from '../src/components/Contact';
import ClientLogin from '../src/components/ClientLogin';
import NotFound from '../src/components/NotFound';
import Footer from '../src/components/Footer';

import './css/main.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />

          <Route path="/fee" exact component={Fee} />
          <Route path="/services" exact component={Services} />
          <Route path="/philosophy" exact component={Philosophy} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/client-login" exact component={ClientLogin} />
          <Route path="/error404" render={() => <NotFound />} />
          <Redirect to="/error404" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
