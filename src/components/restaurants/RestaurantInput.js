import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
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

export default RestaurantInput;
