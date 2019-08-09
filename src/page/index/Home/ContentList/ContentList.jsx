import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListData } from '../../actions/contentListAction'

import ListItem from './ListItem/ListItem'

import './ContentList.scss'

class ContentList extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }

  fetchData() {
    this.props.dispatch(getListData())
  }

  renderItems() {
    let list = this.props.list
    list.map((item, index) => {
      return <ListItem key = {index} itemData = {item}></ListItem>
    })
  }

  render() {
    return (
      <div className = 'list-content'>
        <h4 className = 'list-title'>
          <span className = 'title-line'></span>
          <span>附近商家</span>
          <span className = 'title-line'></span>
        </h4>
        {this.renderItems()}
      </div>
    )
  }
}

export default connect(state => ({
  list: state.contentListReducer.list
}))(ContentList)