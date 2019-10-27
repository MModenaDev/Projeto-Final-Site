import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Placesmob.css'
import Homecitymob from './cities/Homecitymob';

class Placesmob extends Component {
 
  render(){
    return(
      <div className="container-fluid d-flex d-md-none placesmob pt-5 mt-3">
        <div className="row">
          <div className="col-12">
            <h1>Regiões</h1>
          </div>
          <div className="col-12 margin-fix">
            <h3>Conheça os lugares que possuimos nossas instalações e escolha a melhor para você</h3>
          </div>
          <Homecitymob title='São Paulo' imgUrl='./images/saopaulo.png' />
          <Homecitymob title='Bangkok' imgUrl='./images/bangkok.png' />
          <Homecitymob title='Budapest' imgUrl='./images/budapest.png' />
          <Homecitymob title='Taipei' imgUrl='./images/taipei.png' />
        </div>
      </div>
    )
  }
}

export default Placesmob