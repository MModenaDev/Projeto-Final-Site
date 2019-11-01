import React, { Component, Fragment } from 'react';
import './LoginInput.css';

class LoginInput extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const { type, label, id, value, name, changeAction, imgUrl } = this.props;

    return (
      <Fragment>
        <label className="login__modal-label" forhtml={id}>{label}</label>
        <div className="form__input-container">
          <input 
            className="login__modal-input"
            type={type}
            id={id}
            onFocus={this.focusField}
            onBlur={this.focusField}
            onChange={changeAction}
            name={name}
          />
          <img src={imgUrl} alt="mail icon" className="form__icon"/>
        </div>
      </Fragment>
    );
  }
}

export default LoginInput;