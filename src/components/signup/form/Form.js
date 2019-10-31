import React, { Component } from 'react';
import PriceCard from '../../priceCard/PriceCard'
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      translateWidth: ''
    }
    
    this.fillCircle = this.fillCircle.bind(this);
  }

  componentDidMount() {

    if (window.innerWidth > 1500) {
      this.setState({
        translateWidth: window.innerWidth / 2
      })
    } else {
      this.setState({
        translateWidth: window.innerWidth
      })
    }

    
  }

  fillCircle(e) {
    e.preventDefault();

    this.setState({
      currentPage: this.state.currentPage + 1
    });

    if (this.state.currentPage < 3) {
      // Preenchendo os círculos
      let circles = document.getElementsByClassName('circle');
      circles[this.state.currentPage].classList.add('circle-active');
      circles[this.state.currentPage + 3].classList.add('circle-active');
      circles[this.state.currentPage + 6].classList.add('circle-active');
  
      // Animando o form
      let form = document.querySelector('.form');
      let initialFormX = -1 * (this.state.currentPage - 1) * this.state.translateWidth;
      let finalFormX = -1 * (this.state.currentPage) * this.state.translateWidth;
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

            <button className="form__continue" onClick={(e) => this.fillCircle(e)}>Continuar</button>

            <div className="form__circles-container">
              <div className="circle circle-active"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        

        {/* -------------------------------------- ESCOLHA SEU PLANO --------------------------- */}
        <div className="form-container__outer">
          <div className="form-container2">
            <h3 className="form-price__title">Escolha seu plano</h3>
            <div className="form__card-container">
              <PriceCard btnClick={this.fillCircle} title="Básico" description="Feito para quem busca simplicidade no seu dia-a-dia." price="599" styleTitle={{color: "#FF8514"}} styleBg={{backgroundColor: "#FF8514"}}/>
              <PriceCard btnClick={this.fillCircle} title="Nômade" description="O melhor plano para quem quer flexibilidade em suas estadias." price="799" styleTitle={{color: "#D65A36"}} styleBg={{backgroundColor: "#D65A36"}}/>
              <PriceCard btnClick={this.fillCircle} title="Explorador" description="Para quem deseja explorar o mundo com muito conforto." price="999" styleTitle={{color: "#BB2A00"}} styleBg={{backgroundColor: "#BB2A00"}}/>
            </div>

            <div className="form__circles-container">
              <div className="circle circle-active"></div>
              <div className="circle"></div>
              <div className="circle"></div>
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

            <button className="form__continue" onClick={(e) => this.fillCircle(e)}>Finalizar</button>

            <div className="form__circles-container">
              <div className="circle circle-active"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;