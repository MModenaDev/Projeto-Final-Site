import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Homecitydesk.css'

const Homecitydesk = (props) => {
    return(
      <div className="col-3 homecitydesk d-flex align-items-center justify-content-center">
        <video autoPlay muted loop id="myVideo">
          <source src={props.videosrc} type="video/mp4"/>
        </video>
        <div className="content d-flex align-items-center">
          <h1>{props.title}</h1>
        </div>
      </div>
    )
}

export default Homecitydesk