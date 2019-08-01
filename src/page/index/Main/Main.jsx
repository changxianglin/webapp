import React, { Component } from 'react'
import { connect } from 'react-redux'

class Main extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(
  state = ({
    num: state.tabReducer.num
  })
)(Main)