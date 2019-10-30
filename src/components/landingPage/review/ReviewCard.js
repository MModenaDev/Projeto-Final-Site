import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './ReviewCard.css'


// class ReviewCard extends Component {

//   render() {
//     return (
//       <div className="col-8 col-md-4 review-card">
//         <div className="row d-flex justify-content-center">
//           <div className="col-10 pt-4 d-flex justify-content-center">
//             <img src="https://pixabay.com/get/57e3d7434253ac14f6da8c7dda6d49214b6ac3e45656734b7d2a7bdd92/woman-1320810_1280.jpg" alt=""/>
//           </div>
//           <div className="col-8 pt-3 d-flex justify-content-center">
//            <i className="material-icons">star</i>
//            <i className="material-icons">star</i>
//            <i className="material-icons">star</i>
//            <i className="material-icons">star</i>
//            <i className="material-icons">star</i>
//           </div>
//           <div className="col-8 text-center">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem, numquam iusto laborum ad provident temporibus ipsum eveniet! Mollitia, enim.
//             </p>
//           </div>
//         </div>
//       </div>
//     )

//   }

// }

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