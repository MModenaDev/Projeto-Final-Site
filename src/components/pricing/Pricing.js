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
              <PriceCard title="Basic" description="Made for those who seek simplicity in their daily lives." price="599" styleTitle={{color: "#FF8514"}} user={this.props.user} getUser={this.props.getUser} {...this.props} styleBg={{backgroundColor: "#FF8514"}} arrowUrl={'/images/collapseArrowYellow.svg'} showArrow={this.state.showArrow} benefit1={"This is our first benefit [placeholder]"} benefit2={"This is our second benefit [placeholder]"} benefit3={"This is our third benefit [placeholder]"}/>
              <PriceCard title="Nomad" description="The best plan for those who want flexibility in their stays." price="799" styleTitle={{color: "#D65A36"}} user={this.props.user} getUser={this.props.getUser} {...this.props} styleBg={{backgroundColor: "#D65A36"}} arrowUrl={'/images/collapseArrowOrange.svg'} showArrow={this.state.showArrow} benefit1={"This is our first benefit [placeholder]"} benefit2={"This is our second benefit [placeholder]"} benefit3={"This is our third benefit [placeholder]"}/>
              <PriceCard title="Explorer" description="For those who want to explore the world with great comfort." price="999" styleTitle={{color: "#BB2A00"}} user={this.props.user} getUser={this.props.getUser} {...this.props} styleBg={{backgroundColor: "#BB2A00"}} arrowUrl={'/images/collapseArrowDark.svg'} showArrow={this.state.showArrow} benefit1={"This is our first benefit [placeholder]"} benefit2={"This is our second benefit [placeholder]"} benefit3={"This is our third benefit [placeholder]"}/>
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