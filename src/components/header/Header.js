import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'
import Login from '../login/Login'
import DoSignin from '../doSignin/doSignin'

class Header extends Component {
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
            <button data-toggle="modal" data-target="#exampleModalScrollable" type="button" className="btn btn-header">Faça seu login</button>      
          </div>        
        </div>
        <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content row">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body row d-flex justify-content-center">
                <Login />

              </div>
              </div>
          </div>
        </div>
      </div>
    )
      
  }
}

export default Header