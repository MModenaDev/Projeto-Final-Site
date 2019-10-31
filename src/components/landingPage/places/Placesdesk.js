import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Placesdesk.css'
import Homecitydesk from './cities/Homecitydesk';
import { Link } from 'react-router-dom'


class Placesdesk extends Component {

  render() {
    return (
        <div data-aos="zoom-in-right" className="container-fluid placesdesk d-none d-md-flex">
            <h1 className="placedesk__title">Regiões</h1>
            <p className="placedesk__description">Conheça os lugares que possuimos nossas instalações e escolha a melhor para você</p>
            <div className="col-12">
              <div className="row d-flex justify-content-center mt-4">
                <Link to="/home/Bangkok">
                  <Homecitydesk title='Bangkok' videosrc='./videos/bangkokmovie.mp4' />
                </Link>
                <Link to="/home/Budapest">
                  <Homecitydesk title='Budapest' videosrc='./videos/budapestmovie.mp4' />
                </Link>
                <Link to="/home/Taipei">
                  <Homecitydesk title='Taipei' videosrc='./videos/taipeimovie.mp4' />
                </Link>
                <Link to="/home/SaoPaulo">
                  <Homecitydesk title='São Paulo' videosrc='./videos/spmovie2.mp4' />
                </Link>
              </div>
          </div>
          </div>
    )

  }

}
export default Placesdesk;