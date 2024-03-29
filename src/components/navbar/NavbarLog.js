import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavbarLog.css'
import { Link } from 'react-router-dom'
import Footerico from '../footer/Footerico';
import Logoorange1 from '../../logoorange1.svg'

class NavbarLog extends Component {
  constructor(props) {
    super(props)

    this.house1 = '/images/house2.png'
    this.plane1 = '/images/plane2.png'
    this.backpack1 = '/images/backpack2.png'
    this.profile1 = '/images/profile2.png'

  }


  // activeIcon(){
  //   if(active === 'active'){
  //     this.house1 = './images/house2.png'
  //   }
  // }

  render() {
    return (
      <div className='container-fluid navbar-log fixed-top d-none d-md-flex'>
        <div className="row">
          <div className="col-12">
            <div className="row d-flex align-items-center">
              <div className="col-2 col-md-2 text-center p-0 d-none d-md-block">
                <a href="/">
                  <img className='logo-sizedesk' src={Logoorange1} alt="" />
                </a>
              </div>
              <div onClick={() => this.changeArrow()} className="col-2 col-md-2 text-center p-0 d-md-none">
                LOGO
              </div>
              <div className="col-1 arrows d-flex d-md-none justify-content-right p-0">
                <img id="arrow" src="./images/angle-arrow-down.png" alt="" />
              </div>
              <div className="col-10 d-none d-md-flex">
                <div className="row d-flex justify-content-md-end">
                  <Footerico link='/main' name='Main' imgsrc={this.house1} />
                  <Footerico link='/houses' name='###' imgsrc={this.plane1} />
                  <Footerico link='/home' name='Rooms' imgsrc={this.backpack1} />
                  <Footerico link='/profile' name='Profile' imgsrc={this.profile1} />
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