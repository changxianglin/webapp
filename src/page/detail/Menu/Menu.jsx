import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListData } from '../actions/menuAction'

import './Menu.scss'

class Menu extends Component {
  constructor(props) {
    super(props)

    this.props.dispatch(getListData())
  }

  renderLeft() {
    let list = this.props.listData.food_spu_tags || []

    return list.map((item, index) => {
        let cls = 'left-item'
        return (
          <div key = {index} className = {cls}>
            <div className = 'item-text'>{item.icon ? <img className = 'item-icon' src = {item.icon} alt = '' /> : null }{item.name}</div>
          </div>
        )
    })
  }

  render() {
    return (
      <div className = 'menu-inner'>
        <div className = 'left-bar'>
          <div className = 'left-bar-inner'>
            {this.renderLeft()}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    listData: state.menuReducer.listData
  })
)(Menu)