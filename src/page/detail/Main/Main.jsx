import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavHeader from 'component/NavHeader/NavHeader'

import './Main.scss'

class Main extends Component {
  constructor(props) {
    super(props)

  }

  renderTabs() {
    let tabs = this.props.tabs

    return tabs.map((item) => {
      return (
        <div key = {item.key} className = 'tab-item'>{item.name}</div>
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
      </div>
    )
  }
}

export default connect(
  state => ({
    tabs: state.tabReducer.tabs
  })
)(Main)