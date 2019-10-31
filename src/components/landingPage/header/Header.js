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
          <div className="home-content">
            <h1 className="home-title">DISCOVER</h1>
            <p className="home-subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>

            <p className="home-preLogin">Se você já possui uma conta</p>
            <button data-toggle="modal" data-target="#login" type="button" className="btn btn-header" onClick={this.openModal}>Faça seu login</button>      
          </div>        
        </div>
        {(this.props.login)?(<Login changeLogin={this.props.changeLogin} getUser={this.props.getUser} {...this.props}/>):null}
      </div>
    )
      
  }
}

export default Header