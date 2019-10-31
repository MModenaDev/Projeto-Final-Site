import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AuthService from "./components/auth/auth-service";
import Admin from "./components/admin/Admin";
import LandingPage from "./components/landingPage/LandingPage";
import Signup from "./components/signup/Signup";
import Footer from './components/landingPage/footer/Footer'
import Home from './components/home/Home'
import Houses from './components/houses/Houses'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./App.css";

AOS.init();


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
      <div  className="App">
        <Switch>
          <Route exact strict path="/" render={(props)  => <LandingPage login={this.state.showLogin} changeLogin={this.changeLogin} {...props} />} />
          <Route path="/signup" exact={true} component={Signup} />
          <Route path="/dashboard" exact={true} component={Admin} />
          <Route path="/home" exact={true} component={Home} />
          <Route path="/houses" exact={true} component={Houses} />
        </Switch>
      </div>
    );
  }
}

export default App;
