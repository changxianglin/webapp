import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/tabAction'

import BottomBar from '../BottomBar/BottomBar.jsx'

class Main extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <BottomBar />
      </div>
    )
  }
}

export default connect(
  state => ({
    
  })
)(Main)