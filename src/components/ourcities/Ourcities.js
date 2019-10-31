import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Ourcities.css'
import Navbar from '../navbar/Navbar'
import Homecitydesk from '../landingPage/places/cities/Homecitydesk';
import Homecitymob from '../landingPage/places/cities/Homecitymob';
import { Link } from 'react-router-dom'

class Ourcities extends Component {
  render(){
    return(
      <Fragment>
        <Navbar />
        <div className="container-fluid main-page">
          <div className="row d-none d-md-flex justify-content-center main-page2">
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
            </div>
          <div className="row d-flex d-md-none main-page2">
            <div className='col-12 homecitymob d-flex align-items-center justify-content-center p-0'>
                <Link to="/home/SaoPaulo" className='w-100'>
                  <Homecitymob title='São Paulo' imgUrl='./images/saopaulo.png'/>
                </Link>
              </div>
              <div className='col-12 margin-negative homecitymob d-flex align-items-center justify-content-center p-0'>
                <Link to="/home/Bangkok" className='w-100'>
                  <Homecitymob title='Bangkok' imgUrl='./images/bangkok.png'/> 
                </Link>
              </div>
              <div className='col-12 margin-negative homecitymob d-flex align-items-center justify-content-center p-0'>
                <Link to="/home/Budapest" className='w-100'>
                  <Homecitymob title='Budapest' imgUrl='./images/budapest.png'/> 
                </Link>
              </div>
              <div className='col-12 margin-negative homecitymob d-flex align-items-center justify-content-center p-0'>
                <Link to="/home/Taipei" className='w-100'>
                  <Homecitymob title='Taipei' imgUrl='./images/taipei.png'/>
                </Link>
              </div>
            </div>
        </div>

      </Fragment>
    )
  }
}

export default Ourcities