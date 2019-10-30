import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Modal.css';
import axios from "axios";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import ImageUpload from './images/images'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            name: "",
            maxBooking: "",
            images: [],
            description: "",
            numberRooms: 0,
            numberBath: 0,
            garage: false,
            numberGarage: "",
            plan: "Base",
            street:"",
            streetNumber: 0,
            complement: "",
            city: "",
            state: "",
            country:"",
            uploadingPhoto: false,
            uploadingImages: [],
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.showPictures = this.showPictures.bind(this);
        this.removeImage = this.removeImage.bind(this);
    }

    onClickHandler()  {
        if(this.props.modalId === "editHouse") {
            this.setState({images: this.state.uploadingImages})         
            axios.put(`https://projfinal-dev.herokuapp.com/api/house/${this.state._id}`, this.state)
                .then(this.setState({
                    name: "",
                    maxBooking: "",
                    images: "",
                    description: "",
                    numberRooms: 0,
                    numberBath: 0,
                    garage: false,
                    numberGarage: 0,
                    plan: "Base",
                    street:"",
                    streetNumber: 0,
                    complement: "",
                    city: "",
                    state: "",
                    country:"",
                }))
                .catch(err => console.log(err))
        } else {
            this.setState({images: this.state.uploadingImages})
            axios.post(`https://projfinal-dev.herokuapp.com/api/house/new`, this.state)
                .then(this.setState({
                    name: "",
                    maxBooking: "",
                    images: [],
                    description: "",
                    numberRooms: 0,
                    numberBath: 0,
                    garage: false,
                    numberGarage: 0,
                    plan: "Base",
                    street:"",
                    streetNumber: 0,
                    complement: "",
                    city: "",
                    state: "",
                    country:"",
                }))
                .catch(err => console.log(err))
        }
    }

    onChangeHandler(e)  {
        let { name, value, type, checked } = e.target;
        value = (type==="checkbox")?checked:value;
        this.setState({ [name]: value})
        console.log(this.state)
    }

    UNSAFE_componentWillReceiveProps(newValue) {
        if(newValue != this.props && newValue.modalId === "editHouse"){
            const { name, description, maxBooking, images, numberRooms, numberBath, garage, numberGarage, plan, street, streetNumber, complement, city, state, country, _id } = newValue.home;
            this.setState({ name, description, maxBooking, images, numberRooms, numberBath, garage, numberGarage, plan, street, streetNumber, complement, city, state, country, _id});
            this.setState({uploadingImages: this.state.images})
        }
    }

    onChangePicture(e) {
        const files = Array.from(e.target.files)
        this.setState({ uploadingPhoto: true })
    
        const formData = new FormData()        
    
        files.forEach((file, i) => {
          formData.append(i, file)
        })
        fetch(`http://localhost:5000/api/image-upload`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(image => {
     
          this.setState({ 
            uploading: false,
            uploadingImages: this.state.uploadingImages.concat(image)
          })
        })
      }

    removeImage(id) {
        const { uploadingImages } = this.state;
        let uploadingImagesAdj = uploadingImages.filter(image => image.public_id !== id)        
        this.setState({uploadingImages: uploadingImagesAdj})
    }

    showPictures() {
      const { uploadingImages } = this.state;
    //   if(this.props.modalId === "editHouse") {
    //     this.setState({uploadingImages: this.state.images})
    //     return uploadingImages.map(image => {            
    //         return (<ImageUpload image={image} removeImage={this.removeImage}/>)
    //     })  
    //   } else {
        return uploadingImages.map(image => {            
            return (<ImageUpload image={image} removeImage={this.removeImage}/>)
        })
    //   }
    }

    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" id={this.props.modalId}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{(this.props.modalId==="newHouse")?"New":"Edit"} House</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Home name" value={this.state.name} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="street">Street</label>
                                <input type="text" className="form-control" id="street" name="street" aria-describedby="emailHelp" placeholder="Street name" value={this.state.street} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetNumber">Number</label>
                                <input type="number" className="form-control" id="streetNumber" name="streetNumber" aria-describedby="emailHelp" placeholder="Number" value={this.state.streetNumber} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="complement">Complement</label>
                                <input type="text" className="form-control" id="complement" name="complement" aria-describedby="emailHelp" placeholder="Complement" value={this.state.complement} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" name="city" aria-describedby="emailHelp" placeholder="City" value={this.state.city} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type="text" className="form-control" id="state" name="state" aria-describedby="emailHelp" placeholder="State" value={this.state.state} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input type="text" className="form-control" id="country" name="country" aria-describedby="emailHelp" placeholder="Country" value={this.state.country} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="maxBooking">Max. number of bookings</label>
                                <input type="number" className="form-control" id="maxBooking" name="maxBooking" aria-describedby="emailHelp" placeholder="Maximum number of bookings per home" value={this.state.maxBooking} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" rows="3" id="description" name="description" value={this.state.description} onChange={(e) => this.onChangeHandler(e)}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numberRooms">Rooms</label>
                                <input type="number" className="form-control" id="numberRooms" name="numberRooms" aria-describedby="emailHelp" placeholder="Number of rooms" value={this.state.numberRooms} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numberBath">Baths</label>
                                <input type="number" className="form-control" id="numberBath" name="numberBath" aria-describedby="emailHelp" placeholder="Number of baths" value={this.state.numberBath} onChange={(e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-check form-check-inline form-group">
                                <input className="form-check-input" type="checkbox" id="garage" name="garage" checked={this.state.garage} onChange={(e) => this.onChangeHandler(e)} />
                                <label className="form-check-label" htmlFor="garage">Garage</label>
                                {(this.state.garage)?(
                                    <input type="number" className="form-control ml-2" id="numberGarage" name="numberGarage" aria-describedby="emailHelp" placeholder="Number of garage spaces" value={this.state.numberGarage} onChange={(e) => this.onChangeHandler(e)}/>
                                ):null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="plan">Plan</label>
                                <select className="form-control" name="plan" onChange={(e) => this.onChangeHandler(e)} >
                                  <option value="Base">Base</option>
                                  <option value="Nomad">Nomad</option>
                                  <option value="Explorer">Explorer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="numberBath">Images</label>
                                <input type="file" className="form-control" id="images" name="images" aria-describedby="emailHelp" placeholder="Select Image" onChange={(e) => this.onChangePicture(e)}/>
                                {this.showPictures()}
                            </div>
                        </div>                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={this.onClickHandler}>{(this.props.modalId==="newHouse")?"Save":"Edit"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;