import React from 'react';
import bio from '../img/bio.jpg';
class WhoWeAre extends React.Component {
  render() {
    return (
      <div id="WhoWeAre">
        <section id="Bio">
          <div className="container">
            <h1>| Who We Are |</h1>
            <img src={bio} alt="" className="img-fluid" />
            <p>
              <span className="david">David Salazar</span>
            </p>
            <p>
              <span className="green">Founder</span>
            </p>
            <p>
              David has spent years building responsive websites and learning
              the latest technologies to build exciting User Interfaces for
              clients.
            </p>
          </div>
        </section>
        <section id="our-services">
          <span className="bg-img blurry"></span>
          <span className="bg-img normal"></span>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-3 contents list clearfix">
                <ul>
                  <li>Design</li>
                  <li>Development</li>
                  <li>UI/UX</li>
                  <li>Interactives</li>
                  <li>Landin Pages</li>
                  <li>Mobile Friendly</li>
                  <li>WordPress Sites</li>
                  <li>Netlify</li>
                  <li>JavaScript Animations</li>
                </ul>
              </div>
              <div className="col-xs-7 contents title">
                <h2>
                  <span className="our">Our</span>
                  <br />
                  <span className="services">Services</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WhoWeAre;
