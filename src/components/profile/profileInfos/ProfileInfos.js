import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProfileInfos.css';
import axios from "axios";

class ProfileInfos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      photoID: this.props.user.photoID,
      planColors: {
        "Basic":"#FF8514",
        "Nomad": "#D65A36",
        "Explorer": "#BB2A00"
      }
    }
  }

  onChangeHandler(e)  {
    let { name, value, type, checked } = e.target;
    value = (type==="checkbox")?checked:value;
    this.setState({ [name]: value})
  }

  onSubmit(e) {
    e.preventDefault()
    const { name, email, photoID } = this.state;
    const { _id } = this.props.user;
    axios.put("http://localhost:5000/api/user/update", { id: _id, name, email, photoID } )
      .then(response => {
        this.setState({ name: response.data.name, email: response.data.email, photoID: response.data.photoID });
        this.props.getUser(response.data);
        this.props.history.push("profile");
      })
      .catch(error => console.log(error))
  }

  onChangePicture(e) {
        const files = Array.from(e.target.files)
        this.setState({ uploadingPhoto: true })
    
        const formData = new FormData()        
    
        files.forEach((file, i) => {
          formData.append(i, file)
        })
        fetch(`https://projfinal-dev.herokuapp.com/api/image-upload`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(image => {     
          this.setState({ 
            uploading: false,
            photoID: image,
          })          
        })
      }

  render() {
    return (
      <div className="profile-content__infos">
        <label htmlFor="email" className="profile-label">Email</label>
        <input type="text" name="email" className="profile-input" value={this.state.email} onChange={(e) => this.onChangeHandler(e)} />
        <label htmlFor="name" className="profile-label">Nome</label>
        <input type="text" name="name" className="profile-input" value={this.state.name} onChange={(e) => this.onChangeHandler(e)}/>
        <label htmlFor="" className="profile-label">Choose a profile picture</label>
        <input type="file" className="profile-input" onChange={(e) => this.onChangePicture(e)}/>
        <div className="profile-content__btn-container">
          <button className="profile-content__btn-container--btn" style={{backgroundColor: this.state.planColors[this.props.user.plan]}} onClick={(e) => this.onSubmit(e)} >Atualizar</button>
          <Link className="profile-content__btn-container--btn" style={{backgroundColor: this.state.planColors[this.props.user.plan], textDecoration: "none", color: "#f1f1f1"}} to="/pricing">Alterar plano</Link>
        </div>
      </div>
    )
  }
}

export default ProfileInfos;