import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getHeaderData } from '../../actions./categoryActions.js'

import 'Category.scss'

class Category extends Component {
  fetchData() {
    axios({
      method: 'get',
      url: 'json/header.json'
    }).then(resp => {
      this.props.dispatch(getHeaderData(resp.data))
    })
  }

  render() {
    return (
      <div className = 'category-content'>
        
      </div>
    )
  }
}

export default connect()(Category)