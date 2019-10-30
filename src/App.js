import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage';
import Signup from './components/signup/Signup';

function App() {
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

export default App;
