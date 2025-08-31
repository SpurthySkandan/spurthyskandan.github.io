import React from 'react';

const About = () => {
  return (
    <div className="about center">
      <span className="about__name"></span>
      <p className="about__desc">
        I am a Versatile and results-driven Computer Science professional with a Master's degree from the University of Southern California and a strong track record in software 
        development, Product Management, Data Engineering, Cyber Security and AI/ML. Proven ability to design scalable systems, lead cross-functional teams, and deliver impactful projects in both 
        startup and enterprise environments. Passionate about solving real-world problems using technology demonstrated by published 
        research in IEEE.  
      </p>

      <div className="about__contact center">
        <a href="https://drive.google.com/file/d/1uqL1KXgDAqZttjAWzYjKkPOryByQNf2G/view?usp=sharing">
          <span className="btn btn--outline">Resume</span>
        </a>

        <a
          href="https://github.com/SpurthySkandan"
          aria-label="github"
          className="link link--icon"
        >
          <i aria-hidden="true" className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/spurthy-skandan/"
          aria-label="linkedin"
          className="link link--icon"
        >
          <i aria-hidden="true" className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default About;
