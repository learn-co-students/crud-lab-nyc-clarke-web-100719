import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)} 
                  deleteReview={this.props.deleteReview}
        />
      </div>
    )
  }
}

function msp(state) {
  return {
    reviews: state.reviews
  }
}

function mdp(dispatch) {
  return {
    addReview: (review) => dispatch({ type: "ADD_REVIEW", review: review}),
    deleteReview: (reviewId) => dispatch({ type: "DELETE_REVIEW", reviewId: reviewId })
  }
}

export default connect(msp, mdp)(ReviewsContainer)
