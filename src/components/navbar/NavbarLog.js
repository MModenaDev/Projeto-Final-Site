import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavbarLog.css'
import { Link } from 'react-router-dom'
import Footerico from '../landingPage/footer/Footerico';

class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {
      arrowAction : true,
      isTop: true,
    }
  }

  render(){
    return(
      <div className='container-fluid navbar-log fixed-top d-none d-md-flex'>
        <div className="row">
          <div className="col-12">
            <div className="row d-flex align-items-center">
              <div className="col-2 col-md-2 text-center p-0 d-none d-md-block">
                <Link to="/">LOGO</Link>
              </div>
              <div onClick={() => this.changeArrow()} className="col-2 col-md-2 text-center p-0 d-md-none">
                LOGO
              </div>
              <div className="col-1 arrows d-flex d-md-none justify-content-left p-0">
                <img id="arrow" src="./images/angle-arrow-down.png" alt=""/>
              </div>
              <div className="col-md-4">
                <input className="searchbar-log" placeholder="Seach your next home" type="text"/>
              </div>
              <div className="col-6 d-none d-md-flex">
              <div className="row">
                <Footerico link='/' name='Home' imgsrc='./images/house1.png'/>
                <Footerico link='/howto' name='Reservas' imgsrc='./images/plane1.png'/>
                <Footerico link='/home' name='####' imgsrc='./images/backpack1.png'/>
                <Footerico link='/profile' name='Profile' imgsrc='./images/profile1.png'/>
              </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;