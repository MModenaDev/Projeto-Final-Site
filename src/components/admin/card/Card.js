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
                            <p><b>Description: </b>{this.props.houseInfo.description}</p>
                            <p><b>Description: </b>{this.props.houseInfo.description}</p>
                            
                        </div>
                    ):null}
                    {(this.state.clicked)?(
                        <div className="card-footer d-flex justify-content-end">
                            <button className="btn btn-outline-success mr-2" data-toggle="modal" data-target="#editHouse" onClick={this.props.changeHome}>EDIT</button>
                            <button className="btn btn-outline-danger">DELETE</button>
                        </div>
                    ):null}
                </div>
            </div>
        )
    }
}

export default Card;