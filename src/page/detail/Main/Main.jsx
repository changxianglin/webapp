import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavHeader from 'component/NavHeader/NavHeader'
import { Route, withRouter, NavLink } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Restanurant from '../Restanurant/Restanurant'
import Comment from '../Comment/Comment'

import './Main.scss'

class Main extends Component {
  constructor(props) {
    super(props)

  }

  changeTab() {

  }

  renderTabs() {
    let tabs = this.props.tabs

    return tabs.map((item) => {
      return (
        <NavLink replace = {true} to = {'/' + item.key} key = {item.key} className='active' onClick = {() => this.changeTab} className = 'tab-item '>{item.name}</NavLink>
      )
    })
  }

  render() {
    return (
      <div className = 'detail'>
        <NavHeader title = {'黄焖鸡'} />
        <div className = 'tab-bar'>
          {this.renderTabs()}
        </div>
        <Route exact path = '/menu' component = {Menu} />
        <Route path = '/comment' component = {Comment} />
        <Route path = '/restanurant' component = {Restanurant} />
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({
    tabs: state.tabReducer.tabs
  })
)(Main))