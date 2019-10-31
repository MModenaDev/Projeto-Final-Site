import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavbarLog.css'
import { Link } from 'react-router-dom'
import Footerico from '../footer/Footerico';
import Logoorange1 from '../../logoorange1.svg'

class NavbarLog extends Component {
  constructor(props){
    super(props)

    this.house1 = './images/house1.png'
    this.plane1 = './images/plane1.png'
    this.backpack1 = './images/backpack1.png'
    this.profile1 = './images/profile1.png'
    this.state = {
      
    }
  }
     
    
  // activeIcon(){
  //   if(active === 'active'){
  //     this.house1 = './images/house2.png'
  //   }
  // }

  render(){
    return(
      <div className='container-fluid navbar-log fixed-top d-none d-md-flex'>
        <div className="row">
          <div className="col-12">
            <div className="row d-flex align-items-center">
              <div className="col-2 col-md-2 text-center p-0 d-none d-md-block">
                <a href="/">
                  <img className='logo-sizedesk' src={Logoorange1} alt=""/>
                </a>
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
                <Footerico link='/homes' name='Home' imgsrc={this.house1}/>
                <Footerico link='/houses' name='Reservas' imgsrc={this.plane1}/>
                <Footerico link='/home' name='####' imgsrc={this.backpack1}/>
                <Footerico link='/profile' name='Profile' imgsrc={this.profile1}/>
              </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarLog;