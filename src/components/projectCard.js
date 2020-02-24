import React, { Component } from 'react';
import './projects.css'

class ProjectCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      image: this.props.img,
      link: this.props.link,
      desc: this.props.description,
      skills: this.props.skills
    }
  }
  render() {
    return (
      <a href={this.state.link} className="projects-card-main" target="_blank" rel="noopener noreferrer">
        <div className="card-content">
          <h2>{this.state.name}</h2>
          <i>{this.state.desc}</i><br />
          <small><small>{this.state.skills}</small></small>
        </div>
      </a>
    );
  }
}

export default ProjectCard;