import React, { Component } from 'react';
import './MobileBtns.css';

class MobileBtns extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className="profile-mobileBtns">
        <button className="profile-mobileBtns__btn" style={{backgroundColor: "#BB2A00"}} onClick={() => this.props.showInfos()}>Infos</button>
        <button className="profile-mobileBtns__btn" style={{backgroundColor: "#BB2A00"}} onClick={() => this.props.showBookings()}>Bookings</button>
      </div>
    );
  }
}

export default MobileBtns;