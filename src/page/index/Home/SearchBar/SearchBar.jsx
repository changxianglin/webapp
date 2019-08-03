import React, { Component } from 'react'
import './SearchBar.scss'

class SearchBar extends Component {
  render() {
    return (
      <div className = 'search-bar'>
        <div className = 'bar-location'>
          <div className = 'location-icon'></div>
          <div className = 'location-text'>深圳市</div>
        </div>
        <div className = 'search-btn'>
          <p className = 'place-holder'>鸡翅</p>
        </div>
      </div>
    )
  }
}

export default SearchBar