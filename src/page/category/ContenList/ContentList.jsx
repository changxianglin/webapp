import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getListData } from '../actions/contentListAction'

import ListItem from 'component/ListItem/ListItem.jsx'
import ScrollView from 'component/ScrollView/ScrollView.jsx'

import './ContentList.scss'

class ContentList extends Component {
  constructor(props) {
    super(props)

    this.page = 0

    this.fetchData(this.page)

    this.state = {
      isend: false
    }

  }

  onLoadPage() {
    let clientHeight = document.documentElement.clientHeight
    let scrollHeight = document.body.scrollHeight
    let scrollTop = document.documentElement.scrollTop

    let proLoadDis = 30

    if((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
 
      this.page++
      // 最多滚动三页
      if(this.page > 3) {
        this.setState({
          isend: true
        })
      } else {
        this.fetchData(this.page)
      }

  }
  } 

  fetchData(page) {
    this.props.dispatch(getListData(page))
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
        <ScrollView loadCallback = {this.onLoadPage.bind(this)} isend = {this.state.isend}>
          {this.renderItems()}
        </ScrollView>
      </div>
    )
  }
}

export default connect(state => ({
  list: state.contentListReducer.list
}))(ContentList)