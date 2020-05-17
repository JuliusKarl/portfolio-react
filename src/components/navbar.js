import React, { Component } from 'react';
import './navbar.css';
import CollapsedMenu from './collapsedMenu'
import logo from "./../resources/new/logo_invert_nobackground.png"

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div 
                data-aos="fade-down"
                data-aos-delay="2500"
                data-aos-once="true"
                className="nav-main">
                <div className="nav-margin">
                    <div className="navbar">
                        <a href="#backToTop"><img className="logo" src={logo}/></a>
                        <a href="#aboutLink" className="about"><p >about</p></a>
                        <a href="#projectsLink" className="projects"><p >projects</p></a>
                        <a href="#contactLink" className="contact"><p>contact</p></a>
                        <button 
                            id="hamburger-button"
                            className="hamburger hamburger--slider" 
                            type="button"
                            onClick={this.props.hamburgerChange}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button> 
                    </div>
                    <hr />
                </div>
                {this.props.collapsedMenu && <CollapsedMenu hamburgerChange={this.props.hamburgerChange}/>}
            </div>
        );
    }
}

export default Navbar;