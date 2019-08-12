import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListData } from '../../actions/contentListAction'

import ListItem from './ListItem/ListItem.jsx'

import './ContentList.scss'

class ContentList extends Component {
  constructor(props) {
    super(props)
    this.fetchData()
  }

  onLoadPage() {
      let clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.body.scrollHeight
      let scrollTop = document.documentElement.scrollTop

      let proLoadDis = 30

      if((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
        console.log(123)
    }
}

  UNSAFE_componentWillMount() {
    window.addEventListener('scroll', this.onLoadPage.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onLoadPage.bind(this))
  }

  fetchData() {
    this.props.dispatch(getListData())
  }

  renderItems() {
    let list = this.props.list
    return  list.map((item, index) => {
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