import React, { Component } from 'react';
import './ProfileBanner.css';
import { Image } from 'cloudinary-react';

class ProfileBanner extends Component {
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
    console.log(this.props);
    
    return (
      <div className="profile-banner" style={{backgroundColor: this.state.planColors[this.props.plan]}}>
        {(this.props.photoID.length>0)?(
          <Image cloudName="gtmori" publicId={this.props.photoID[0].public_id} className="profile-photo" style={{borderColor: this.state.planColors[this.props.plan]}}></Image>
        ):(
          <svg width="100" height="103" viewBox="0 0 100 103" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-photo" style={{borderColor: this.state.planColors[this.props.plan]}}>
          <circle cx="49.5" cy="28.5" r="28.5" fill={this.state.planColors[this.props.plan]}/>
          <circle r="4" transform="matrix(-1 0 0 1 4 98)" fill={this.state.planColors[this.props.plan]}/>
          <circle r="4" transform="matrix(-1 0 0 1 96 99)" fill={this.state.planColors[this.props.plan]}/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.157715 98C2.19546 72.256 23.7322 52 50 52C76.2679 52 97.8046 72.256 99.8424 98H91.812C89.7978 76.6803 71.8469 60 50 60C28.1532 60 10.2023 76.6803 8.18804 98H0.157715Z" fill={this.state.planColors[this.props.plan]}/>
          </svg>
        )}
        <h3 className="profile-name">{this.props.name}</h3>
        <h4 className="profile-plan__name">{this.props.plan}</h4>
      </div>
    )
  }
}

export default ProfileBanner;