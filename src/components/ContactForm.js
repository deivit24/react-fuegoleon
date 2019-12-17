import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-wrap">
          <input
            className="input name"
            type="text"
            name="name"
            placeholder="Your name please"
          />
          <span
            className="morph-shape"
            data-morph-active="M359,70c0,0-59,6-174,6C84,76,9,70,9,70S3,60,3,40c0-16,6-30,6-30s75-6,176-6c115,0,174,6,174,6s8,14,8,30C367,60,359,70,359,70z"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 370 80"
              preserveAspectRatio="none"
            >
              <path d="M359,70c0,0-59,0-174,0C84,70,9,70,9,70s0-10,0-30c0-16,0-30,0-30s75,0,176,0c115,0,174,0,174,0s0,14,0,30C359,60,359,70,359,70z" />
            </svg>
          </span>
        </div>
        <div className="input-wrap">
          <input
            className="input email"
            type="email"
            name="email"
            placeholder="A Contact email"
            required
          />
        </div>
        <div className="input-wrap select-wrap">
          <select name="inquiry" className="input inquiry">
            <option disabled>Inquiry Reason</option>
            <option selected>About a new project</option>

            <option>About how much I love you</option>
            <option>About how much I hate that I love you</option>
          </select>
          <span
            className="morph-shape"
            data-morph-active="M359,70c0,0-59,6-174,6C84,76,9,70,9,70S3,60,3,40c0-16,6-30,6-30s75-6,176-6c115,0,174,6,174,6s8,14,8,30C367,60,359,70,359,70z"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 370 80"
              preserveAspectRatio="none"
            >
              <path d="M359,70c0,0-59,0-174,0C84,70,9,70,9,70s0-10,0-30c0-16,0-30,0-30s75,0,176,0c115,0,174,0,174,0s0,14,0,30C359,60,359,70,359,70z" />
            </svg>
          </span>
        </div>
        <div className="input-wrap textarea">
          <textarea
            className="input message"
            placeholder="How can we help you?"
            name="message"
          />
        </div>
        <div className="input-wrap submit">
          <input className="input" type="submit" value="Contact Us" />
          <span
            className="morph-shape"
            data-morph-active="M359,70c0,0-59,6-174,6C84,76,9,70,9,70S3,60,3,40c0-16,6-30,6-30s75-6,176-6c115,0,174,6,174,6s8,14,8,30C367,60,359,70,359,70z"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 370 80"
              preserveAspectRatio="none"
            >
              <path d="M359,70c0,0-59,0-174,0C84,70,9,70,9,70s0-10,0-30c0-16,0-30,0-30s75,0,176,0c115,0,174,0,174,0s0,14,0,30C359,60,359,70,359,70z" />
            </svg>
          </span>
        </div>
        <div className="text-center">
          <br />
          <a href="mailto:info@fuegoleondevelopment.com">
            <i className="fa fa-envelope"></i> info@fuegoleondevelopment.com
          </a>
        </div>
      </form>
    );
  }
}

export default ContactForm;
