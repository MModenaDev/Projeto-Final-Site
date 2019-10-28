import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'

class Login extends Component{
  render(){
    return( 
    <Fragment>
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
    </Fragment>
    )
  }
}

export default Login