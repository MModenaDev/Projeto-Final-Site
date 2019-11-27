import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Placesdesk.css'
import Homecitydesk from './cities/Homecitydesk';
import { Link } from 'react-router-dom'


class Placesdesk extends Component {

  render() {
    return (
        <div data-aos="zoom-in-right" className="container-fluid placesdesk d-none d-md-flex">
            <h1 className="placedesk__title">Regions</h1>
            <p className="placedesk__description">Know the places we own our facilities and choose the best one for you</p>
            <div className="col-12">
              <div className="row d-flex justify-content-center mt-4">
                <Link className="col-3 homecitydesk d-flex align-items-center justify-content-center" to="/home/Bangkok">
                  <Homecitydesk title='Bangkok' videosrc='./videos/bangkokmovie.mp4' />
                </Link>
                <Link className="col-3 homecitydesk d-flex align-items-center justify-content-center"  to="/home/Budapest">
                  <Homecitydesk title='Budapest' videosrc='./videos/budapestmovie.mp4' />
                </Link>
                <Link className="col-3 homecitydesk d-flex align-items-center justify-content-center" to="/home/Taipei">
                  <Homecitydesk title='Taipei' videosrc='./videos/taipeimovie.mp4' />
                </Link>
                <Link className="col-3 homecitydesk d-flex align-items-center justify-content-center" to="/home/SaoPaulo">
                  <Homecitydesk title='São Paulo' videosrc='./videos/spmovie2.mp4' />
                </Link>
              </div>
          </div>
        </div>
    )

  }

}
export default Placesdesk;