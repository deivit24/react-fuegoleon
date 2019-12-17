import React from 'react';
import ContactForm from './ContactForm';
class Contact extends React.Component {
  render() {
    return (
      <div id="Contact">
        <div className="huge-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h2>
                  <span className="lets">Let's</span>
                  <span className="chat">Talk!</span>
                </h2>
                <p className="lead">
                  Question or comments? Drinks or coffee? Our email is{' '}
                  <a href="mailto:info@fuegoleondevelopment.com">
                    info@fuegoleondevelopment.com
                  </a>
                </p>
              </div>
              <div className="col-sm-7 contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
