import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css';
import { Link } from 'react-router-dom'

class CardMobile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  bgImage() {
    if (this.props.house.images.length === 0) {
      return {backgroundImage: 'url(/images/places.png)'}
    } else {
      return {backgroundImage: `url(https://res.cloudinary.com/gtmori/image/upload/v1572468634/${this.props.house.images[0].public_id}.png)`}
    }
  }

  render() {    
    return (
      <Link to={`/home-details/${this.props.house._id}`}>
        <div className="col-10 card-bg p-0 m-0 mt-4" style={this.bgImage()}>
          <div className="row">
            <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
                <h4>{this.props.house.name}</h4>
                <p>{this.props.house.adress}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default CardMobile