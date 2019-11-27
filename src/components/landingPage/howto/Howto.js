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
        <h2 className="howto__title">How to use</h2>
        <p className="howto__description">We want to provide our users with a unique experience from scheduling to hosting.</p>
        <div className="howto__card-container">

          <div className="howto__card-container--card">
            {/* <img className="howto__card-container--card-img" src="./images/backpack.svg" alt="drawing of a backpack" /> */}
            <p className="howto__card-container--card-text">
            <img className="howto__card-container--card-img howto__img-fix1" src="./images/backpack.svg" alt="drawing of a backpack" />
              Pack your bags
            </p>
          </div>
          <div className="howto__card-container--card">
            {/* <img className="howto__card-container--card-img" src="./images/airplane.svg" alt="drawing of an airplane flying" /> */}
            <p className="howto__card-container--card-text">
            <img className="howto__card-container--card-img" src="./images/airplane.svg" alt="drawing of an airplane flying" />
              Choose a place around the world
            </p>
          </div>
          <div className="howto__card-container--card">
            {/* <img className="howto__card-container--card-img" src="./images/world.svg" alt="drawing of planet earth" /> */}
            <p className="howto__card-container--card-text">
            <img className="howto__card-container--card-img howto__img-fix3" src="./images/world.svg" alt="drawing of planet earth" />
              Enjoy new experiences
            </p>
          </div>

        </div>
      </div>
    )
  }
}

export default Howto