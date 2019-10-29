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

      <div className="howto-container">
        <h2 className="howto__title">Como usar o NSA</h2>
        <p className="howto__description">Queremos proporcionar ao nosso usuário uma experiência única, desde o agendamento até a hospedagem</p>
        <div className="howto__card-container">

          <div className="howto__card-container--card">
            {/* <img className="howto__card-container--card-img" src="./images/backpack.svg" alt="drawing of a backpack" /> */}
            <p className="howto__card-container--card-text">
            <img className="howto__card-container--card-img howto__img-fix1" src="./images/backpack.svg" alt="drawing of a backpack" />
              Faça suas malas
            </p>
          </div>
          <div className="howto__card-container--card">
            {/* <img className="howto__card-container--card-img" src="./images/airplane.svg" alt="drawing of an airplane flying" /> */}
            <p className="howto__card-container--card-text">
            <img className="howto__card-container--card-img" src="./images/airplane.svg" alt="drawing of an airplane flying" />
              Escolha um local ao redor do mundo
            </p>
          </div>
          <div className="howto__card-container--card">
            {/* <img className="howto__card-container--card-img" src="./images/world.svg" alt="drawing of planet earth" /> */}
            <p className="howto__card-container--card-text">
            <img className="howto__card-container--card-img howto__img-fix3" src="./images/world.svg" alt="drawing of planet earth" />
              Viva novas experiências
            </p>
          </div>

        </div>
      </div>
      







      // <div className="container-fluid howto">
      //    <div className="row d-flex justify-content-center">
      //      <div className="col-12 text-center pt-md-5">
      //        <h1>Como usar o NSA</h1>
      //      </div>
      //      <div className="col-12 text-center">
      //        <h2>Queremos proporcionar ao nosso usuário uma experiência única, desde o agendamento até a hospedagem</h2>
      //      </div>
      //      <div className="col-12 col-md-4 d-flex justify-content-center howto-img">
      //        <img src="./images/backpack.svg" alt="drawing of a backpack"/>
      //        <p className="pl-4">Faça suas malas</p>
      //      </div>
      //      <div className="col-12 col-md-4 d-flex justify-content-center howto-img">
      //        <img src="./images/airplane.svg" alt="drawing of an airplane flying"/>
      //        <p className="pl-4 text-break">Escolha um local ao redor do mundo</p>
      //      </div>
      //      <div className="col-12 col-md-4 d-flex justify-content-center howto-img">
      //        <img src="./images/world.svg" alt="drawing of planet earth"/>
      //        <p className="pl-4">Viva novas experiências</p>
      //      </div>

      //    </div>
      //  </div>
    )
  }
}

export default Howto