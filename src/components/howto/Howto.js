import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Howto.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class Howto extends Component {
  render(){
    return(
      <div className="container-fluid howto">
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center pt-md-5">
            <h1>Como usar o NSA</h1>
          </div>
          <div className="col-12 text-center">
            <h2>Queremos proporcionar ao nosso usuário uma experiência única, desde o agendamento até a hospedagem</h2>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center howto-img">
            <img src="./images/backpack.png" alt=""/>
            <p className="pl-4">Faça suas malas</p>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center howto-img">
            <img src="./images/plane.png" alt=""/>
            <p className="pl-4 text-break">Escolha um local ao redor do mundo</p>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center howto-img">
            <img src="./images/worldwide.png" alt=""/>
            <p className="pl-4">Viva novas experiências</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Howto