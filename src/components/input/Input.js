import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Input.css'

class FluidInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocused: false,
      value: ""
    };
    this.focusField = this.focusField.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  focusField() {
    this.setState({
      inputFocused: !this.state.inputFocused
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { type, label, id } = this.props;
    const { inputFocused, value } = this.state;
    
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
            onChange={this.handleChange}
          />
          <label className="fluid-input-label" forHtml={id}>{label}</label>
          
        </div>
      </div>
    );
  }
}

export default FluidInput