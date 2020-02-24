import React, { Component } from 'react';
import axios from 'axios';
import './contacts.css'

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const contact = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }
    axios.post('/sendEmail/send', contact)
      .then(res => console.log(res.data))
      .then(alert("Thanks for your enquiry!"));
    this.resetForm();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  render() {
    return (
      <div className="contact-main">
        <div className="contact-header">
          <h1
            data-aos="flip-up"
            data-aos-duration="800"
            data-aos-once="true">
              Contact
          </h1>
            <div 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-once="true"
              className="contactForm">
                <form id="contact-form" onSubmit={this.handleSubmit}>
                  <div className="contactInputs">
                    <br/>
                    <input 
                      placeholder="Name" 
                      name="name"  
                      value={this.state.name} 
                      type="text" 
                      onChange={this.handleChange}/>
                    <br/>
                    <input 
                      placeholder="Email"
                      name="email" 
                      value={this.state.email} 
                      type="text" 
                      onChange={this.handleChange}/>
                    <br/>
                    <input 
                      placeholder="Subject"
                      name="subject" 
                      value={this.state.subject} 
                      type="text" 
                      onChange={this.handleChange}/>
                    <br/>
                    <textarea 
                      placeholder="Message" 
                      name="message" 
                      value={this.state.message} 
                      type="textarea" 
                      onChange={this.handleChange}/>
                    <br/>
                    <button type="submit">Submit</button>
                  </div>
                </form>
                <div className="contactMessage">
                  <p>Have an enquiry?<br/><br/> Leave me a message and i'll be sure to get back to you or alternatively you can email <a href = "mailto: julius.karl.macrohon@gmail.com"><i>julius.karl.macrohon@gmail.com</i></a> directly.</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;