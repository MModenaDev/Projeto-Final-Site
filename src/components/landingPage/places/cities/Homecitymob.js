import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Homecitymob.css'

const Homecitymob = (props) => {
  return (
    <div className="col-12 margin-negative homecitymob d-flex align-items-center justify-content-center" style={{backgroundImage: `url(${props.imgUrl})`}}>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Homecitymob