import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Homecitydesk.css'

const Homecitydesk = (props) => {
    return(
      <Fragment>
        <video autoPlay muted loop id="myVideo">
          <source src={props.videosrc} type="video/mp4"/>
        </video>
        <div className="content d-flex align-items-center">
          <h1>{props.title}</h1>
        </div>
      </Fragment>
    )
}

export default Homecitydesk