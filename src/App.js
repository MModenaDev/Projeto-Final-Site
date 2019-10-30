import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header'
import Howto from './components/howto/Howto'
import Placesdesk from './components/places/Placesdesk'
import Placesmob from './components/places/Placesmob'
import Review from './components/review/Reviews';
import Map from './components/map/map'
import Footer from './components/footer/Footer'
import Admin from './components/admin/Admin'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Howto />
      <Placesdesk />
      <Placesmob />
      <Review />
      <Map />
    </div>  
  );
}

export default App;
