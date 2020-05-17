import React, { Component } from 'react';
import fb from "./../resources/socialmedia/iconfinder_facebook_4492723.png";
import ld from "./../resources/socialmedia/iconfinder_linkedin_4492722.png";
import ig from "./../resources/socialmedia/iconfinder_instagram_4492724.png";
import './footer.css';

class Footer extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="footer">
        <div className="socialMedia">
            <a href="https://www.facebook.com/aHR0cDovL2prbWFjcm8uY29tLw" alt="Facebook"><img src={fb}/></a>
            <a href="https://www.linkedin.com/in/juliuskarl/" alt="linkedIn"><img src={ld}/></a>
            <a href="https://www.instagram.com/juliuskarlm/" alt="Instagram"><img src={ig}/></a>
        </div>
        © 2020 JKMACRO AND MACROMEDIA LIMITED ALL RIGHTS RESERVED
        <hr/>
      </div>
    );
  }
}

export default Footer;