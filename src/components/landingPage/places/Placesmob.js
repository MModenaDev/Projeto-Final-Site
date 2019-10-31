import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Placesmob.css'
import Homecitymob from './cities/Homecitymob';

class Placesmob extends Component {
 
  render(){
    return(
      <div className="container-fluid d-flex d-md-none placesmob">
        <div className="row">
          <div className="col-12">
            <h1>Regiões</h1>
          </div>
          <div className="col-12 margin-fix">
            <h3>Conheça os lugares que possuimos nossas instalações e escolha a melhor para você</h3>
          </div>
          <Homecitymob fade="fade-right" title='São Paulo' imgUrl='./images/saopaulo.png' />
          <Homecitymob fade="fade-left" title='Bangkok' imgUrl='./images/bangkok.png' />
          <Homecitymob fade="fade-right" title='Budapest' imgUrl='./images/budapest.png' />
          <Homecitymob fade="fade-left" title='Taipei' imgUrl='./images/taipei.png' />
        </div>
      </div>
    )
  }
}

export default Placesmob