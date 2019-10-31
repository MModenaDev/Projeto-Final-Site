import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Map from '../map/map';
import NavbarLog from '../navbar/NavbarLog';
import Footer from '../footer/Footer'
import Axios from 'axios';
import CardMobile from './card/Card-mob';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      allHouses: [],
      houses: [],
      city: '',
      updatePhoto: '',
    }
    this.changePhoto = this.changePhoto.bind(this)
    this.adjustTitle = this.adjustTitle.bind(this)
    this.getHouses = this.getHouses.bind(this)
    // this.filterHouses = this.filterHouses.bind(this)
    this.showCardsMob = this.showCardsMob.bind(this)
  }  
  
  getHouses() {    
    Axios.get("https://projfinal-dev.herokuapp.com/api/house/search?city")
      .then(response => {
        this.setState({allHouses: response.data})
        this.adjustTitle()
      })
      .catch(err => console.log(err))      
    }
    
  adjustTitle() {
    const { params } = this.props.match;      
    if (params.city === "SaoPaulo") {
      this.setState({city: 'São Paulo'})
      console.log("teste2");      
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
    console.log(this.state.city)
    if (this.state.city === 'São Paulo' || this.state.city === 'SaoPaulo') {
      let housesAdj = this.state.allHouses.filter(house => house.city === "Sao Paulo")      
      this.setState({houses: housesAdj})
      console.log("teste");
      console.log(this.state.city);
      
      
    } else {
      let housesAdj = this.state.allHouses.filter(house => house.city === this.state.city)      
      this.setState({houses: housesAdj})
      console.log("teste");
      console.log(this.state.city);
    }
  }
  
  showCardsMob() {
    return this.state.houses.map(house =>{
      return (
        <CardMobile house={house} />
      )
    }) 
  }
  
  componentDidMount() {
    this.getHouses()
  }
  
  render(){
    return(
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
            <Map />
          </div>

        </div>
        <div className="row d-none d-md-flex places-row-desk justify-content-center ">
          <div className="col-12 text-center fixed-top-city p-0">
            <h1>Apartamentos Disponíveis em: {this.state.city}</h1>
          </div>

          <div className="col-10 card-bg-desk p-0 m-0 mt-4">
            <div className="row d-flex justify-content-center">
              <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
                  <h4>Ap. Solteiro</h4>
                  <p>Av. Paulista, 1374 - Bela Vista, São Paulo</p>
              </div>
            </div>
          </div>

          <div className="col-10 card-bg-desk p-0 m-0 mt-4">
            <div className="row d-flex justify-content-center">
              <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
                  <h4>Ap. Solteiro</h4>
                  <p>Av. Paulista, 1374 - Bela Vista, São Paulo</p>
              </div>
            </div>
          </div>

          <div className="col-10 card-bg-desk p-0 m-0 mt-4">
            <div className="row d-flex justify-content-center">
              <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
                  <h4>Ap. Solteiro</h4>
                  <p>Av. Paulista, 1374 - Bela Vista, São Paulo</p>
              </div>
            </div>
          </div>

          <div className="col-10 card-bg-desk p-0 m-0 mt-4">
            <div className="row d-flex justify-content-center">
              <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
                  <h4>Ap. Solteiro</h4>
                  <p>Av. Paulista, 1374 - Bela Vista, São Paulo</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
      </Fragment>
    )
  }
}

export default Home