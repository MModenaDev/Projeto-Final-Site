import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <form className="form">
        <div className="form-container">
          <p className="form__alternative">Cadastre-se com o <span>Facebook</span> ou <span>Google</span></p>
          <div className="form__or">
            <div className="form__or-line"></div>
            <p className="form__or-text">ou</p>
            <div className="form__or-line"></div>
          </div>
          <label htmlFor="" className="form__label">Email</label>
          <div className="form__input-container">
            <input type="text" className="form__input"/>
            <img src="/images/mail.svg" alt="mail icon" className="form__icon"/>
          </div>
          
          <label htmlFor="" className="form__label">Nome</label>
          <div className="form__input-container">
            <input type="text" className="form__input"/>
            <img src="/images/user.svg" alt="user icon" className="form__icon"/>
          </div>

          <label htmlFor="" className="form__label">Senha</label>
          <div className="form__input-container">
            <input type="text" className="form__input"/>
            <img src="/images/locker.svg" alt="locker icon" className="form__icon"/>
          </div>

          <label htmlFor="" className="form__label">Repita a senha</label>
          <div className="form__input-container">
            <input type="text" className="form__input"/>
            <img src="/images/locker.svg" alt="locker icon" className="form__icon"/>
          </div>

          <button className="form__continue">Continuar</button>
        </div>
      </form>
    );
  }
}

export default Form;