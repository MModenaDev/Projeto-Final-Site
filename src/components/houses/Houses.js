import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Houses.css';
import NavbarLog from '../navbar/NavbarLog';

class Houses extends Component {
  constructor(){
    super()
    
    this.bgImg = '/home/eric/Documents/Ironhack/PROJETO 3/Projeto-Final-Site/public/images/places.png'

  }

  render(){
    return(
      <Fragment>
        <NavbarLog />
        <div className="container-fluid">
          <div className="row house-page">
            <div className="col-12 col-md-6 p-0" >
              <div className="row">
                <div className="col-12 left-side p-0" style={{backgroundImage: `url(${this.bgImg})`}}>
                  <div className="row house-info1">
                    <div className="col-12 d-flex align-items-end">
                      <div className="row house-info">
                        <div className="col-12 house-title">AP SOLTEIRO</div>
                        <div className="col-10 house-address">Av. Paulista, 1374 - Bela Vista, São Paulo</div>
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
    )
  }
}

export default Houses