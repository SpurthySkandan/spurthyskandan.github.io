import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <h1 className="about__name">Spurthy Skandan</h1>
            <h2 className="about__title">Computer Science Professional</h2>
            <p className="about__desc">
              Versatile and results-driven Computer Science professional with a Master's degree from USC. 
              I specialize in Software Development, AI/ML, Product Management, Data Engineering and Cyber Security. 
              Passionate about solving real-world problems through innovative technology solutions.
            </p>
            
            <div className="about__highlights">
              <div className="about__highlight">
                <i className="fas fa-graduation-cap about__highlight-icon"></i>
                <span>Master's in CS from USC</span>
              </div>
              <div className="about__highlight">
                <i className="fas fa-code about__highlight-icon"></i>
                <span>Software Developer</span>
              </div>
              <div className="about__highlight">
                <i className="fas fa-brain about__highlight-icon"></i>
                <span>AI/ML Researcher</span>
              </div>
              <div className="about__highlight">
                <i className="fas fa-shield-alt about__highlight-icon"></i>
                <span>IEEE Published</span>
              </div>
            </div>
          </div>
          
          <div className="about__actions">
            <a href="https://drive.google.com/file/d/1uqL1KXgDAqZttjAWzYjKkPOryByQNf2G/view?usp=sharing" className="about__resume-btn">
              <i className="fas fa-file-alt"></i>
              Resume
            </a>
            
            <div className="about__social">
              <a
                href="https://github.com/SpurthySkandan"
                aria-label="github"
                className="about__social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/spurthy-skandan/"
                aria-label="linkedin"
                className="about__social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
