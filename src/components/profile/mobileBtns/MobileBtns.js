import React, { Component } from 'react';
import './MobileBtns.css';

class MobileBtns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planColors: {
        "Basic":"#FF8514",
        "Nomad": "#D65A36",
        "Explorer": "#BB2A00"
      }
    }
  }

  render() {
    return(
      <div className="profile-mobileBtns">
        <button className="profile-mobileBtns__btn" style={{backgroundColor: this.state.planColors[this.props.plan]}} onClick={() => this.props.showInfos()}>Infos</button>
        <button className="profile-mobileBtns__btn" style={{backgroundColor: this.state.planColors[this.props.plan]}} onClick={() => this.props.showBookings()}>Bookings</button>
      </div>
    );
  }
}

export default MobileBtns;