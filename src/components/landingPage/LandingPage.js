import React from 'react';
import Navbar from '../navbar/Navbar';
import Header from './header/Header'
import Howto from './howto/Howto'
import Placesdesk from './places/Placesdesk'
import Placesmob from './places/Placesmob'
import Review from './review/Reviews';
import Map from '../map/map'
import Footer from './footer/Footer'
// import Admin from './admin/Admin'

function LandingPage(props) {
  console.log("=======>",props)
  return (
    <div className="LandingPage">
      <Navbar />
      <Header login={props.login} changeLogin={props.changeLogin} />
      <Howto />
      <Placesdesk />
      <Placesmob />
      <Review />
    </div>  
  );
}

export default LandingPage;