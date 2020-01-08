import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview({ text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({ text: "" })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
              name="text"
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
