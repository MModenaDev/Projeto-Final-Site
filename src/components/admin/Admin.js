import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './Admin.css';

import Card from './card/Card';
import Modal from './modal/Modal';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homes: [],
            homeToEdit: {
                _id: "",
                name: "",
                maxBooking: "",
                images: [],
                description: "",
                numberRooms: "",
                numberBath: "",
                garage: "",
                numberGarage: "",
                plan: "",
                street:"",
                streetNumber: 0,
                complement: "",
                city: "",
                state: "",
                country:"",
            },
        }
        this.changeHouseEdit = this.changeHouseEdit.bind(this);
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/user/update/house/search?city`)
            .then(response => {
                 this.setState({ homes: response.data })
                })
    }

    changeHouseEdit(idx) {
      this.setState({ homeToEdit: this.state.homes[idx] })
    }

    deleteHouse(elem) {
      axios.delete(`${process.env.REACT_APP_API_URL}/user/update/house/${elem._id}`)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    render() {
        return ( 
            <div className="container-fluid">

                {/* New modal */}
                <Modal modalId="newHouse" />

                {/* Edit modal */}
                <Modal modalId="editHouse" home={this.state.homeToEdit} />

                {/* Header */}
                <div className="dashboard-menu">
                    <div className="menu-logo">
                        <h1>Logo</h1>
                        <h4>Dashboard</h4>
                    </div>
                    <div className="dropdown mr-5">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Options
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#newHouse">New home</a>  
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Exit</a>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="row d-flex justify-content-around">
                    {this.state.homes.map((elem, idx) => {
                        return <Card key={idx} houseInfo={elem} changeHome={() => this.changeHouseEdit(idx)} deleteHome={() => this.deleteHouse(elem)} />
                    })}
                </div>

            </div>
        )
    }
}
export default Admin;