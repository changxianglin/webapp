import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable';

import BottomBar from '../BottomBar/BottomBar.jsx'
import Home from '../Home/Home'
// import Order from '../Order/Order'
// import My from '../My/My'
import Loading from './Loading'

import 'component/common.scss'

const My = Loadable({
  loader: () => import(/* webpackChunkName: 'my' */'../My/My'),
  loading: Loading,
})

const Order = Loadable({
  loader: () => import(/* webpackChunkName: 'order' */'../Order/Order'),
  loading: Loading,
})

class Main extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <Route path = '/home' exact component = {Home} />
        <Route path = '/order' component = {Order}/>
        <Route path = '/my' component = {My} />
        <BottomBar />
      </div>
    )
  }
}

export default withRouter(connect()(Main))