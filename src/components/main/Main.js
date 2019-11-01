import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css'
import NavbarLog from '../navbar/NavbarLog'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Axios from 'axios';


class Main extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: false,
    }
    this.spImg = '/images/saopaulo.png'
    this.bangImg = '/images/bangkok.png'
    this.budImg = '/images/budapest.png'
    this.taiImg = '/images/taipei.png'
    this.berImg = '/images/berlin.jpg'
    this.medImg = '/images/medellin.jpg'
    this.tokImg = '/images/tokyo.jpg'
    this.belImg = '/images/belgrade.jpg'
    this.istImg = '/images/istambul.jpg'

    this.planeLoading = this.planeLoading.bind(this)
  }

  

    componentDidMount() {
      this.setState({isLoading: true}, () => this.planeLoading())
    }

    planeLoading(){
      console.log('PLANE')
      let x = setTimeout(() => this.setState({
        isLoading: false
      }), 1000)
    }



  render(){
    return(
      (!this.state.isLoading)?(
      <Fragment>
        <NavbarLog />
        <div className="container-fluid">
          <div className="row main-header">
            <div className="col-12 d-flex align-items-end">
              <span className="main-title">Explore the World</span>
              {/* <img src="./images/world.svg" alt=""/> */}
            </div>
          </div>
          <div className="row main-city-cards mt-5 d-flex justify-content-around">
            <Link to="/home/SaoPaulo" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0 p-0" style={{backgroundImage: `url(${this.spImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>SÃO PAULO</span>
                  <span className="country">Brasil</span>
                </div> 
              </div>      
            </Link>
            <Link to="/home/Bangkok" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0" style={{backgroundImage: `url(${this.bangImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>BANGKOK</span>
                  <span className="country">Thailand</span>
               </div> 
              </div>
            </Link>
            <Link to="/home/Budapest" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0" style={{backgroundImage: `url(${this.budImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>BUDAPEST</span>
                  <span className="country">Hungary</span>
                </div> 
              </div>
            </Link>
            <Link to="/home/Taipei" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0" style={{backgroundImage: `url(${this.taiImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>TAIPEI</span>
                  <span className="country">Taiwan</span>
                </div> 
              </div>
            </Link>
            <Link to="/home/Berlin" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0" style={{backgroundImage: `url(${this.berImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>BERLIN</span>
                  <span className="country">Germany</span>
                </div> 
              </div>
            </Link>
            <Link to="/home/Medellin" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0" style={{backgroundImage: `url(${this.medImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>MEDELLIN</span>
                  <span className="country">Colombia</span>
                </div> 
              </div>
            </Link>
            <Link to="/home/Tokyo" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0" style={{backgroundImage: `url(${this.tokImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>TOKYO</span>
                  <span className="country">Japan</span>
                </div> 
              </div>
            </Link>
            <Link to="/home/Belgrade" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0" style={{backgroundImage: `url(${this.belImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>BELGRADE</span>
                  <span className="country">Serbia</span>
                </div> 
              </div>
            </Link>
            <Link to="/home/Istanbul" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center p-0" style={{backgroundImage: `url(${this.istImg})`}}>
              <div className="city-cards--bg">
                <div className="city-cards--wrapper">
                  <span>ISTANBUL</span>
                  <span className="country">Turkey</span>
                </div> 
              </div>
            </Link>

          </div>
          
          
        </div>
        <Footer />
      </Fragment>
      ):(
        <div className="house-loading">
          <Loader className="house-loader" type="Plane" color="#FB5D30" height={100} width={100}/>
        </div>  
      )
    )
  }
}

export default Main