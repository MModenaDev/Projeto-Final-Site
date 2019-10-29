import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Modal.css';
import axios from "axios";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            maxBooking: "",
            images: [],
            description: "",
            numberRooms: "",
            numberBath: "",
            garage: false,
            numberGarage: "",
            plan: "Base",
        }
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onClickHandler()  {
        if(this.props.modalId === "editHouse") {
            // axios.put(`https://projfinal-dev.herokuapp.com/api/house/${}`, )
        } else {
            axios.post(`https://projfinal-dev.herokuapp.com/api/house/new`, this.state.body)
                .then(this.setState({
                    name: "",
                    maxBooking: "",
                    images: [],
                    description: "",
                    numberRooms: "",
                    numberBath: "",
                    garage: false,
                    numberGarage: 0,
                    plan: "Base",
                }))
                .catch(err => console.log(err))
        }
        this.setState({ clicked: !this.state.clicked })
    }

    onChangeHandler(e)  {
        let { name, value, type, checked } = e.target;
        value = (type==="checkbox")?checked:value;
        this.setState({ [name]: value})
        console.log(this.state)
    }

    UNSAFE_componentWillReceiveProps(newValue) {
        if(newValue != this.props && newValue.modalId === "editHouse"){
            const { name, description } = newValue.home;
            this.setState({ name, description });
        }
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