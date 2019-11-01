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
    console.log(this.props);
    
    return (
      <Fragment >
        <NavbarLog />
        <div className="profile">
          <ProfileBanner role={this.props.loggedInUser.plan} name={this.props.loggedInUser.name} photoID={this.props.loggedInUser.photoID} />
          <div className="profile-content">
            <MobileBtns showInfos={this.showInfos} showBookings={this.showBookings} role={this.props.loggedInUser.plan}/>
            {(this.state.infos)?(<ProfileInfos user={this.props.loggedInUser} />):null}
            {(this.state.bookings)?(<ProfileBookings userId={this.props.loggedInUser._id} />):null}
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Profile;