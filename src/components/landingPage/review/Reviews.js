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
            <ReviewCard imgUrl="/images/billGates.jpg" stars="4" text="I was using this website while I was creating my stuff and running my business, no complaints!"/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/danilo.jpeg" stars="5" text="A unique experience that allowed me to enjoy and know various places without forgetting the convenience and comfort. They even have coffee!"/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/elonMusk.jpg" stars="3" text="I could do it better in 2 days."/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/joc.jpeg" stars="5" text="It has been a pleasure to use this service while I was in Bangkok :)"/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/gabriel.jpeg" stars="2" text="I couldn't steal your passwords, seems like they are hashed ಥ_ಥ"/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/MarkZuckerberg.jpg" stars="5" text="They've done in one and a half week what I couldn't do in my entire life! This is revolutionary!!"/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/heitor.jpeg" stars="5" text="This service is just FENOMENAL!! (hire me please)"/>
            </div>
            <div>
              <ReviewCard imgUrl="/images/arnold.jpeg" stars="2" text="I don't like hugs."/>
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
