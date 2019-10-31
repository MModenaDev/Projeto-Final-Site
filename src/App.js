import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AuthService from "./components/auth/auth-service";
import ProtectedRoute from "./components/auth/protected-route"

import Admin from "./components/admin/Admin";
import Home from "./components/home/Home"
import LandingPage from "./components/landingPage/LandingPage";
import Signup from "./components/signup/Signup";
import Profile from './components/profile/Profile';
import Pricing from './components/pricing/Pricing';

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      showLogin: true,
    };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
    this.changeLogin = this.changeLogin.bind(this);
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

  componentDidUpdate() {
    if(this.state.showLogin === false) this.setState({ showLogin: true })
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    });
  }

  changeLogin() {
    this.setState({ showLogin: !this.state.showLogin });
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route path="/" exact={true} render={(props)  => <LandingPage login={this.state.showLogin} changeLogin={this.changeLogin} getUser={this.getTheUser} {...props} />} />
            <Route path="/signup" exact={true} component={Signup} />
            <Route path="/dashboard" exact={true} component={Admin} />
            <Route path="/profile" exact={true} component={Profile} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/pricing" exact={true} component={Pricing} />
            {(this.state.loggedInUser)?(
              <ProtectedRoute 
                user={this.state.loggedInUser}
                exact 
                path="/dashboard" 
                component={Admin} 
              />
            ):null}
        </Switch>
      </div>
    );
  }
}

export default App;
