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

function LandingPage() {
  return (
    <div className="LandingPage">
      <Navbar />
      <Header />
      <Howto />
      <Placesdesk />
      <Placesmob />
      {/* <Admin></Admin> */}
      <Placesmob />
      <Review />
      <Map />
    </div>  
  );
}

export default LandingPage;