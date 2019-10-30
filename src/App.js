import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import AuthService from "./components/auth/auth-service";
import Admin from "./components/admin/Admin";
import Header from "./components/header/Header";
import Howto from "./components/howto/Howto";
import LandingPage from "./components/landingPage/LandingPage";
import Map from "./components/map/map";
import Navbar from "./components/navbar/Navbar";
import Placesdesk from "./components/places/Placesdesk";
import Placesmob from "./components/places/Placesmob";
import Review from "./components/review/Reviews";
import Signup from "./components/signup/Signup";

import "./App.css";

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
        <Switch>
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/signup" exact={true} component={Signup} />
          {/* <Route path="/howto" component={Howto} />
            <Route path="/map" component={Map} />
            <Route patch="/home" component={Home} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
