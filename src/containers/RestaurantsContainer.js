import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants 
                restaurants={this.props.restaurants} 
                deleteRestaurant={this.props.deleteRestaurant} 
        />
      </div>
    )
  }
}

function msp(state) {
  return {
    restaurants: state.restaurants
  }
}

function mdp(dispatch) {
  return {
    addRestaurant: (restaurant) => dispatch({ type: "ADD_RESTAURANT", text: restaurant.text }),
    deleteRestaurant: (restaurantId) => dispatch({ type: "DELETE_RESTAURANT", restaurantId: restaurantId })
  }
}

export default connect(msp, mdp)(RestaurantsContainer);
