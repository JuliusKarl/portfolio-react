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
              A Full-Stack Developer specializing in ReactJS and Angular 8<br/> <br/> After graduating from The University of Auckland with a Bachelor's degree in Computer Science I am pursuing a career towards Full-Stack Web Development using the MERN and MEAN technology stacks and am highly interested in Full-Stack UX Design with a focus on photography and digital media.  I am passionate about creating innovative solutions and being able to expand the limitations of our current technology.
            </p>
          <a id="projectsLink"><h2 style={{visibility: 'hidden'}}>Projects</h2></a>
        </div>
      </div>
    );
  }
}

export default About;