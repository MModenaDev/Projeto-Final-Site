import React, { Component } from 'react';
import './App.css';

import AuthService from "./components/auth/auth-service"

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header'
import Howto from './components/howto/Howto'
import Placesdesk from './components/places/Placesdesk'
import Placesmob from './components/places/Placesmob'
import Review from './components/review/Reviews';
import Map from './components/map/map'
import Admin from './components/admin/Admin'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  componentDidMount() {
    this.fetchUser();
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header getUser={this.getTheUser} />
        <Howto />
        <Placesdesk />
        {/* <Admin></Admin> */}
        <Placesmob />
        <Review />
        <Map />
      </div>  
    );
  }
}

export default App;
