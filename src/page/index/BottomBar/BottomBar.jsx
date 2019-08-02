import './BottomBar.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeTab } from '../actions/tabAction'

class BottomBar extends Component {
  constructor(props) {
    super(props)
  }

  changeTab(item) {
    this.props.dispatch(changeTab({
      activeKey: item.key
    }))
  }

  renderItems() {
    let tabs = this.props.tabs

    return tabs.map((item, index) => {
      let cls = item.key + ' btn-item'
      let name = item.name

      if(item.key === this.props.activeKey) {
        cls += ' active'
      }

      return (
        <div className = {cls} key = {index} onClick = {() => this.changeTab(item)}>
            <div className = 'tab-icon'></div>
            <div className = 'btn-name'>{name}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className = 'bottom-bar'>
        {this.renderItems()}
      </div>
    )
  }
}

export default connect(
  state => ({
    tabs: state.tabReducer.tabs,
    activeKey: state.tabReducer.activeKey,
  })
)(BottomBar)