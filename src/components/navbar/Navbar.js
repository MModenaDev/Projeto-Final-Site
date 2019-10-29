import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {
      arrowAction : true,
      isTop: true,
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < document.documentElement.clientHeight;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
        this.changeColor()
      }
    });
  }

  changeColor(){
    this.nav = document.getElementById("nav")
    if(this.state.isTop){
      console.log('cor')
      this.nav.classList.remove('navbar-scrolled')
    } else this.nav.classList.add('navbar-scrolled')
  }

  

  changeArrow(){
    this.body = document.getElementsByTagName("BODY")[0];
    this.nav1 = document.getElementById('nav')
    this.nav = document.getElementById('nav2')
    this.arrowButton = document.getElementById("arrow")
    if(this.state.arrowAction){
      this.nav1.classList.add('navbar-scrolled')
      this.arrowButton.src = "./images/angle-arrow-down.png"
      this.nav.classList.remove('nav2-changes')
      this.body.style.overflow = "hidden"
      this.setState({
        arrowAction : false
      })
    } else {
      this.nav1.classList.remove('navbar-scrolled')
      this.nav.classList.add('nav2-changes')
      this.arrowButton.src = "./images/up-arrow.png"
      this.body.style.overflow = "visible"
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0;
      this.setState({
      arrowAction : true
    })
  }
 
    }


  render(){
    return(
      <div id="nav" className='container-fluid navbar fixed-top'>
        <div className="row">
          <div className="col-12 col-md-8">
            <div className="row d-flex align-items-center">
              <div className="col-2 col-md-2 text-center p-0 d-none d-md-block">
                <Link to="/">LOGO</Link>
              </div>
              <div onClick={() => this.changeArrow()} className="col-2 col-md-2 text-center p-0 d-md-none">
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
                  <div className="col-4">
                    <a href="/">Homes</a>
                  </div>
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
        <div id="nav2" className="col-12 p-0 nav2-changes">
          <div className="row d-flex align-items-center">
            <div className="col-12 d-flex justify-content-center">
              <a href="/">Homes</a>
            </div>
            <div className="col-12 d-flex justify-content-center">Plans</div>
            <div className="col-12 d-flex justify-content-center">About</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;