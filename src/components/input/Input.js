import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Input.css'

class FluidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocused: false,
    };
    this.focusField = this.focusField.bind(this)
  }

  focusField() {
    this.setState({
      inputFocused: !this.state.inputFocused
    });
  }

  render() {
    const { type, label, id, value, name, changeAction } = this.props;
    const { inputFocused } = this.state;
    
    let inputClass = "fluid-input col-12";
    if (inputFocused) {
      inputClass += " fluid-input--focus";
    } else if (value !== "") {
      inputClass += " fluid-input--open";
    }
    
    return (
      <div className={inputClass}>
        <div className="fluid-input-holder">
          
          <input 
            className="fluid-input-input col-12"
            type={type}
            id={id}
            onFocus={this.focusField}
            onBlur={this.focusField}
            onChange={changeAction}
            name={name}
          />
          <label className="fluid-input-label" forHtml={id}>{label}</label>
          
        </div>
      </div>
    );
  }
}

export default FluidInput