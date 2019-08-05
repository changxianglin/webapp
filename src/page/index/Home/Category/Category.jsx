import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getHeaderData } from '../../actions/categoryActions.js'

import './Category.scss'

class Category extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }

  fetchData() {
    axios({
      method: 'get',
      url: 'json/header.json'
    }).then(resp => {
      this.props.dispatch(getHeaderData(resp.data))
    })
  }

  renderItems() {
    let items = this.props.items
    
    return items.map((item, index) => {
      return <div key = {index}>{item.name}</div>
    })
  }

  render() {
    return (
      <div className = 'category-content'>
        {this.renderItems()}
      </div>
    )
  }
}

export default connect(state => ({
  items: state.categoryReducer.items
}))(Category)