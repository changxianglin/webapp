import React, { Component } from 'react'
import { connect } from 'react-redux'

import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home'
import Order from '../Order/Order'
import My from '../My/My'

class Main extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <Home />
        <Order />
        <My />
        <BottomBar />
      </div>
    )
  }
}

export default connect()(Main)