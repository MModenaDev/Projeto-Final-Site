import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'

const Footerico = (props) => {
 return(
  <div className="col-3 d-flex flex-column justify-content-center align-items-center pt-2">
    <div className="foot-img d-flex justify-content-center">
      <Link to={props.link}>
        <img src={props.imgsrc} alt=""/>
      </Link>
    </div>
    <span className="mt-2 footer-text">{props.name}</span>
  </div>

 )
}

export default Footerico