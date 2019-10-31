import React, { Component , Fragment } from 'react';
import NavbarLog from '../navbar/NavbarLog';
import ProfileInfos from './profileInfos/ProfileInfos'
import ProfileBookings from './profileBookings/ProfileBookings';
import ProfileBanner from './profileBanner/ProfileBanner';
import MobileBtns from './mobileBtns/MobileBtns';
import Footer from '../footer/Footer';
import './Profile.css';

class Profile extends Component {
  constructor(props) {  
    super(props);

    this.state = {
      infos: true,
      bookings: true
    }

    this.showInfos = this.showInfos.bind(this);
    this.showBookings = this.showBookings.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth < 450) {
      this.setState({
        bookings: false
      })
    }
  }

  showInfos() {
    if (this.state.infos === false) {
      this.setState({
        infos: true,
        bookings: false
      });
    }
  }

  showBookings() {
    if (this.state.bookings === false) {
      this.setState ({
        infos: false,
        bookings: true,
      });
    }
  }

  render() {
    return (
      <Fragment >
        <NavbarLog />
        <div className="profile">
          <ProfileBanner />
          <div className="profile-content">
            <MobileBtns showInfos={this.showInfos} showBookings={this.showBookings}/>
            {(this.state.infos)?(<ProfileInfos />):null}
            {(this.state.bookings)?(<ProfileBookings />):null}
          </div>
        </div>
        <Footer />
      </Fragment>
    
    );
  }
}

export default Profile;