import React, { Component } from 'react';
import './PriceCard.css';
import axios from "axios";

class PriceCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: true
    }

    this.toggleCard = this.toggleCard.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    if(this.props.showArrow) this.setState({ showInfo: false });
    if(window.innerWidth < 450) this.setState({ showInfo: false});
  }

  toggleCard() {
    this.setState({ showInfo: !this.state.showInfo});
  }

  clickHandler(e) {
    e.preventDefault()
    if(this.props.user){
      const { _id } = this.props.user
      axios.put("http://localhost:5000/api/user/update", { id: _id, plan: this.props.title } )
            .then(response => {
              this.props.getUser(response.data);
              this.props.history.push("profile");
            })
            .catch(error => console.log(error))
    } else {
      this.props.history.push("signup");
    }
    
  }

  render(props) {
    return (
      <div className="form-card">
        <div className="form-card__header">
          <h3 className="form-card__title" style={this.props.styleTitle}>{this.props.title}</h3>
          {(this.props.showArrow)?(<img src={this.props.arrowUrl} alt="upward pointing arrow" className="form-card__arrow" onClick={() => this.toggleCard()}/>):null}
        </div>
        <p className="form-card__description">{this.props.description}</p>

        {(this.state.showInfo)?(<div className="form-card__collapse">
          <div className="form-card__hr-like"></div>

          <div className="form-card__price-container">
            <p className="form-card__price-container--RS">US$</p>
            <p className="form-card__price-container--price">{this.props.price}</p>
            <p className="form-card__price-container--monthly">/month</p>
          </div>
            <div className="form-card__benefits-container">
              <img src="/images/world.svg" alt="world" className="form-card__benefits-container--img"/>
              <p className="form-card__benefits-container--text">{this.props.benefit1}</p>
            </div>
            
            <div className="form-card__benefits-container">
              <img src="/images/airplane.svg" alt="airplane" className="form-card__benefits-container--img"/>
              <p className="form-card__benefits-container--text">{this.props.benefit2}.</p>   
            </div>
  
            <div className="form-card__benefits-container">
              <img src="/images/bed.svg" alt="bed" className="form-card__benefits-container--img"/>
              <p className="form-card__benefits-container--text">{this.props.benefit3}</p>
            </div>
            {(window.location.pathname === "/pricing")?(
              <button className="form-card__btn" plan={this.props.title} onClick={(e) => this.clickHandler(e)} style={this.props.styleBg}>I want this plan!</button>
            ):(
              <button className="form-card__btn" plan={this.props.title} onClick={this.props.btnClick} style={this.props.styleBg}>I want this plan!</button>
            )}
        </div>):null}
      </div>
    );
  }
}


export default PriceCard;