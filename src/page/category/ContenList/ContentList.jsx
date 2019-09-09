import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListData } from '../actions/contentListAction'

import ListItem from 'component/ListItem/ListItem.jsx'
import ScrollView from 'component/ScrollView/ScrollView.jsx'

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

      // 最多滚动三页
      if(this.props.page <= 3) {
        this.fetchData()
      } 

  }
  } 

  fetchData() {
    this.props.dispatch(getListData({}))
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
        <ScrollView loadCallback = {this.onLoadPage.bind(this)} isend = {this.props.isend}>
          {this.renderItems()}
        </ScrollView>
      </div>
    )
  }
}

export default connect(state => ({
  list: state.contentListReducer.list,
  page: state.contentListReducer.page,
  isend: state.contentListReducer.isend,
}))(ContentList)