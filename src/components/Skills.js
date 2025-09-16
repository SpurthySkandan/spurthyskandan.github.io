import React from 'react';

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      
      <div className="skills__container">
        {/* Programming Languages */}
        <div className="skills__category">
          <div className="skills__category-header">
            <i className="fas fa-code skills__category-icon"></i>
            <h3 className="skills__category-title">Languages</h3>
          </div>
          <div className="skills__category-content">
            <div className="skill__item">
              <i className="fab fa-python skill__icon"></i>
              <span>Python</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-code skill__icon"></i>
              <span>C++</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-java skill__icon"></i>
              <span>Java</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-js-square skill__icon"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-golang skill__icon"></i>
              <span>Golang</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-js-square skill__icon"></i>
              <span>TypeScript</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-database skill__icon"></i>
              <span>SQL</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-html5 skill__icon"></i>
              <span>HTML</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-css3-alt skill__icon"></i>
              <span>CSS</span>
            </div>
          </div>
        </div>

        {/* Libraries & Tools */}
        <div className="skills__category">
          <div className="skills__category-header">
            <i className="fas fa-tools skills__category-icon"></i>
            <h3 className="skills__category-title">Libraries & Tools</h3>
          </div>
          <div className="skills__category-content">
            <div className="skill__item">
              <i className="fab fa-react skill__icon"></i>
              <span>React</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-css3-alt skill__icon"></i>
              <span>Tailwind</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-fire skill__icon"></i>
              <span>PyTorch</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-brain skill__icon"></i>
              <span>TensorFlow</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-chart-bar skill__icon"></i>
              <span>Pandas</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-calculator skill__icon"></i>
              <span>NumPy</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-project-diagram skill__icon"></i>
              <span>Scikit-learn</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-chart-line skill__icon"></i>
              <span>SciPy</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-chart-pie skill__icon"></i>
              <span>Matplotlib</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-language skill__icon"></i>
              <span>spaCy</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-comments skill__icon"></i>
              <span>Rasa</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-github skill__icon"></i>
              <span>Github</span>
            </div>
            <div className="skill__item">
              <i className="fab fa-jira skill__icon"></i>
              <span>Jira</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-file-excel skill__icon"></i>
              <span>Excel</span>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills__category">
          <div className="skills__category-header">
            <i className="fas fa-users skills__category-icon"></i>
            <h3 className="skills__category-title">Soft Skills</h3>
          </div>
          <div className="skills__category-content">
            <div className="skill__item">
              <i className="fas fa-comments skill__icon"></i>
              <span>Cross-functional Communication</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-brain skill__icon"></i>
              <span>Analytical & Critical Thinking</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-tools skill__icon"></i>
              <span>Troubleshooting Skills</span>
            </div>
            <div className="skill__item">
              <i className="fas fa-clock skill__icon"></i>
              <span>Deadline-oriented</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
