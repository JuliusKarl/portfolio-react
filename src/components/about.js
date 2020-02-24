import React, { Component } from 'react';
import './about.css';
// ignore

class About extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="parallax" lazyload> 
        <div className="about-content">
          <h1
            data-aos="flip-up"
            data-aos-duration="800"
            data-aos-once="true">
              About
          </h1>
          <p 
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true">
              A Front-End developer specializing in ReactJS and Javascript frameworks. <br/> <br/>Having graduated from The University of Auckland majoring in Computer Science, I am now pursuing a career towards Full-Stack Web Development currently using the MERN stack framework.  I am passionate about creating innovative solutions and being able to expand the limitations of our current technology.
            </p>
          <a id="projectsLink"><h2 style={{visibility: 'hidden'}}>Projects</h2></a>
        </div>
      </div>
    );
  }
}

export default About;