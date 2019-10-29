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
          <div className="col-12 col-md-6">
            <div className="row d-flex align-items-center">
              <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                <p className="home-title">
                  DISCOVER
                </p>
                <p className="home-subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor harum facilis eum deserunt?
                </p>
                
                <button data-toggle="modal" data-target="#exampleModalScrollable" type="button" className="btn btn-header">Faça seu login!</button>
                
              </div>
            </div> 
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
<<<<<<< HEAD
              <div className="modal-body row d-flex justify-content-center">
                <Login />
=======
              <div class="modal-body row d-flex justify-content-center">
                <DoSignin />
>>>>>>> 305fa395fd9bae019e0dca6d1d78834dd96a70b4

              </div>
              </div>
          </div>
        </div>
      </div>
    )
      
  }
}

export default Header