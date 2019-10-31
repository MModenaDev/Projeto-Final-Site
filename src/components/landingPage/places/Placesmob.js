import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Placesmob.css'
import Homecitymob from './cities/Homecitymob';
import { Link } from 'react-router-dom'

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
          <Link to="/home/SaoPaulo">
            <Homecitymob title='São Paulo' imgUrl='./images/saopaulo.png' />
          </Link>
          <Link to="/home/Bangkok">
            <Homecitymob title='Bangkok' imgUrl='./images/bangkok.png' />
          </Link>
          <Link to="/home/Budapest">
            <Homecitymob title='Budapest' imgUrl='./images/budapest.png' />
          </Link>
          <Link to="/home/Taipei">
            <Homecitymob title='Taipei' imgUrl='./images/taipei.png' />
          </Link>
        </div>
      </div>
    )
  }
}

export default Placesmob