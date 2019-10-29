import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import Input from '../input/Input'

class Login extends Component{
  constructor (props){
    super(props)
    this.state = {
      showPassword: true,
    }
    this.clickShowPassword = this.clickShowPassword.bind(this)
  }

  clickShowPassword() {
    const { showPassword } = this.state
    showPassword ? this.setState({showPassword: !showPassword}) : this.setState({showPassword: !showPassword})

    this.passInput = document.getElementById('password')
    if(showPassword){
      this.passInput.type = "password"
      this.setState({
        showPassword : false
      })
    } else {
      this.passInput.type = "text"
      this.setState({
        showPassword : true
      })
  }
  }

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
      <div className="col-12 line">
        <div className="lineGray">
          <div className="textLine">Ou continue com</div>
        </div>
      </div>
      <div className="col-12 formLogin">
        <form className="row">
          <Input type="text" label="Email" id="email"/>
          <Input type='password' label='Password' id="password"/>
          <span onClick={this.clickShowPassword} className="col-12 text-right mousePointer">Mostrar senha</span>
          <button type="button" className="btn btn-login d-flex">Login</button>
          <span className="col-12 text-center">Não possui conta? <span className="linkSignin">Cadastre-se</span></span>
        </form>
      </div>
    </Fragment>
    )
  }
}

export default Login