import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Order.scss'

import { getOrderData } from '../actions/orderActions'

import ScrollView from 'component/ScrollView/ScrollView.jsx'

import ListItem from './ListItem/ListItem'

class Order extends Component {
  constructor(props) {
    super(props)

    this.page = 0

    this.state = {
      is: false
    }

    this.fetchData(this.page)
  }

  loadPage() {
    this.page++
    if(this.page > 3) {
      this.setState({
        isend: true
      })
    } else {
      this.fetchData(this.page)
    }
  }

  fetchData(page) {
    this.props.dispatch(getOrderData(page))
  }

  renderList() {
    let list = this.props.list

    return list.map((item, index) => {
        return <ListItem itemData = {item} key = {index} />
    })
  }

  render() {
    return (
      <div className = 'order'>
        <div className = 'header'>订单</div>
        <ScrollView loadCallback = {this.loadPage.bind(this)} isend = {this.state.isend} >
          <div className = 'order-list'>{this.renderList()}</div>
        </ScrollView>
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.orderReducer.list
  })
)(Order)