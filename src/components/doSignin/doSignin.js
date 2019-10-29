import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './doSignin.css'

class DoSignin extends Component{
  constructor (props){
    super(props)
    this.state = {
    }
  }

  render(){
    return( 
    <Fragment>
      <div className="col-12">
        Faça seu Cadastro
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
      <div className="col-12 line">
        <div className="lineGray">
          <div className="textLine">Ou</div>
        </div>
      </div>
      <div className="col-12 my-2">
        <button className='btn btn-signin d-flex align-items-center '>
          <img className='email-icon' src="./images/email-logo-white.png" alt=""/>
          <span className=''> Cadastre-se com Email</span>
        </button>
        <span className="col-12 text-center">Já possui conta? <span className="linkSignin">Login</span></span>
      </div>
    </Fragment>
    )
  }
}

export default DoSignin