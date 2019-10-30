import React, { Component } from "react";
import Form from './form/Form';
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Caso queira fazer o clique na bolinha voltar tb
    }
  }

  render() {
    return (
      <div className="signup">
        <div className="signup__leftSide">
          <div className="signup__leftSide-content">
            <h1 className="signup__title">DISCOVER</h1>
            <p className="signup__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
          </div>
        </div>
        <div className="signup__rightSide">
          <div className="signup__rightSide-filter">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
