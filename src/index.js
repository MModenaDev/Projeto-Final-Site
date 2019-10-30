import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import Howto from './components/howto/Howto'
// import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer'
// import Map from './components/map/map';
// import Home from './components/home/Home';



ReactDOM.render(
    <BrowserRouter>
        <App />
        
    </ BrowserRouter>
    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
