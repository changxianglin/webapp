import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showChoose, addSelectItem, menusSelectItem, clearCar } from '../../actions/menuAction'

import './ShopBar.scss'

class ShopBar extends Component {


  addSelectItem(item) {
    this.props.dispatch(addSelectItem({
      index: item._index,
      outIndex: item._outIndex,
    }))
  }

  minusSelectItem(item) {
    this.props.dispatch(menusSelectItem({
      index: item._index,
      outIndex: item._outIndex,
    }))
  }

  getTotalPrice() {
    let listData = this.props.listData.food_spu_tags || [] 
    let totalPrice = 0
    let dotNum = 0
    let chooseList = []

    for( let i = 0; i < listData.length; i++) {
      let spus = listData[i].spus || []
      for( let j = 0; j < spus.length; j++) {
        let chooseCount = spus[j].chooseCount 
        if(chooseCount > 0) {
          spus[j]._index = j 
          spus[j]._outIndex = i
          chooseList.push(spus[j])
          dotNum += chooseCount
          totalPrice += spus[j].min_price * chooseCount
        }
      }
    }

    return {
      totalPrice,
      dotNum,
      chooseList
    }
  }

  renderChooseItem(data) {
    const array = data.chooseList || []
    return array.map((item, index) => {
      return (
        <div key = {index} className='choose-item'>
          <div className='item-name'>{item.name}</div>
          <div className='item-price'>￥{item.min_price * item.chooseCount}</div>
          <div className='select-content'>
            <div onClick = {() => this.minusSelectItem(item)} className = 'minus'></div>
            <div className = 'count'>{item.chooseCount}</div>
            <div onClick = {() => this.addSelectItem(item)} className = 'plus'></div>
          </div>
        </div>
      )
    }) 
  }

  openChooseContent() {
    let flag = this.props.showChooseContent
    this.props.dispatch(showChoose({
      flag: !flag
    }))
  }

  clearCar() {
    this.props.dispatch(clearCar())
    this.props.dispatch(showChoose({
      flag: false
    }))
  }

  render() {
    const shipping_fee = this.props.listData.poi_info ? this.props.listData.poi_info.shipping_fee : 0 
    const data = this.getTotalPrice()
    return (
      <div className = 'shop-bar'>
      {this.props.showChooseContent ? 
      <div className='choose-content'>
        <div className='content-top'>
          <div onClick = {() => this.clearCar()} className='clear-car'>清空购物车</div>
        </div>
        {this.renderChooseItem(data)}
      </div>  : null 
    }
        <div className='bottom-content'>
          <div onClick = {() => this.openChooseContent()} className='shop-icon'>
            {data.dotNum > 0 ? <div className='dot-num'>{data.dotNum}</div> : null}
          </div>
          <div className='price-content'>
            <div className='total-price'>￥{data.totalPrice}</div>
            <div className='other-price'>另需配送 ￥{shipping_fee}</div>
          </div>
          <div className='submit-btn'>去结算</div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    listData: state.menuReducer.listData,
    showChooseContent: state.menuReducer.showChooseContent,
  })
)(ShopBar)