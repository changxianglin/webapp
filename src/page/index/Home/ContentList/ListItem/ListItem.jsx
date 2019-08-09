import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getListData } from '../../actions/contentListAction'

import './ContentList.scss'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className = 'item-content'>
        <img className = 'item-img' />
        <div className = 'brand'>品牌</div>
        <div className = 'item-info-content'>
          <p className = 'item-title'>商品名称</p>
          <div className = 'item-desc'>
            <div className = 'item-score'>XX</div>
            <div className = 'item-count'>XX</div>
            <div className = 'item-distance'>XX</div>
            <div className = 'item-time'>XX</div>
          </div>
          <div className = 'item-price'>
            <div className = 'item-pre-price'>XX</div>
          </div>
          <div className = 'item-others'>
            <div className = 'other-info'>
              <img src = '' className = 'other-tag' />
            </div>
            <div className = 'other-content'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  // state => ({
  //   list: state.contentListReducer.list
  // })
)(ListItem)