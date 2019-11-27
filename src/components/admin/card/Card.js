import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler()  {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className="col-12 col-md-6 my-2">
                <div className="card" onClick={this.onClickHandler}>
                    <div className="card-header">
                        <h2>{this.props.houseInfo.name}</h2>
                    </div>
                    {(this.state.clicked && this.props.houseInfo)?(
                        <div className="card-body">
                            <p><b>Adress: </b>{this.props.houseInfo.adress}</p>
                            <p><b>Description: </b>{this.props.houseInfo.description}</p>
                            <p><b>Max Booking Allowed: </b>{this.props.houseInfo.maxBooking}</p>
                            <p><b>Number of rooms: </b>{this.props.houseInfo.numberRooms}</p>
                            <p><b>Number of bathrooms: </b>{this.props.houseInfo.numberBath}</p>
                            <p><b>Garage: </b>{this.props.houseInfo.garage}</p>
                            <p><b>Number of garage: </b>{this.props.houseInfo.numberGarage}</p>
                            <p><b>Plan: </b>{this.props.houseInfo.plan}</p>
                        </div>
                    ):null}
                    {(this.state.clicked)?(
                        <div className="card-footer d-flex justify-content-end">
                            <button className="btn btn-outline-success mr-2" data-toggle="modal" data-target="#editHouse" onClick={this.props.changeHome}>EDIT</button>
                            <button className="btn btn-outline-danger" onClick={this.props.deleteHome}>DELETE</button>
                        </div>
                    ):null}
                </div>
            </div>
        )
    }
}

export default Card;