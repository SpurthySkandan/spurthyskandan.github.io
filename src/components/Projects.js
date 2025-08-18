import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        <div className="project">
          <h3>Trojan Exchange</h3>
          <p className="project__description">
            ● Developed a unified USC-exclusive marketplace platform consolidating 4+ fragmented platforms into one solution. 
            <br/>● Built responsive frontend with over 10 dynamic components using React and Tailwind with an interactive map using Mapbox. 
            <br/>● Collaborated on 8 Golang microservices with RESTful APIs; containerized using Docker, integrated MongoDB for data storage. 
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">React</li>
            <li className="project__stack-item">Tailwind</li>
            <li className="project__stack-item">Golang</li>
            <li className="project__stack-item">TypeScript</li>
            <li className="project__stack-item">Docker</li>
            <li className="project__stack-item">MongoDB</li>
          </ul>

          <a
            href="https://github.com/vishal-1408/TrojanExchange/tree/main"
            aria-label="source code"
            className="link link--icon"
          >
            <i aria-hidden="true" className="fab fa-github"></i>
          </a>
        </div>

        <div className="project">
          <h3>Patent Claims Generation</h3>
          <p className="project__description">
            ● Automated patent claims generation to reduce reliance on manual drafting on USPTO dataset of 10,000 patents. 
            <br/> ● Implemented GPT 3.5 and T5 and explored extended capabilities of Long T5 to accommodate longer input (~6,144 tokens)
            <br/> ● Performance evaluated with BLEU – T5: 3.73; Long T5: 7.52 and Rouge – T5: 36; Long T5: 41.5
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">Python</li>
            <li className="project__stack-item">PyTorch</li>
          </ul>

          <a
            href="https://github.com/SpurthySkandan/Patent-Claims-Generation-using-LongT5"
            aria-label="source code"
            className="link link--icon"
          >
            <i aria-hidden="true" className="fab fa-github"></i>
          </a>
        </div>

        <div className="project">
          <h3>Depression Detection using EEG Sensors</h3>
          <p className="project__description">
            ●Developed Automated Depression Detection System by Leveraging deep learning models to detect depression using EEG sensor data.
            <br/>●Implemented extensive data preprocessing by converting raw EEG recordings into time-series data, applying Butterworth bandpass and notch filters to remove noise, and utilizing sliding windows for data augmentation.
            <br/>●Experimented with State-of-the-Art Models by evaluating CNN, LSTM, and hybrid models - CNN+LSTM 
            <br/>●Achieved a validation accuracy of 65.74% with the ResNet model.
            <br/>●Addressed overfitting issues due to small MODMA dataset of 53 participants through data augmentation techniques, boosting model generalization and robustness.
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">Python</li>
            <li className="project__stack-item">tensorflow</li>
            <li className="project__stack-item">Numpy</li>
            <li className="project__stack-item">Pandas</li>
            <li className="project__stack-item">Scipy</li>
            <li className="project__stack-item">Scikit-learn</li>
            <li className="project__stack-item">Matplotlib</li>
          </ul>

          <a
            href="https://github.com/SpurthySkandan/Depression-Detection-using-EEG-Sensors"
            aria-label="source code"
            className="link link--icon"
          >
            <i aria-hidden="true" className="fab fa-github"></i>
          </a>
        </div>

        <div className="project">
          <h3>Database Management with GeoSQL Spatial Visualization</h3>
          <p className="project__description">
            Developed a Flask web project to provide comprehensive views of cricket teams and enable CRUD operations on IPL database.
            <br/> ● Generated KML files from spatial coordinates and labels, facilitating visualizations in Google Earth.
            <br/> ● Executed spatial queries with computing convex hulls, identifying nearest neighbors for spatial analysis in a geospatial context.
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">PostgreSQL</li>
            <li className="project__stack-item">POSTGIS</li>
            <li className="project__stack-item">Flask</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
