import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {
      arrowAction : true
    }
  }


  changeArrow(){
    this.arrowButton = document.getElementById("arrow")
     console.log(this.state.arrowAction)
    if(this.state.arrowAction){
      this.arrowButton.src = "./images/angle-arrow-down.png"
      this.setState({
        arrowAction : false
      })
    } else {this.arrowButton.src = "./images/up-arrow.png"
    this.setState({
      arrowAction : true
    })
  }
 
    }


  render(){
    return(
      <div className='container-fluid navbar fixed-top'>
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="row d-flex align-items-center">
              <div onClick={() => this.changeArrow()} className="col-2 col-md-2 text-center p-0">
                LOGO
              </div>
              <div onClick={() => this.changeArrow()} className="col-1 arrows d-flex d-md-none justify-content-left p-0">
                <img id="arrow" src="./images/angle-arrow-down.png" alt=""/>
              </div>
              <div className="col-9 col-md-6">
                <input className="searchbar" placeholder="Seach your next home" type="text"/>
              </div>
              <div className="col-4 d-none d-md-flex">
                <div className="row d-flex align-items-center">
                  <div className="col-4">Homes</div>
                  <div className="col-4">Plans</div>
                  <div className="col-4">About</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 d-none d-md-flex">
            <div className="row d-flex justify-content-end align-items-center">
              <div className="col-4">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;