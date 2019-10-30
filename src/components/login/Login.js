import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css'
import Input from '../input/Input'
import AuthService from "../auth/auth-service";

class Login extends Component{
  constructor (props){
    super(props)
    this.state = {
      email: "",
      password: "",
      showPassword: true,
    }
    this.service = new AuthService();
    this.clickShowPassword = this.clickShowPassword.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onChangeHandler(e)  {
    let { name, value, type, checked } = e.target;
    value = (type==="checkbox")?checked:value;
    this.setState({ [name]: value})
  }

  onSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state;
    this.service.login(email, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
      })
  }

  removeModalBackdrop() {
    let modalBackdrop = document.querySelector('.modal-backdrop');
    modalBackdrop.parentNode.removeChild(modalBackdrop);
  }

  render(){
    return( 
    <Fragment>
      <div className="col-12">
        Faça seu Login
      </div>
      <div className="col-12 my-2">  
        <a href="https://projfinal-dev.herokuapp.com/api/auth/facebook" className='btn btn-face d-flex'>
          <img className='icos-fac' src="./images/facebookico.png" alt=""/>
          <span className='btn-textface'> Facebook</span>
        </a>
      </div>
      <div className="col-12 my-2">
        <a href="https://projfinal-dev.herokuapp.com/api/auth/google"  className='btn btn-google d-flex'>
          <img className='icos-goo' src="./images/googleico.png" alt=""/>
          <span className='btn-textgoog'> Google</span>
        </a>
      </div>
      <div className="col-12 line">
        <div className="lineGray">
          <div className="textLine">Ou continue com</div>
        </div>
      </div>
      <div className="col-12 formLogin">
        <form className="row">
          <Input type="text" name="email" label="Email" id="email" value={this.state.email} changeAction={(e) => this.onChangeHandler(e)} />
          <Input type='password' name="password" label='Password' id="password" value={this.state.password} changeAction={(e) => this.onChangeHandler(e)} />
          <span onClick={this.clickShowPassword} className="col-12 text-right mousePointer">Mostrar senha</span>
          <button type="button" className="btn btn-login d-flex" onClick={(e) => {this.onSubmit(e)}}>Login</button>
          <span className="col-12 text-center">Não possui conta? <Link className="linkSignin" to="/signup" onClick={() => this.removeModalBackdrop()}>Cadastre-se</Link></span>
        </form>
      </div>
    </Fragment>
    )
  }
}

export default Login