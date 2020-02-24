import React, { Component } from 'react';
import Navbar from "./components/navbar"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      collapsedMenu: false,
      msg6: false
    }
    this.hamburgerChange = () => {
      document.getElementById('hamburger-button').classList.toggle('is-active')
      this.setState({
        collapsedMenu: !this.state.collapsedMenu
      })
    }
  }

  componentDidMount() {
    setInterval(()=>{this.setState({msg6:!this.state.msg6})}, 500);
    AOS.init();
    window.VANTA.NET({
      el: "#bg",
      color: 0x5f5f5f,
      backgroundColor: 0x25272b,
      points: 12,
      maxDistance: 26.00,
      spacing: 18.00,
      showDots: false
    });
  }

  render() {
    return (
      <div id="backToTop" className="main">
        <Navbar 
          id="navbar" 
          hamburgerChange={this.hamburgerChange} 
          collapsedMenu={this.state.collapsedMenu}/>
          {this.state.collapsedMenu && <div className="darken-from-nav"></div>}
        <div id="bg" className="nav-top-margin">
              <div>
                <a id="headerLink"><h1 style={{visibility: 'hidden'}}>Header</h1></a>
                  <div className="landing">
                    <br/><br/>
                    <h1 
                      data-aos-duration="800"
                      data-aos-delay="400"
                      data-aos="zoom-out">
                      I make websites
                      <span 
                        style={{visibility: (this.state.msg6 ? "visible" : "hidden" )}}>|
                      </span>
                    </h1>
                    <p 
                      data-aos-duration="150"
                      data-aos-delay="1500"
                      data-aos="fade-right"
                      data-aos-once="true">
                      <i>
                        - Julius Karl Macrohon
                      </i>
                    </p>
                    <a 
                      id="arrow"
                      href="#projectsLink"
                      data-aos="fade-down"
                      data-aos-delay="3000"
                      data-aos-once="true">
                        <div 
                          className="arrow">
                        </div>
                    </a>
                  </div>
                  <a id="aboutLink"><h2 style={{visibility: 'hidden'}}>About</h2></a>
                    <About />
                    <Projects />
                    <Contact /> 
                    <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
