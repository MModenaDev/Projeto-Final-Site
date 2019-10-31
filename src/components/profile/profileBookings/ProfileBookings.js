import React, { Component } from "react";
import "./ProfileBookings.css";

class ProfileBookings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      next: true,
      past: false
    };
  }

  showNext() {
    if (this.state.next === false) {
      this.setState({
        next: true,
        past: false
      });
    }
  }

  showPast() {
    if (this.state.past === false) {
      this.setState({
        past: true,
        next: false
      });
    }
  }

  render() {
    return (
      <div className="profile-content__booking">
        <p className="profile-content__booking-current">Current place</p>

        <div className="row d-flex justify-content-center">
          <div className="col-10 card-bg-desk p-0 m-0 mt-4">
            <div className="row d-flex justify-content-center">
              <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
                <h4>Ap. Solteiro</h4>
                <p>Av. Paulista, 1374 - Bela Vista, São Paulo</p>
              </div>
            </div>
          </div>

          <div className="profile-booking__btns-container">
            <button className="profile-booking__btns-container--btns1" style={{backgroundColor: "#BB2A00"}} onClick={() => this.showNext()}>
              Próximos
            </button>
            <button className="profile-booking__btns-container--btns2" style={{backgroundColor: "#BB2A00"}} onClick={() => this.showPast()}>
              Anteriores
            </button>
          </div>
          
          

          <div className="booking-container__scroll myRow">
            {(this.state.next)?(<h1>next</h1>):null}
            {(this.state.past)?(<h1>past</h1>):null}

            <div className="myRow d-flex justify-content-center">
              <div className="col-10 card-bg-desk p-0 m-0 mt-4">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 p-0 card-place flex-column d-flex align-items-bottom">
                    <h4>Ap. Solteiro</h4>
                    <p>Av. Paulista, 1374 - Bela Vista, São Paulo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="myRow d-flex justify-content-center">
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
          
          
        </div>
      </div>
    );
  }
}

export default ProfileBookings;
