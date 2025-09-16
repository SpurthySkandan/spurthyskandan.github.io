import React from 'react';

const Contact = () => {
  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__content">
        <p className="contact__email">
          <i className="fas fa-envelope contact__icon"></i>
          <a href="mailto:spurthy.skandan@gmail.com" className="contact__link">
            spurthy.skandan@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
