import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProfileInfos.css';

class ProfileInfos extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="profile-content__infos">
        <label htmlFor="" className="profile-label">Email</label>
        <input type="text" className="profile-input"/>
        <label htmlFor="" className="profile-label">Nome</label>
        <input type="text" className="profile-input"/>
        <label htmlFor="" className="profile-label">Choose a profile picture</label>
        <input type="file" className="profile-input"/>
        <div className="profile-content__btn-container">
          <button className="profile-content__btn-container--btn" style={{backgroundColor: "#BB2A00"}}>Atualizar</button>
          <Link className="profile-content__btn-container--btn" style={{backgroundColor: "#BB2A00", textDecoration: "none", color: "#f1f1f1"}} to="/pricing">Alterar plano</Link>
        </div>
      </div>
    )
  }
}

export default ProfileInfos;