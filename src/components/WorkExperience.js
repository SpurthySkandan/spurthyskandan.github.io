import React from 'react';

const WorkExperience = () => {
  return (
    <section id="workex" className="section workexs">
      <h2 className="section__title">Work Experience</h2>

      <div className="workex__grid">
        <div className="workex">
          <div className="workex__header">
            <div className="workex__logo">
              <i className="fas fa-handshake workex__logo-icon"></i>
            </div>
            <div className="workex__info">
              <h3>Center for Societal Aspiration</h3>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          <h5>Project Manager</h5>
          <p>August 2024 - December 2024</p>
          <p className="workex__description">
            ● Overseeing a team of developers to drive the completion and launch of the nonprofit's website.
            <br/>● Engaging in strategic planning, stakeholder communication, fostering partnerships aligning with the CSACO's goals.
          </p>
          <p></p><br/>
          <h5>Software Developer</h5>
          <p>April 2024 - August 2024</p>
          <p className="workex__description">
            ● Spearheaded the development of the MVP for a nonprofit website, defining the entire workflow and building from scratch.
            <br/>● Implemented user authentication, with an intake form to route users to a tailored geographical directory of resources.
          </p>
        </div>

        <div className="workex">
          <div className="workex__header">
            <div className="workex__logo">
              <i className="fas fa-university workex__logo-icon"></i>
            </div>
            <div className="workex__info">
              <h3>Information Technology Services, USC</h3>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          <h5>Junior IAM Analyst</h5>
          <p>April 2024 - May 2025</p>
          <p className="workex__description">
            ● Diagnosed and resolved complex identity, access, authentication, authorization issues, entitlements and permissions prioritizing 
              impact, ensuring compliance, and recommending effective, scalable solutions. 
            <br/>● Developed and maintained security documentation, executed SOPs, and optimized best practices to meet SLAs. 
            <br/>● Created and managed accounts for departments and student organizations, ensuring proper access control.
            <br/>● Develop a project to automate the extraction of ServiceNow ticket details via web scraping into a Word document to save time.
          </p>
        </div>

        <div className="workex">
          <div className="workex__header">
            <div className="workex__logo">
              <i className="fas fa-cogs workex__logo-icon"></i>
            </div>
            <div className="workex__info">
              <h3>EOX Vantage</h3>
              <p>Bangalore, India</p>
            </div>
          </div>
          <h5>Product Management Associate</h5>
          <p>January 2023 - June 2023</p>
          <p className="workex__description">
            ● Played a pivotal role in the meticulous development of multiple apps on the EOX Platform aligned with client requirements.
            <br/>● Spearheaded the creation of a packaged general excel mapper – crafted for streamlining project linking and calculations of 
            developers, saving time and effort by abstracting workflow calls.
            <br/>● Assumed a vital role in the Onboarding app creation for a seamless recruiting process for the company's US and India branches
          </p>
        </div>

        <div className="workex">
          <div className="workex__header">
            <div className="workex__logo">
              <i className="fas fa-laptop workex__logo-icon"></i>
            </div>
            <div className="workex__info">
              <h3>DELL Technologies</h3>
              <p>Bangalore, India</p>
            </div>
          </div>
          <h5>Cyber Security Analyst</h5>
          <p>June 2022 - August 2022</p>
          <p className="workex__description">
            ● Created a Configuration Manager Dashboard using the powerful Splunk tool to analyze all the properties of event logs centrally.
            <br/>● Scheduled and automated cron jobs every 24 hours to query all servers and pinpoint misconfigured properties thereby playing a 
            key role in re-onboarding and troubleshooting.
            <br/>● Reduced rigorous manual efforts by normalizing tera bytes of data in minutes, preventing data parsing issues and thus pre-
            empting possible threats from erroneous layers and identifying gaps within the environment.
          </p>
        </div>

        <div className="workex">
          <div className="workex__header">
            <div className="workex__logo">
              <i className="fas fa-chart-line workex__logo-icon"></i>
            </div>
            <div className="workex__info">
              <h3>Tesser Insights</h3>
              <p>Bangalore, India</p>
            </div>
          </div>
          <h5>Data Science Researcher</h5>
          <p>September 2021 - December 2021</p>
          <p className="workex__description">
            ● Conducted comprehensive research on data cleansing techniques, including phone number validation, regex-based parsing, address normalization, and zip code standardization.
            <br/>● implemented robust data cleaning methodologies to systematically eliminate redundancy and proactively flag inconsistencies, ensuring high-quality input for downstream models.
            <br/>● Contributed to the end-to-end data pipeline — from ingesting raw data into data lakes, through cleansing (primary area of contribution), to transforming and structuring data into SQL tables — enabling the generation of Tesser Actionable Insights (TAI) and impactful visualizations for customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
