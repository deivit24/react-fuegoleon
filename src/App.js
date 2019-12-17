import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import Cover from './components/Cover';
import './css/main.css';
import WhatWeDo from './components/WhatWeDo';

import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
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
