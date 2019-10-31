import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom'

const Footerico = (props) => {
 return(
  <div className="col-2 d-flex flex-column pt-2">
      <NavLink activeClassName={props.active} to={props.link}>
        <div className="foot-img d-flex justify-content-center">
            <img src={props.imgsrc} alt=""/>
        </div>
        <div className="d-flex justify-content-center">
          <span className="footer-text">{props.name}</span>
        </div>
      </NavLink>
  </div>

 )
}

export default Footerico