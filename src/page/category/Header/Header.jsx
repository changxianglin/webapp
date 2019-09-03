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
    let closePanel = false
    if(this.props.activeKey == key && !this.props.closePanel) {
      closePanel = true
    }
    this.props.dispatch(changeTab({
      activeKey: key,
      closePanel: closePanel,
    }))
  }

  renderTabs() {
    let tabs = this.props.tabs
    let array = []
    for (let key in tabs) {
      let item = tabs[key]
      let cls = item.key + ' item'
      if(item.key === this.props.activeKey && !this.props.closePanel) {
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

  renderFilterInnerContent(items, /* filterList */) {
    return items.map((item, index) => {
      let cls = item.icon ? 'cate-box-inner has-icon' : 'cate-box-inner'
      if(item.active) {
        cls += 'active'
      }
      return(
        <div className = 'cate-box' key = {index}>
          <div className = {cls}>
            {item.icon ? <img src = {item.icon} /> : null }{item.name}
          </div>
        </div>
      )
    })
  }

  renderFilterContent() {
    let filterList = this.props.filterData.activity_filter_list || []
    return filterList.map((item, index) => {
      return (
        <li key = {index} className = 'filter-item'>
            <p className = 'filter-title'>{item.group_title}</p>
            <div className = 'item-content clearfix'>
              {this.renderFilterInnerContent(item.items, filterList)}
            </div>
        </li>
      )
    })
  }

  renderTypeContent() {
    let typeList = this.props.filterData.sort_type_list || []
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
            <div className = 'item-content clearfix'>
              {this.renderCateInnerContent(item, /*catelist*/)}
            </div>
          </li>
        )
    })
  }

  renderContent() {
    let tabs = this.props.tabs
    let array = []
    for (let key in tabs) {
      let item = tabs[key]
      let cls = item.key + '-panel'
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
          {this.renderFilterContent()}
        </ul>
        )
      }
    }

    return array
  }

  render() {
    let cls = 'panel'
    if(!this.props.closePanel) {
      cls += ' show'
    } else {
      cls = 'panel'
    }

    return (
      <div className = 'header'>
        <div className = 'header-top'>
          {this.renderTabs()}
        </div>
        <div className = {cls}>
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
    closePanel: state.headerReducer.closePanel
  })
)(Header)