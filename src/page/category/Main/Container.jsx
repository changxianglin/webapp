import React, { Component } from 'react'

import { hot } from 'react-hot-loader'

import Main from './Main.jsx'

class Container extends Component {
  render() {
    return <Main />
  }
}

export default hot(module)(Container)