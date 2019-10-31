import React, { Component } from 'react';
import './ProfileBanner.css';

class ProfileBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div className="profile-banner" style={{backgroundColor: "#BB2A00"}}>
        <img src="/images/avatar.png" alt="" className="profile-photo"/>
        <h3 className="profile-name">My Name</h3>
        <h4 className="profile-plan__name">Explorer</h4>
      </div>
    )
  }
}

export default ProfileBanner;