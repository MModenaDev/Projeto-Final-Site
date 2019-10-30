import React, { Component } from 'react';
import './PriceCard.css';

class PriceCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardOpen1: true,
      cardOpen2: true,
      cardOpen3: true,
    }

    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard() {
    let allArrows = document.querySelectorAll('.form-card__arrow');
    // Como?
    console.log('should toggle');
  }

  render(props) {
    return (
      <div className="form-card">
        <div className="form-card__header">
          <h3 className="form-card__title" style={this.props.styleTitle}>{this.props.title}</h3>
          <img src="/images/upArrow.svg" alt="upward pointing arrow" className="form-card__arrow" onClick={() => this.toggleCard()}/>
        </div>
        <p className="form-card__description">{this.props.description}</p>

        <div className="form-card__collapse">
          <div className="form-card__hr-like"></div>

          <div className="form-card__price-container">
            <p className="form-card__price-container--RS">R$</p>
            <p className="form-card__price-container--price">{this.props.price}</p>
            <p className="form-card__price-container--monthly">por mês</p>
          </div>
            <div className="form-card__benefits-container">
              <img src="/images/world.svg" alt="world" className="form-card__benefits-container--img"/>
              <p className="form-card__benefits-container--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <div className="form-card__benefits-container">
              <img src="/images/airplane.svg" alt="airplane" className="form-card__benefits-container--img"/>
              <p className="form-card__benefits-container--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>   
            </div>
  
            <div className="form-card__benefits-container">
              <img src="/images/bed.svg" alt="bed" className="form-card__benefits-container--img"/>
              <p className="form-card__benefits-container--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            
            <button className="form-card__btn" onClick={this.props.btnClick} style={this.props.styleBg}>Quero esse plano!</button>
        </div>
      </div>
    );
  }
}


export default PriceCard;