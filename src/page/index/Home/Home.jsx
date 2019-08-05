import React, { Component } from 'react'
import Header from './Header/Header'
import Category from './Category/Category'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Category />
      </div>
    )
  }
}

export default Home