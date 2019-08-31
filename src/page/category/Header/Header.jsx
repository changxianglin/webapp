import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TABKEY } from '../config'

import './Header.scss'

import { changeTab, getFilterData } from '../actions/headerAction'

class Header extends Component {
  constructor(props) {
    super(props)

    this.fetchData()
  }

  fetchData() {
    this.props.dispatch(getFilterData())
  }

  changeTab(key) {
    this.props.dispatch(changeTab({
      activeKey: key
    }))
  }

  renderTabs() {
    let tabs = this.props.tabs
    let array = []
    for (let key in tabs) {
      let item = tabs[key]
      let cls = item.key + ' item'
      if(item.key === this.props.activeKey) {
        cls += ' current'
      }

      array.push(
      <div 
      className = {cls} 
      key = {item.key}
      onClick = {() => this.changeTab(item.key)}
      >
        {item.text}
      </div>
      )
    }

    return array 
  }

  renderTypeContent() {
    let typeList = this.props.fetchData.sort_type_list || []
    console.log(typeList)
    return typeList.map((item, index) => {
      let cls = item.active ? 'type-item active' : 'type-item'

      return (
        <li className = {cls} key = {index}>
          {item.name}
        </li>
      )
    })
  }

  renderCateInnerContent(items, /*cateList*/) {
    return items.sub_category_list.map((item, index) => {
      let cls = item.active ? 'cate-box-inner active': 'cate-box-inner'
      return (
        <div className = 'cate-box' key = {index}>
          <div className = {cls}>
            {item.name}({item.quantity})
          </div>
        </div>
      )
    })
  }

  renderCateContent() {
    let cateList = this.props.filterData.category_filter_list || []

    return cateList.map((item, index) => {
        return (
          <li key = {index} className = 'cate-item'>
            <p className = 'item-title'>{item.name}<span className = 'item-count'>{item.quantity}</span></p>
            <div className = 'item-content'>
              {this.renderCateInnerContent(item, /*catelist*/)}
            </div>
          </li>
        )
    })
  }

  renderContent() {
    let tabs = this.props.tabs
    let array = []
    for(let key in tabs) {
      let item = tabs[key]
      let cls = item.key + ' -panel'
      if(item.key === this.props.activeKey) {
        cls += ' current'
      }

      if(item.key === TABKEY.cate) {
        array.push(
        <ul key = {item.key} className = {cls}>
          {this.renderCateContent()}
        </ul>
        )
      } else if(item.key === TABKEY.type) {
        array.push(
        <ul key = {item.key} className = {cls}>
          {this.renderTypeContent()}
        </ul>
        )
      } else if(item.key === TABKEY.filter) {
        array.push(
        <ul key = {item.key} className = {cls}>
          {/* {this.renderFilterContent()} */}
        </ul>
        )
      }

      return array
    }
  }

  render() {
    return (
      <div className = 'header'>
        <div className = 'header-top'>
          {this.renderTabs()}
        </div>
        <div className = 'panel'>
          <div className = 'panel-inner'>
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    tabs: state.headerReducer.tabs,
    activeKey: state.headerReducer.activeKey,
    filterData: state.headerReducer.filterData,
  })
)(Header)