import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Review.css";
import ReviewCard from "./ReviewCard";
import { Link } from 'react-router-dom'
import Slider from "react-slick";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfReviews: 3
    }
  }

  componentDidMount() {
    let num;
    if (window.innerWidth > 1100) {
      num = 3;
    } else {
      num = 1;
    }

    this.setState({
      numberOfReviews: num
    })
  }





  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.state.numberOfReviews,
      slidesToScroll: 1
    };



    return (
      
      <div className="reviews">
        <h2 className="reviews__title">AVALIAÇÕES</h2>

        <div className="reviews__slide-container">
          <Slider {...settings}>
            <div>
            <ReviewCard imgUrl="/images/avatar.png" stars="4" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/avatar.png" stars="4" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/avatar.png" stars="4" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/avatar.png" stars="4" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/avatar.png" stars="4" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/avatar.png" stars="4" text="Uma experiência única que me permitiu aproveitar e conhecer diversos lugares sem deixar de lado a comodidade e o conforto."/>
            </div>
          </Slider>
        </div>
        <Link to="/signup" className="landing-page--register-btn">Register now</Link>

      </div>



        
        

    );
  }
}
export default Review;
        
      // </div>
