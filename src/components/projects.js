import React, { Component } from 'react';
import projects from './projectsData';
import caseStudies from './caseStudiesData';
import ProjectCard from './projectCard'
import './projects.css'

class Projects extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="projects-main">
        <div className="projects-content">
          <h1
            data-aos="flip-up"
            data-aos-duration="800"
            data-aos-once="true">
              Projects
          </h1>
            <div 
              data-aos="fade-left"
              data-aos-duration="800"
              className="projects-flex"
              data-aos-once="true">
                {projects.map(i => <ProjectCard key={i.id} img={i.image}name={i.name} description={i.description} link={i.link} skills={i.skills}/>)}
            </div>
            <br></br><br></br>
            <div>
              <h1
                data-aos="flip-down"
                data-aos-duration="800"
                data-aos-once="true">
                  Design Case Studies
              </h1>
              <div 
              data-aos="fade-right"
              data-aos-duration="800"
              className="projects-flex"
              data-aos-once="true">
                {caseStudies.map(i => <ProjectCard key={i.id} img={i.image}name={i.name} description={i.description} link={i.link} skills={i.skills}/>)}
            </div>
            </div>
            <a id="contactLink"><h2 style={{visibility: 'hidden'}}>Content</h2></a>
        </div>
      </div>
    );
  }
}

export default Projects;