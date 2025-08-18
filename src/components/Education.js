import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section education">
      <h2 className="section__title">Education</h2>
      <div className="education__grid">
        {/* Master's */}
        <div className="education">
          <h3 className="education__degree">Master of Science in Computer Science</h3>
          <h4 className="education__school">University of Southern California</h4>
          <p className="education_courses">
            Software Engineering, Information Retrieval, Analysis of Algorithms, Database Systems, Deep Learning, Natural Language Processing, Cryptography
          </p>
          <p className="education__location">Los Angeles, CA, USA</p>
          <p className="education__date">Aug 2023 – May 2025</p>
        </div>

        {/* Bachelor's */}
        <div className="education">
          <h3 className="education__degree">Bachelor of Technology in Computer Science & Engineering</h3>
          <h4 className="education__school">PES University</h4>
          <p className="education_courses">
            Data Structures, AI/ML, Graph Theory, Cloud Computing, Compiler Design, Formal Level Languages, Computer Networks, Data Mining
          </p>
          <p className="education__location">Bangalore, India</p>
          <p className="education__date">Aug 2019 – May 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
