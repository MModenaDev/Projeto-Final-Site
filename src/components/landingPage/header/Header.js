import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'
import Login from '../../login/Login'
import DoSignin from '../../doSignin/doSignin'
import { bindExpression } from '@babel/types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    if(!this.props.login) this.props.changeLogin();
  }

  render(){
    return(
      <div className="container-fluid pre-header">
        <div className="row d-flex justify-content-start header">
          <div  className="home-content">
            <h1 className="home-title">DISCOVER</h1>
            <p className="home-subtitle">
              Join a community of travelers around the world.
            </p>

            <p className="home-preLogin">Already have an account?</p>
            <button data-toggle="modal" data-target="#login" type="button" className="btn btn-header" onClick={this.openModal}>Login</button>      
          </div>        
        </div>
        {(this.props.login)?(<Login changeLogin={this.props.changeLogin} getUser={this.props.getUser} {...this.props}/>):null}
      </div>
    )
      
  }
}

export default Header