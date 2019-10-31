import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css';

class CardMobile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props);
    
    return (
      <div className="col-10 card-bg p-0 m-0 mt-4">
      <div className="row">
        <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
            <h4>{this.props.house.name}</h4>
            <p>Av. Paulista, 1374 - Bela Vista, São Paulo</p>
        </div>
      </div>
    </div>
    )
  }
}

export default CardMobile