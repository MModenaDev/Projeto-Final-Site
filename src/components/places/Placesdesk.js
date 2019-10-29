import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Placesdesk.css'
import Homecitydesk from './cities/Homecitydesk';


class Placesdesk extends Component {

  render() {
    return (
        <div className="container-fluid placesdesk d-none d-md-flex">
            <h1 className="placedesk__title">Regiões</h1>
            <p className="placedesk__description">Conheça os lugares que possuimos nossas instalações e escolha a melhor para você</p>
            <div className="col-12">
              <div className="row d-flex justify-content-center mt-4">
                <Homecitydesk title='São Paulo' videosrc='./videos/spmovie2.mp4' />
                <Homecitydesk title='Bangkok' videosrc='./videos/bangkokmovie.mp4' />
                <Homecitydesk title='Budapest' videosrc='./videos/budapestmovie.mp4' />
                <Homecitydesk title='Taipei' videosrc='./videos/taipeimovie.mp4' />
              </div>
          </div>
          </div>

    )

  }

}
export default Placesdesk;