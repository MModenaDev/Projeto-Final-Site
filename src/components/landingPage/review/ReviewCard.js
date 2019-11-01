import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ReviewCard.css'

function ReviewCard(props) {
  return (
    <div className="review-card">
      <img src={props.imgUrl} alt="face of who made the review" className="review-card__img"/>
      <div className="review__stars-container">
        {[...Array(parseInt(props.stars))].map((e, i) => {
          return (
            <i className="material-icons" key={i}>star</i>
          )
        })}
      </div>
      <p className="review__text">
        {props.text}
      </p>
    </div>
  )
}

export default ReviewCard;