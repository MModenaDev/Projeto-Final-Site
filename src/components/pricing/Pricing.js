import React, { Component, Fragment } from 'react';
import PriceCard from '../priceCard/PriceCard';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Pricing.css';

class Pricing extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      showArrow: false
    }
  }

  componentDidMount() {
    if (window.innerWidth < 1200) {
      this.setState({
        showArrow: true,
      })
    }
  }

  render() {
    return (
      <Fragment>
      <Navbar />
      <div className="pricing">
        <div data-aos="fade-down" className="form-container__outer">
          <div className="form-container2 pricing__fix-width">
            <div className="form__card-container">
              <PriceCard title="Básico" description="Feito para quem busca simplicidade no seu dia-a-dia." price="599" styleTitle={{color: "#FF8514"}} styleBg={{backgroundColor: "#FF8514"}} arrowUrl={'/images/collapseArrowYellow.svg'} showArrow={this.state.showArrow} benefit1={"Primeiro benefício"} benefit2={"Segundo benefício"} benefit3={"Terceiro benefício"}/>
              <PriceCard title="Nômade" description="O melhor plano para quem quer flexibilidade em suas estadias." price="799" styleTitle={{color: "#D65A36"}} styleBg={{backgroundColor: "#D65A36"}} arrowUrl={'/images/collapseArrowOrange.svg'} showArrow={this.state.showArrow} benefit1={"Primeiro benefício"} benefit2={"Segundo benefício"} benefit3={"Terceiro benefício"}/>
              <PriceCard title="Explorador" description="Para quem deseja explorar o mundo com muito conforto." price="999" styleTitle={{color: "#BB2A00"}} styleBg={{backgroundColor: "#BB2A00"}} arrowUrl={'/images/collapseArrowDark.svg'} showArrow={this.state.showArrow} benefit1={"Primeiro benefício"} benefit2={"Segundo benefício"} benefit3={"Terceiro benefício"}/>
            </div>
          </div>
        </div>
      </div>
        
      <Footer />
    </Fragment>
    );
  }
}

export default Pricing;