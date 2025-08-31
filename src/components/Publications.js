import React from 'react';

const Publications = () => {
  return (
    <section id="publications" className="section publications">
      <h2 className="section__title">Publication</h2>

      <div className="publications__grid">
        <div className="publication">
          <h3>Question Answering System using Knowledge Graphs</h3>
          <p className="publication__description" style={{justifyContent: 'space-evenly'}}>
            S. Skandan, S. Kanungo, S. Devaraj, S. Gupta and S. Narayan, "Question Answering System using Knowledge Graphs," 
            2023 International Conference on Inventive Computation Technologies (ICICT), Lalitpur, Nepal, 2023, 
            pp. 656-661, doi: 10.1109/ICICT57646.2023.10134047.
          </p>
          <p className="publication__description">
            <br/> ● Incorporated the use of knowledge graphs into a natural language processing model enhancing its capabilities with part of speech tagging
            <br/> ● Capable of answering single-hop and multi-hop questions within a knowledge base by using techniques like entity pair extraction.
            <br/> ● Had a remarkable accuracy of 80.13% in multi hop questions while BERT performed at 43% on SQuAD and multi-RC datasets.
          </p>
          <ul className="publication__stack">
            <li className="publication__stack-item">Python</li>
            <li className="publication__stack-item">Pandas</li>
            <li className="publication__stack-item">SpaCy</li>
            <li className="publication__stack-item">NetworkX</li>
            <li className="publication__stack-item">Flask</li>
          </ul>
          <a
            href="https://ieeexplore.ieee.org/document/10134047"
            aria-label="paper link"
            className="link link--icon"
          >
            <i aria-hidden="true" className="fas fa-file"></i>
          </a>

          <a
            href="https://github.com/SpurthySkandan/Question-Answering-System-using-Knowledge-Graphs.git"
            aria-label="source code"
            className="link link--icon"
          >
            <i aria-hidden="true" className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
