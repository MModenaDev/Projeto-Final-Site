import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header'
import Howto from './components/howto/Howto'
import Placesdesk from './components/places/Placesdesk'
import Placesmob from './components/places/Placesmob'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Howto />
      <Placesdesk />
      <Placesmob />
    </div>  
  );
}

export default App;
