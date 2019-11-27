import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'
import Footerico from './Footerico';

class Footer extends Component {
  constructor(){
    super()
    this.house1 = '/images/house2.png'
    this.plane1 = '/images/plane2.png'
    this.backpack1 = '/images/backpack2.png'
    this.profile1 = '/images/profile2.png'
  }
  

  render(){
    return(
      <div className="container-fluid footer d-flex d-md-none fixed-bottom">
        <div className="row d-flex align-items-center justify-content-around">
          <Footerico link='/main' name='Main' imgsrc={this.house1}/>
          <Footerico link='/houses' name='##' imgsrc={this.plane1}/>
          <Footerico link='/home' name='Rooms' imgsrc={this.backpack1}/>
          <Footerico link='/profile' name='Profile' imgsrc={this.profile1}/>
        </div> 
      </div>
    )
  }
}

export default Footer