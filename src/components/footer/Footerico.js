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
    <h4 className="mt-2">{props.name}</h4>
  </div>

 )
}

export default Footerico