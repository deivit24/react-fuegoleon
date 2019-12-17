import React from 'react';
import Logo from '../img/logo.png';

class Cover extends React.Component {
  render() {
    return (
      <div id="Cover">
        <img src={Logo} alt="" />
        <h1>Fuegoleon</h1>
        <h2>Development</h2>
        <section id="section05" className="demo">
          <span></span>Scroll
        </section>
      </div>
    );
  }
}

export default Cover;
