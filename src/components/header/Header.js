import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css'

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
                
                <button data-toggle="modal" data-target="#exampleModalScrollable" type="button" class="btn btn-header">Faça seu login!</button>
                
              </div>
            </div> 
          </div>
        </div>
        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div class="modal-content row">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body row d-flex justify-content-center">
                <div className="col-12">
                  Faça seu Login
                </div>
                <div className="col-12 my-2">  
                  <button className='btn btn-face d-flex'>
                    <img className='icos-fac' src="./images/facebookico.png" alt=""/>
                    <span className='btn-textface'> Facebook</span>
                  </button>
                </div>
                <div className="col-12 my-2">
                <button className='btn btn-google d-flex'>
                    <img className='icos-goo' src="./images/googleico.png" alt=""/>
                    <span className='btn-textgoog'> Google</span>
                  </button>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
      
  }
}

export default Header