import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logowhite1 from '../../logowhite1.svg'
import Logowhite from '../../logowhite.svg'
import Logoorange1 from '../../logoorange1.svg'
import Logoorange from '../../logoorange.svg'

class Navbar extends Component {

  constructor(props){
    super(props)
    this.imgdesk = Logoorange1
    this.imgmob = Logoorange
    this.state = {
      arrowAction : true,
      isTop : true,
  
    }
  }

  someMethod() {
    // Force a render without state change...
    this.forceUpdate();
}

  componentDidMount() {
    console.log('mounted')
    this.changeState()
  }

  // componentWillUnmount() {
  //   console.log('unmount')
  //   this.setState({
  //     isTop : true,
  //   })
  // }

  changeState(){
    this.nav = document.getElementById("nav")
    this.nav.classList.remove('navbar-scrolled')
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY <= document.documentElement.clientHeight;
      if (isTop !== this.state.isTop) {
        console.log(this.imgdesk)
        this.setState({ isTop })
        this.imgdesk = Logoorange1
        this.imgmob = Logoorange
        this.changeColor()
      }
    });
  }

  changeColor(){
    this.nav = document.getElementById("nav")
    if (this.nav){
      if(!this.state.isTop){
        console.log('transparente')
        this.nav.classList.add('navbar-scrolled')
      } else {this.nav.classList.remove('navbar-scrolled')
        this.imgdesk = Logoorange1
        this.imgmob = Logoorange
        console.log('laranja')}
    }
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
      this.imgmob = Logoorange
      this.setState({
        arrowAction : false
      })
    } else {
      this.nav1.classList.remove('navbar-scrolled')
      this.nav.classList.add('nav2-changes')
      this.arrowButton.src = "./images/up-arrow.png"
      this.body.style.overflow = "visible"
      this.imgmob = Logowhite
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
          <div className="col-12">
            <div className="row d-flex align-items-center">

              <div className="col-2 col-md-2 text-center p-0 d-none d-md-block">
                <a href="/">
                  <img className='logo-sizedesk' src={this.imgdesk} alt=""/>
                </a>
                
              </div>

              <div onClick={() => this.changeArrow()} className="col-2 col-md-2 text-center p-0 d-md-none">
                <img className='logo-sizemob' src={this.imgmob} alt=""/>
              </div>

              <div onClick={() => this.changeArrow()} className="col-1 arrows d-flex d-md-none justify-content-left p-0">
                <img id="arrow" src="./images/angle-arrow-down.png" alt=""/>
              </div>

              <div className="col-9 col-md-4">
                <input className="searchbar" placeholder="Seach your next home" type="text"/>
              </div>
              <div className="col-6 d-none d-md-flex ">
                <div className="row d-flex align-items-center justify-content-end">
                  <div className="col-3">
                    <Link to="/ourcities">Our Cities</Link>
                  </div>
                  <div className="col-3">
                    <Link to="/pricing">Pricing</Link>
                  </div>
                  <div className="col-3">
                  < Link to="/about">About</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nav2" className="col-12 p-0 nav2-changes">
          <div className="row d-flex align-items-top  pt-5">
            <div className="col-12 d-flex flex-column justify-content-start mt-2 align-items-center">
              <Link className='my-3' to="/ourcities">Our cities</Link>
              <Link className='my-3' to="/pricing">Pricing</Link>
              <Link className='my-3' to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;