import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css'
import Navbar from '../navbar/Navbar'
import LogoAbout from '../../../src/logoorange1.svg'

class About extends Component {
  render(){
    return(
      <div  className="container-fluid about-page">
        <Navbar />
        <div data-aos="fade-down" className="row d-flex align-items-center justify-content-around" >
          <div className="col-10 col-md-4 d-md-flex align-items-center justify-content-center d-none">
            <img className="img-about" src={LogoAbout} alt=""/>
          </div>
          <div className="col-10 col-md-4 about-div d-flex align-items-center">
            <span className="about-text">
              We believe that everyone should be able to live and work wherever they want insted of being rooted to something, as long as they can afford it.<br/><br/>
              So we came up with the idea of ​​creating a worldwide housing system to make this possible.<br/><br/>
              The current version of the website is an MVP and has a single purpose to show how we want to arrive in the future.</span>
          </div>
        </div>
      </div>
    )
  }
}

export default About