import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Houses.css';
import NavbarLog from '../navbar/NavbarLog';
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Houses extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      house: {images: []}
    }
    this.id = this.props.match.params.id
    this.bgImg = '/images/places.png'
    this.getHouse = this.getHouse.bind(this)
    this.bgImage = this.bgImage.bind(this)
  }

  componentDidMount(){
    this.getHouse();
  }

  getHouse() {
    this.setState({isLoading: true})
    Axios.get(`https://projfinal-dev.herokuapp.com/api/house/${this.id}`)
      .then(response => {
        this.setState({house: response.data, isLoading: false})
      })
      .catch(err => console.log(err))
  }

  bgImage() {
    if (this.state.house.images.length === 0) {
      return {backgroundImage: 'url(/images/places.png)'}
    } else {
      return {backgroundImage: `url(https://res.cloudinary.com/gtmori/image/upload/v1572468634/${this.state.house.images[0].public_id}.png)`}
    }
  }


  render(){    
    return(
      (!this.state.isLoading)?(
        <Fragment>
        <NavbarLog />
        <div className="container-fluid">
          <div className="row house-page">
            <div className="col-12 col-md-6 p-0" >
              <div className="row">
                <div className="col-12 left-side p-0" style={this.bgImage()}>
                  <div className="row house-info1">
                    <div className="col-12 d-flex align-items-end">
                      <div className="row house-info">
                        <div className="col-12 house-title">{this.state.house.name}</div>
                        <div className="col-10 house-address">{this.state.house.adress}</div>
                        <div className="col-2 house-capacity">1/1</div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-12 d-flex justify-content-center book-room align-items-center">
                  <span>RESERVAR QUARTO</span>

                </div>
              </div>

            </div>
            <div className="col-6 right-side">
              
            </div>
          </div>
        </div>

      </Fragment>
      ):(
        <div className="house-loading">
          <Loader className="house-loader" type="Plane" color="#FB5D30" height={100} width={100}/>
        </div>  
      )
    )
}}

export default Houses