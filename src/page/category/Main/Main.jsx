import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavHeader from 'component/NavHeader/NavHeader'
import Header from '../Header/Header'

class Main extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className = 'category'>
        <NavHeader title = '分类' />
        <Header />
      </div>
    )
  }
}

export default connect()(Main)