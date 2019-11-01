import React, { Component } from 'react';
import PriceCard from '../../priceCard/PriceCard'
import './Form.css';
import AuthService from "../../auth/auth-service";
import Axios from 'axios';


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      translateWidth: '',
      email: "",
      name: "",
      password: "",
      plan: "",
      showArrow: false,
      creationType: true
    }

    this.service = new AuthService();
    
    this.sectionManager = this.sectionManager.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.changePlan = this.changePlan.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth > 1500) {
      this.setState({
        translateWidth: window.innerWidth / 2,
      })
    } else {
      this.setState({
        translateWidth: window.innerWidth,
      })
    }

    if (window.innerWidth < 1200) {
      this.setState({
        showArrow: true,
      })
    }
    console.log(this.props)
    if(this.props.user && !this.props.user.hasOwnProperty("name")){
      this.setState({
        email: this.props.user.email,
        creationType: false 
      });
    } else if(this.props.user) {
      this.props.history.push("/main")
    }
  }

  onChangeHandler(e)  {
    let { name, value, type, checked } = e.target;
    value = (type==="checkbox")?checked:value;
    this.setState({ [name]: value})
  }

  checkPassword(e) {
    let { value } = e.target;
    if(value === this.state.password) document.getElementsByClassName("form__verifier")[0].setAttribute("style", "border: 3px solid #00cc00")
    else document.getElementsByClassName("form__verifier")[0].setAttribute("style", "border: 3px solid #ff0000")
  }

  changePlan(plan) {
    this.setState({ plan })
  }

  sectionManager(e, num) {
    e.preventDefault();
    
    if (this.state.currentPage < 4 && this.state.currentPage > -1) {
      // Animando o form
      let form = document.querySelector('.form');
      let initialFormX = -1 * (this.state.currentPage) * this.state.translateWidth;
      let finalFormX = -1 * (num) * this.state.translateWidth;
      if (initialFormX !== 0) initialFormX += 'px';
      if (finalFormX !== 0) finalFormX += 'px';

      form.animate([
        { transform: 'translate(' + initialFormX + ')' },
        { transform: 'translate(' + finalFormX + ')' }
      ], {
        duration: 800,
        easing: 'ease-in-out',
        fill: 'forwards'
      });

      this.setState({
        currentPage: num
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.creationType){

      const { email, password, name, plan } = this.state;
  
      this.service.signup(email, password)
        .then(response => {
          console.log(response)
          Axios.put(`${process.env.REACT_APP_API_URL}/user/update`, { id: response._id, name, plan, photoID: [] } )
            .then(finalUser => {
              this.setState({ email: "", password: "", message: "" });
              this.props.getTheUser(finalUser);
              this.props.history.push("/main");
            })
            .catch(error => console.log(error))
        })
        .catch(error => console.log(error))

    } else {
      const { _id } = this.props.user;
      const { email, name, plan } = this.state;
      console.log(_id);


      Axios.put(`${process.env.REACT_APP_API_URL}/user/update`, { id: _id, email, name, plan,  photoID: [] })
        .then(finalUser => {
          this.setState({ email: "", password: "", message: "" });
          this.props.getTheUser(finalUser);
          this.props.history.push("/main");
        })
        .catch(error => console.log(error))
    }

  }

  render() {
    return (
      <form className="form">
        {/* -------------------------------------- FIRST REGISTER --------------------------- */}
        <div className="form-container__outer">
          <div className="form-container1">
            <p className="form__alternative">Cadastre-se com o <span>Facebook</span> ou <span>Google</span></p>
            <div className="form__or">
              <div className="form__or-line"></div>
              <p className="form__or-text">ou</p>
              <div className="form__or-line"></div>
            </div>
            <label htmlFor="email" className="form__label">Email</label>
            <div className="form__input-container">
              <input type="text" className="form__input" name="email" value={this.state.email} onChange={(e) => this.onChangeHandler(e)} />
              <img src="/images/mail.svg" alt="mail icon" className="form__icon"/>
            </div>
            
            <label htmlFor="name" className="form__label">Name</label>
            <div className="form__input-container">
              <input type="text" className="form__input" name="name" value={this.state.name} onChange={(e) => this.onChangeHandler(e)} />
              <img src="/images/user.svg" alt="user icon" className="form__icon"/>
            </div>

            <label htmlFor="password" className="form__label">Senha</label>
            <div className="form__input-container">
            {(this.state.creationType)?(
              <input type="password" className="form__input" name="password" value={this.state.password} onChange={(e) => this.onChangeHandler(e)} />
            ):(
              <input type="password" className="form__input" name="password" value={this.state.password} onChange={(e) => this.onChangeHandler(e)} style={{"backgroundColor": "grey"}} readOnly/>
            )}
              <img src="/images/locker.svg" alt="locker icon" className="form__icon"/>
            </div>

            <label htmlFor="" className="form__label">Repita a senha</label>
            <div className="form__input-container">
            {(this.state.creationType)?(
              <input type="password" className="form__input form__verifier" onChange={(e) => this.checkPassword(e)} />
            ):(
              <input type="password" className="form__input form__verifier" onChange={(e) => this.checkPassword(e)} style={{"backgroundColor": "grey"}} readOnly />
            )}
              <img src="/images/locker.svg" alt="locker icon" className="form__icon"/>
            </div>

            <button className="form__continue" onClick={(e) => this.sectionManager(e, 1)}>Continuar</button>

            <div className="form__circles-container">
              <div className="circle circle-active" onClick={(e) => this.sectionManager(e, 0)}></div>
              <div className="circle" onClick={(e) => this.sectionManager(e, 1)}></div>
              <div className="circle" onClick={(e) => this.sectionManager(e, 2 )}></div>
            </div>
          </div>
        </div>
        

        {/* -------------------------------------- ESCOLHA SEU PLANO --------------------------- */}
        <div className="form-container__outer">
          <div className="form-container2">
            <h3 className="form-price__title">Escolha seu plano</h3>
            <div className="form__card-container">
              <PriceCard btnClick={(e) => {this.sectionManager(e, 2); this.changePlan("Basic")}} title="Basic" description="Feito para quem busca simplicidade no seu dia-a-dia." price="599" styleTitle={{color: "#FF8514"}} styleBg={{backgroundColor: "#FF8514"}} showArrow={this.state.showArrow} arrowUrl={'/images/collapseArrowYellow.svg'} benefit1={"This is our first benefit [placeholder]"} benefit2={"This is our second benefit [placeholder]"} benefit3={"This is our third benefit [placeholder]"}/>
              <PriceCard btnClick={(e) => {this.sectionManager(e, 2); this.changePlan("Nomad")}} title="Nomad" description="O melhor plano para quem quer flexibilidade em suas estadias." price="799" styleTitle={{color: "#D65A36"}} styleBg={{backgroundColor: "#D65A36"}} showArrow={this.state.showArrow} arrowUrl={'/images/collapseArrowOrange.svg'} benefit1={"This is our first benefit [placeholder]"} benefit2={"This is our second benefit [placeholder]"} benefit3={"This is our third benefit [placeholder]"}/>
              <PriceCard btnClick={(e) => {this.sectionManager(e, 2); this.changePlan("Explorer")}} title="Explorer" description="Para quem deseja explorar o mundo com muito conforto." price="999" styleTitle={{color: "#BB2A00"}} styleBg={{backgroundColor: "#BB2A00"}} showArrow={this.state.showArrow} arrowUrl={'/images/collapseArrowDark.svg'} benefit1={"This is our first benefit [placeholder]"} benefit2={"This is our second benefit [placeholder]"} benefit3={"This is our third benefit [placeholder]"}/>
            </div>

            <div className="form__circles-container">
              <div className="circle circle-active" onClick={(e) => this.sectionManager(e, 0)}></div>
              <div className="circle circle-active" onClick={(e) => this.sectionManager(e, 1)}></div>
              <div className="circle" onClick={(e) => this.sectionManager(e, 2 )}></div>
            </div>
          </div>
        </div>

        {/* -------------------------------------- LAST REGISTER --------------------------- */}
        <div className="form-container__outer">
          <div className="form-container1">
            <h3 className="form-almost__title">Falta pouco<br/>estamos quase la</h3>
            <label htmlFor="" className="form__label">Nome do titular do cartão</label>
            <input type="text" className="form__input"/>
            
            <label htmlFor="" className="form__label">Número do cartão</label>
            <input type="text" className="form__input"/>

            <div className="form-almost__divide">
              <div className="form-almost__divide-container1">
                <label htmlFor="" className="form__label--center">Data de validade</label>
                <div className="form-almost__inputs-container">
                  <input type="text" className="form-almost__mini-input1" placeholder="mês"/>
                  <input type="text" className="form-almost__mini-input1" placeholder="ano"/>
                </div>
              </div>
              <div className="form-almost__divide-container2">
                <label htmlFor="" className="form__label--center">Código de segurança</label>
                <input type="text" className="form-almost__mini-input2"/>
              </div>
            </div>

            <label htmlFor="" className="form__label">CPF do titular</label>
            <input type="text" className="form__input"/>

            <button className="form__continue" onClick={(e) => this.handleSubmit(e)}>Finalizar</button>

            <div className="form__circles-container">
              <div className="circle circle-active" onClick={(e) => this.sectionManager(e, 0)}></div>
              <div className="circle circle-active" onClick={(e) => this.sectionManager(e, 1)}></div>
              <div className="circle circle-active" onClick={(e) => this.sectionManager(e, 2)}></div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;