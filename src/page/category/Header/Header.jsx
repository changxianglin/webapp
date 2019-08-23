import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Header.scss'

import { changeTab } from '../actions/headerAction'

class Header extends Component {

  changeTab(key) {
    this.props.dispatch(changeTab({
      activeKey: key
    }))
  }

  renderTabs() {
    let tabs = this.props.tabs
    let array = []
    for (let key in tabs) {
      let item = tabs[key]
      let cls = item.key + ' item'
      if(item.key === this.props.activeKey) {
        cls += ' current'
      }

      array.push(
      <div 
      className = {cls} 
      key = {item.key}
      onClick = {() => this.changeTab(item.key)}
      >
        {item.text}
      </div>
      )
    }

    return array 
  }

  render() {
    return (
      <div className = 'header'>
        <div className = 'header-top'>
          {this.renderTabs()}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    tabs: state.headerReducer.tabs,
    activeKey: state.headerReducer.activeKey,
  })
)(Header)