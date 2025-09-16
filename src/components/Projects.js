import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        <div className="project">
          <div className="project__header">
            <div className="project__logo">
              <i className="fas fa-store project__logo-icon"></i>
            </div>
            <h3>Trojan Exchange</h3>
          </div>
          <p className="project__description">
            Developed a unified USC-exclusive marketplace platform consolidating 4+ fragmented platforms into one solution. Built responsive frontend with over 10 dynamic components using React and Tailwind with an interactive map using Mapbox. Collaborated on 8 Golang microservices with RESTful APIs; containerized using Docker, integrated MongoDB for data storage.
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
          <div className="project__header">
            <div className="project__logo">
              <i className="fas fa-file-alt project__logo-icon"></i>
            </div>
            <h3>Patent Claims Generation</h3>
          </div>
          <p className="project__description">
            Automated patent claims generation to reduce reliance on manual drafting on USPTO dataset of 10,000 patents. Implemented GPT 3.5 and T5 and explored extended capabilities of Long T5 to accommodate longer input (~6,144 tokens). Performance evaluated with BLEU – T5: 3.73; Long T5: 7.52 and Rouge – T5: 36; Long T5: 41.5
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">Python</li>
            <li className="project__stack-item">PyTorch</li>
            <li className="project__stack-item">Pandas</li>
            <li className="project__stack-item">Numpy</li>
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
          <div className="project__header">
            <div className="project__logo">
              <i className="fas fa-brain project__logo-icon"></i>
            </div>
            <h3>Depression Detection using EEG Sensors</h3>
          </div>
          <p className="project__description">
          Developed an Automated Depression Detection System using deep learning on EEG sensor data. Preprocessed signals by converting recordings into time-series, applying bandpass and notch filters, and using sliding windows for augmentation. Evaluated CNN, LSTM, and hybrid CNN+LSTM models, achieving 65.74% validation accuracy with ResNet. Mitigated overfitting on the small MODMA dataset (53 participants) through augmentation, improving generalization and robustness.          </p>
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
          <div className="project__header">
            <div className="project__logo">
              <i className="fas fa-database project__logo-icon"></i>
            </div>
            <h3>Database Management with GeoSQL Spatial Visualization</h3>
          </div>
          <p className="project__description">
            Developed a Flask web project to provide comprehensive views of cricket teams and enable CRUD operations on IPL database. Generated KML files from spatial coordinates and labels, facilitating visualizations in Google Earth. Executed spatial queries with computing convex hulls, identifying nearest neighbors for spatial analysis in a geospatial context.
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">PostgreSQL</li>
            <li className="project__stack-item">POSTGIS</li>
            <li className="project__stack-item">Flask</li>
          </ul>
        </div>

        <div className="project">
          <div className="project__header">
            <div className="project__logo">
              <i className="fas fa-fire project__logo-icon"></i>
            </div>
            <h3>Real Time Fire Detection</h3>
          </div>
          <p className="project__description">
            Utilized TensorFlow for machine learning to develop fire detection models using methods like Haar Cascade and Semantic Segmentation. Achieved fire detection using only an ordinary laptop's webcam detecting a small candle flame up to 1.5 meters away. Transferred these techniques to undemanding ESP32 devices, enhancing efficiency and saving time and money in fire detection systems.
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">Python</li>
            <li className="project__stack-item">TensorFlow</li>
            <li className="project__stack-item">OpenCV</li>
          </ul>
        </div>

        <div className="project">
          <div className="project__header">
            <div className="project__logo">
              <i className="fas fa-shield-alt project__logo-icon"></i>
            </div>
            <h3>Toxic Comment Filtration</h3>
          </div>
          <p className="project__description">
            Implemented a comment filtering and toxicity mapping system, identifying, and categorizing harsh, toxic and derogatory comments scraped from twitter. Employed a max voting model with logistic regression, long short-term memory, and random forest algorithms to classify comments into distinct levels of toxicity. Conducted a comprehensive validation with input from 50 students demonstrated nearly 40 comments correctly classified.
          </p>
          <ul className="project__stack">
            <li className="project__stack-item">Python</li>
            <li className="project__stack-item">Pandas</li>
            <li className="project__stack-item">Scikit-learn</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
