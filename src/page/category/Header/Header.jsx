import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TABKEY } from '../config'

import './Header.scss'

import { changeTab, getFilterData } from '../actions/headerAction'

class Header extends Component {
  constructor(props) {
    super(props)

    this.fetchData()
  }

  fetchData() {
    this.props.dispatch(getFilterData())
  }

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

  renderContent() {
    let tabs = this.props.tabs
    let array = []
    for(let key in tabs) {
      let item = tabs[key]
      let cls = item.key + ' -panel'
      if(item.key === this.props.activeKey) {
        cls += ' current'
      }

      if(item.key === TABKEY.cate) {
        array.push(
        <ul key = {item.key} className = {cls}>
          {this.renderContent()}
        </ul>
        )
      }
    }
  }

  render() {
    return (
      <div className = 'header'>
        <div className = 'header-top'>
          {this.renderTabs()}
        </div>
        <div className = 'panel'>
          <div className = 'panel-inner'>
            {this.renderContent()}
          </div>
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