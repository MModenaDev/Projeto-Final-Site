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
            <span className="about-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil perferendis, veniam fuga exercitationem ut consequatur aliquid aperiam voluptas possimus tempore autem, accusamus vel, ratione laboriosam nobis placeat nesciunt deserunt. Cum incidunt quas atque, dicta ab deleniti voluptatibus quaerat nemo quam?</span>
          </div>
        </div>
      </div>
    )
  }
}

export default About