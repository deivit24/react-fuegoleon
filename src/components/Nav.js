import React from 'react';

import ScrollMagic from 'scrollmagic';
import $ from 'jquery';
import { Link } from 'react-scroll';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    //creates a reference for your element to use

    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    let navbar = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: '#our-process',
      triggerHook: 0.2,
      duration: $('#our-process').height()
    })
      .setClassToggle('.justify-content-center', 'pink') // add class toggle

      .addTo(navbar);

    new ScrollMagic.Scene({
      triggerElement: '#Bio',
      triggerHook: 0.2,
      duration: $('#WhoWeAre').height()
    })
      .setClassToggle('.justify-content-center', 'white') // add class toggle

      .addTo(navbar);
  }
  render() {
    return (
      <ul className="nav justify-content-center sticky-top">
        <li className="nav-item">
          <Link
            activeClass="active"
            className="nav-link"
            to="WhatWeDo"
            spy={true}
            smooth={true}
            duration={500}
          >
            What We Do
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            className="nav-link"
            to="WhoWeAre"
            spy={true}
            smooth={true}
            duration={500}
          >
            Who We Are
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClass="active"
            className="nav-link"
            to="Contact"
            spy={true}
            smooth={true}
            duration={200}
          >
            Let's Connect
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
