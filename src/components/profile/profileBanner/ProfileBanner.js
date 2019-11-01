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
    // console.log(this.props);
    
    return (
      <div className="profile-banner" style={{backgroundColor: this.state.planColors[this.props.plan]}}>
        {(this.props.photoID.length>0)?(
          <Image cloudName="gtmori" publicId={this.props.photoID[0].public_id} className="profile-photo" ></Image>
        ):(
            <img src="./images/photoPlaceholder" alt="" className="profile-photo" />
        )}
        <h3 className="profile-name">{this.props.name}</h3>
        <h4 className="profile-plan__name">{this.props.plan}</h4>
      </div>
    )
  }
}

export default ProfileBanner;