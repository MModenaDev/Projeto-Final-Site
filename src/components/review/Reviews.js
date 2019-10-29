import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Review.css'
import ReviewCard from './ReviewCard'


class Review extends Component {

  render() {
    return (
        <div className="review container-fluid mt-3">
          <div className="row d-flex justify-content-center">
            <div className="col-12 d-flex justify-content-center pt-5">
              <h2>Avaliações</h2>
            </div>
            <ReviewCard />
          </div>
        </div>
    )

  }

}
export default Review;