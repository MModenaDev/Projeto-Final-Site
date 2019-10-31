import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Howto.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class Howto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAos: true
    }
  }

  componentDidMount() {
    if (window.innerWidth < 450) {
      this.setState({
        showAos: false
      })
    }
  }


  render(){
    return(

      
      <div data-aos={this.state.showAos?"fade-right":null}  className="howto-container">
      
      {/* <div data-aos="fade-right" className="howto-container"> */}
        <h2 className="howto__title">Como usar o Wander</h2>
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
    )
  }
}

export default Howto