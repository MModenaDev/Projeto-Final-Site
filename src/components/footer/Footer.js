import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css'
import Footerico from './Footerico';
import { Link } from 'react-router-dom'

class City extends Component {
  render(){
    return(
      <div className="container-fluid footer d-flex d-md-none fixed-bottom">
        <div className="row">
          <Footerico link='/' name='Home' imgsrc='./images/house1.png'/>
          <Footerico link='/howto' name='Reservas' imgsrc='./images/plane1.png'/>
          <Footerico link='/home' name='####' imgsrc='./images/backpack1.png'/>
          <Footerico link='/profile' name='Profile' imgsrc='./images/profile1.png'/>
        </div> 
      </div>
    )
  }
}

export default City