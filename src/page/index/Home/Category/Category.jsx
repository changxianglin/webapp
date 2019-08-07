import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHeaderData } from '../../actions/categoryActions.js'

import './Category.scss'

class Category extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }

  fetchData() {
    this.props.dispatch(getHeaderData())
  }

  renderItems() {
    let items = this.props.items
    items = items.splice(0, 8)

    return items.map((item, index) => {
      return (
          <div key = {index} className = 'category-item'>
            <img className = 'item-icon' src = {item.url} />
            <p className = 'item-name'>{item.name}</p>
          </div>
      )
    })
  }

  render() {
    return (
      <div className = 'category-content clearfix'>
        {this.renderItems()}
      </div>
    )
  }
}

export default connect(state => ({
  items: state.categoryReducer.items
}))(Category)