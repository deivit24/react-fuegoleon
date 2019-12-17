import React from 'react';
import WhoWeAre from './WhoWeAre';
import Contact from './Contact';
import ScrollMagic from 'scrollmagic';
import TweenMax from 'gsap/TweenMax';
import $ from 'jquery';

class WhatWeDo extends React.Component {
  constructor(props) {
    super(props);
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    // BLURB STUFF
    var items = new ScrollMagic.Controller();

    $('.item').each(function() {
      var itemSlide = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7
      })
        .setClassToggle(this, 'items-appear')

        .addTo(items);
    });
    // OUR PROCESS STUFF
    var scrollMagicController = new ScrollMagic.Controller();
    $('#our-process span.icon').hover(function() {
      $('#our-process span.icon').removeClass('active');
      $(this).addClass('active');

      var match = $(this).data('match');

      $('#our-process h4').removeClass('active');
      $('h4.' + match).addClass('active');

      return false;
    });
    var processTween = TweenMax.from(
      '#our-process h2 span',
      0.5,
      {
        y: 150,
        opacity: 0.5
      },
      {
        y: 0,
        opacity: 0.1
      },
      0.1
    );
    var processScene = new ScrollMagic.Scene({
      triggerElement: '#our-process h2',
      duration: 700,
      offset: -100
    })
      .setTween(processTween)
      .addTo(scrollMagicController);
    var processIconsTween = TweenMax.from(
      '#our-process .step',
      0.5,
      {
        opacity: 0.4
      },
      {
        opacity: 1
      },
      0.1
    );
    var processIconsScene = new ScrollMagic.Scene({
      triggerElement: '#our-process h2',
      duration: 500,
      offset: -100
    })
      .setTween(processIconsTween)
      .addTo(scrollMagicController);
  }

  render() {
    return (
      <div>
        <div id="WhatWeDo">
          <section ref="hello" id="blurb">
            <div className="container">
              <div className="row">
                <div className="col-md-12 contents">
                  <h2>
                    <span className="line-1 item">The</span>
                    <span className="line-2 item">Cutting Edge Of</span>
                    <span className="line-3 item">Web Development</span>
                  </h2>
                  <hr className="item" />
                  <p className="lead item">
                    We build amazing websites utilizing the latest technologies
                    to streamline our process and get you the product you want
                    faster, and cheaper, than others can.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="our-process">
            <h2 className="huge-town">
              <span className="our">Our</span>
              <span className="process">Process</span>
            </h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8 col-md-2 contents">
                  <div className="wrap">
                    <div className="row">
                      <div className="col-md-3 col-xs-6 step">
                        <span className="icon think active" data-match="think">
                          <i className="fas fa-pen-fancy"></i>
                        </span>
                        <h3>Think</h3>
                      </div>
                      <div className="col-md-3 col-xs-6 step">
                        <span className="icon design" data-match="design">
                          <i className="fas fa-palette"></i>
                        </span>
                        <h3>Design</h3>
                      </div>
                      <div className="col-md-3 col-xs-6 step">
                        <span className="icon engineer" data-match="engineer">
                          <i className="fas fa-database"></i>
                        </span>
                        <h3>Engineer</h3>
                      </div>
                      <div className="col-md-3 col-xs-6 step">
                        <span className="icon execute" data-match="execute">
                          <i className="fas fa-thumbs-up"></i>
                        </span>
                        <h3>Execute</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="think active">
                          <span>Study</span>
                          <i className="fas fa-certificate"></i>
                          <span>Plan</span>
                          <i className="fas fa-certificate"></i>
                          <span>Strategize</span>
                        </h4>
                        <h4 className="design">
                          <span>Imagine</span>

                          <i className="fas fa-certificate"></i>
                          <span>Create</span>
                          <i className="fas fa-certificate"></i>
                          <span>Experience</span>
                        </h4>
                        <h4 className="engineer">
                          <span>Slice</span>
                          <i className="fas fa-certificate"></i>
                          <span>Code</span>
                          <i className="fas fa-certificate"></i>
                          <span>Integrate</span>
                        </h4>
                        <h4 className="execute">
                          <span>Launch</span>
                          <i className="fas fa-certificate"></i>
                          <span>Monitor</span>

                          <i className="fas fa-certificate"></i>
                          <span>Celebrate</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <WhoWeAre />
        <Contact />
      </div>
    );
  }
}

export default WhatWeDo;
