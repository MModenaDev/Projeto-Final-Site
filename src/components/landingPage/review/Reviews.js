import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import { Link } from 'react-router-dom'

class Review extends Component {
  render() {
    return (
      <div className="reviews">
        <h2 className="reviews__title">AVALIAÇÕES</h2>
        <div className="reviews__card-container">
          <ReviewCard imgUrl="./images/avatar.png" stars="5" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
          <ReviewCard imgUrl="./images/avatar.png" stars="3" text="Meio bosta :)"/>
          <ReviewCard imgUrl="./images/avatar.png" stars="5" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
          <ReviewCard imgUrl="./images/avatar.png" stars="4" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
          <ReviewCard imgUrl="./images/avatar.png" stars="5" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
        </div>
        
        
          <Link to="/signup" className="landing-page--register-btn">Register now</Link>
        
      </div>
    );
  }
}
export default Review;
