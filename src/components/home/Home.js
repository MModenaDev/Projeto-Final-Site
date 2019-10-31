import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Map from '../map/map';
import NavbarLog from '../navbar/NavbarLog';
import Footer from '../footer/Footer'
import Axios from 'axios';
import CardMobile from './card/Card-mob';
import CardDesktop from "./card/Card-desk";
import Loader from 'react-loader-spinner'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      allHouses: [],
      houses: [],
      city: '',
      updatePhoto: '',
      isLoading: false,
    }
    this.changePhoto = this.changePhoto.bind(this)
    this.adjustTitle = this.adjustTitle.bind(this)
    this.getHouses = this.getHouses.bind(this)
    // this.filterHouses = this.filterHouses.bind(this)
    this.showCardsMob = this.showCardsMob.bind(this)
    this.showCardsDesk = this.showCardsDesk.bind(this)
  }  
  
  getHouses() {   
    this.setState({isLoading: true}) 
    Axios.get("https://projfinal-dev.herokuapp.com/api/house/search?city")
      .then(response => {
        this.setState({allHouses: response.data, isLoading: false})
        this.adjustTitle()
      })
      .catch(err => console.log(err))      
    }
    
  adjustTitle() {
    const { params } = this.props.match;      
    if (params.city === "SaoPaulo") {
      this.setState({city: 'São Paulo'})
    } else {
      this.setState({city: params.city})
    }
    this.filterHouses() 
  }
    
  changePhoto() {
    if (this.state.city === 'São Paulo') {
      return {backgroundImage: 'url(/images/saopaulo.png)'}
    } else if (this.state.city === 'Bangkok') {
      return {backgroundImage: 'url(/images/bangkok.png)'}
    } else if (this.state.city === 'Budapest') {
      return {backgroundImage: 'url(/images/budapest.png)'}
    } else if (this.state.city === 'Taipei') {
      return {backgroundImage: 'url(/images/taipei.png)'}
    }
  }

  filterHouses() {
    if (this.state.city === 'São Paulo' || this.state.city === 'SaoPaulo') {
      let housesAdj = this.state.allHouses.filter(house => house.city === "Sao Paulo")      
      this.setState({houses: housesAdj})
    } else {
      let housesAdj = this.state.allHouses.filter(house => house.city === this.state.city)      
      this.setState({houses: housesAdj})
    }
  }
  
  showCardsMob() {
    return this.state.houses.map(house =>{
      return (
        <CardMobile house={house} />
      )
    }) 
  }

  showCardsDesk() {
    return this.state.houses.map(house =>{
      return (
        <CardDesktop house={house} />
      )
    }) 
  }
  
  componentDidMount() {
    this.getHouses()
  }
  
  render(){
    return(
      (!this.state.isLoading)?(
      <Fragment>
        <NavbarLog />
{/* ===================================== MOB ============================================== */}      
      
        <div className="container-fluid">
          <div className="row fixed-top-1 d-md-none">
            <div className="col-12 head-home d-flex justify-content-center align-items-center" style={this.changePhoto()}>
              <h2>{this.state.city}</h2>
            </div>
            <div className="col-12 home-inf d-flex align-items-center">
              <button className="btn btn-filter d-flex justify-content-center align-items-center">
                <p>Período</p>
                {/* <img src="/images/angle-arrow-down.png" alt=""/> */}
              </button>
            </div>
            <div className="col-12 d-flex justify-content-center apts">
              <h3>Apartamentos Disponíveis</h3>
            </div>
          </div>

          <div className="row places-row d-flex justify-content-center d-md-none">
            {this.showCardsMob()}
          </div>
{/* ===================================== DESKTOP ============================================== */}
          <div className="row d-none d-md-flex fixed-right">
            <div className="col-12 p-0">
              <Map houses={this.state.houses} city={this.props.match.params.city}/>
            </div>

          </div>
          <div className="row d-none d-md-flex places-row-desk justify-content-center ">
            <div className="col-12 text-center fixed-top-city p-0">
              <h1>Apartamentos Disponíveis em: {this.state.city}</h1>
            </div>
            {this.showCardsDesk()}

          </div>
        </div>
        <Footer />
      </Fragment>
      ):(
        <div className="house-loading">
          <Loader className="house-loader" type="Plane" color="#FB5D30" height={100} width={100}/>
        </div>  
      )
    )
  }
}

export default Home