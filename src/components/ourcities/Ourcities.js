import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Ourcities.css'
import Navbar from '../navbar/Navbar'
import Homecitydesk from '../landingPage/places/cities/Homecitydesk';
import Homecitymob from '../landingPage/places/cities/Homecitymob';
import { Link } from 'react-router-dom'

class Ourcities extends Component {
  constructor(){
    super()
    this.spImg = '/images/saopaulo.png'
    this.bangImg = '/images/bangkok.png'
    this.budImg = '/images/budapest.png'
    this.taiImg = '/images/taipei.png'
    this.berImg = '/images/berlin.jpg'
    this.medImg = '/images/medellin.jpg'
    this.tokImg = '/images/tokyo.jpg'
    this.belImg = '/images/belgrade.jpg'
    this.istImg = '/images/istambul.jpg'
  }


  render(){
    return(
      <Fragment>
        <Navbar />
        <div className="container-fluid ourcities-page">
          <div className="row d-none d-md-flex justify-content-center ourcities-page2">
              <Link data-aos="fade-up" className="col-5 homecitydesk-page d-flex align-items-center justify-content-center my-4" to="/home/Bangkok">
                <Homecitydesk title='Bangkok' videosrc='./videos/bangkokmovie.mp4' />
              </Link>
              <Link data-aos="fade-up" className="col-5 homecitydesk-page d-flex align-items-center justify-content-center my-4"  to="/home/Budapest">
                <Homecitydesk title='Budapest' videosrc='./videos/budapestmovie.mp4' />
              </Link>
              <Link data-aos="fade-up" className="col-5 homecitydesk-page d-flex align-items-center justify-content-center my-4" to="/home/Taipei">
                <Homecitydesk title='Taipei' videosrc='./videos/taipeimovie.mp4' />
              </Link>
              <Link data-aos="fade-up" className="col-5 homecitydesk-page d-flex align-items-center justify-content-center my-4" to="/home/SaoPaulo">
                <Homecitydesk title='São Paulo' videosrc='./videos/spmovie2.mp4' />
              </Link>
              <Link data-aos="fade-up" className="col-5 homecitydesk-page d-flex align-items-center justify-content-center my-4" to="/home/Berlin">
                <Homecitydesk title='Berlin' videosrc='./videos/berlinmovie.mp4' />
              </Link>
              <Link data-aos="fade-up" className="col-5 homecitydesk-page d-flex align-items-center justify-content-center my-4"  to="/home/Istanbul">
                <Homecitydesk title='Istanbul' videosrc='./videos/istanbulmovie.mp4' />
              </Link>
              <Link data-aos="fade-up" className="col-5 homecitydesk-page d-flex align-items-center justify-content-center my-4" to="/home/Medellin">
                <Homecitydesk title='Medellin' videosrc='./videos/medellinmovie.mp4' />
              </Link>
              <Link data-aos="fade-up" className="col-5 homecitydesk-page d-flex align-items-center justify-content-center my-4" to="/home/Tokyo">
                <Homecitydesk title='Tokyo' videosrc='./videos/tokyomovie.mp4' />
              </Link>
            </div>
          <div className="row d-flex d-md-none ourcities-mobile justify-content-center">
          <Link to="/home/SaoPaulo" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.spImg})`}}>
              <span>SÃO PAULO</span>
              <span className="country">Brasil</span>
            </Link>
            <Link to="/home/Bangkok" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.bangImg})`}}>
              <span>BANGKOK</span>
              <span className="country">Thailand</span>
            </Link>
            <Link to="/home/Budapest" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.budImg})`}}>
              <span>BUDAPEST</span>
              <span className="country">Hungary</span>
            </Link>
            <Link to="/home/Taipei" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.taiImg})`}}>
              <span>TAIPEI</span>
              <span className="country">Taiwan</span>
            </Link>
            <Link to="/home/Berlin" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.berImg})`}}>
              <span>BERLIN</span>
              <span className="country">Germany</span>
            </Link>
            <Link to="/home/Medellin" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.medImg})`}}>
              <span>MEDELLIN</span>
              <span className="country">Colombia</span>
            </Link>
            <Link to="/home/Tokyo" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.tokImg})`}}>
              <span>TOKYO</span>
              <span className="country">Japan</span>
            </Link>
            <Link to="/home/Belgrade" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.belImg})`}}>
              <span>BELGRADE</span>
              <span className="country">Serbia</span>
            </Link>
            <Link to="/home/Istanbul" data-aos="fade-up" className="flex-column col-10 col-md-3 city-cards mx-4 my-3 d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${this.istImg})`}}>
              <span>ISTANBUL</span>
              <span className="country">Turkey</span>
            </Link>
          </div>
        </div>

      </Fragment>
    )
  }
}

export default Ourcities