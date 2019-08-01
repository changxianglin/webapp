import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/tabAction'

class Main extends Component {
  constructor(props) {
    super(props)

  }

  click(){
    this.props.dispatch(addTodo({
      num: 10
    }))
  }

  render() {
    let num = this.props.num
    return (
      <div onClick = {() => this.click()}>
        {num}
      </div>
    )
  }
}

export default connect(
  state => ({
    num: state.tabReducer.num
  })
)(Main)