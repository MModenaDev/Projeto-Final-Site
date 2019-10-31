import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import Map from '../map/map';
import NavbarLog from '../navbar/NavbarLog';
import Footer from '../landingPage/footer/Footer'


class Home extends Component {

  componentWillUnmount() {
    console.log('unmount')
  }

  render(){
    return(
      <Fragment>
      <NavbarLog />
      <div  className="container-fluid">
        <div data-aos="fade-right" className="row fixed-top-1 d-md-none">
          <div className="col-12 head-home d-flex justify-content-center align-items-center">
            <h2>São Paulo</h2>
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

          <div className="col-10 card-bg p-0 m-0 mt-4">
            <div className="row">
              <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
                  <h4>Ap. Solteiro</h4>
                  <p>Av. Paulista, 1374 - Bela Vista, São Paulo</p>
              </div>
            </div>
          </div>


        </div>
        <div className="row d-none d-md-flex fixed-right">
          <div className="col-12 p-0">
            <Map />
          </div>

        </div>
        <div className="row d-none d-md-flex places-row-desk justify-content-center ">
          <div className="col-12 text-center fixed-top-city p-0">
            <h1>Apartamentos Disponíveis em: São Paulo</h1>
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