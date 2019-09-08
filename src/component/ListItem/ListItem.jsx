import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getListData } from '../../actions/contentListAction'

import './ListItem.scss'

class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  renderBrand(data) {
    if(data.brand_type) {
      return <div className = 'brand brand-pin'>品牌</div>
    } else {
      return <div className = 'brand brand-xin'>新到</div>
    }
  }

  renderScore(data) {
    let wm_poi_score = data.wm_poi_score || ''

    let score = wm_poi_score.toString()

    let scoreArray = score.split('.')

    let fullstar = parseInt(scoreArray[0])

    let halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0

    let nullstar = 5 - fullstar - halfstar

    let starjsx = [<div key = {'xx'}>{score}</div>]

    for(let i = 0; i < fullstar; i++) {
      starjsx.push(<div key = {i + 'full'} className = 'star fullstar'></div>)
    }

    if(halfstar) {
      for(let j = 0; j < halfstar; j++) {
        starjsx.push(<div key = {j + 'half'} className = 'star halfstar'></div>)
      }
    }

    if(nullstar) {
      for(let k = 0; k < nullstar; k++) {
        starjsx.push(<div key = {k + 'null'} className = 'star nullstar'></div>)
      }
    }

    return starjsx
  }

  renderMonthNum(data) {
    let num = data.moth_sale_num

    if(num > 999) {
      return '999+'
    }

    return num
  }

  renderMeituanFlag(data) {
    if(data.delivery_type) {
      return <div className = 'item-meituan-flag'>美团专送</div>
    }

    return null 
  }

  renderOthers(data) {
    let array = data.discounts2
    return array.map((item, index) => {
      return (
        <div className = 'other-info' key = {index}>
          <img src = {item.icon_url} className = 'other-tag' />
          <div className = 'other-content'>{item.info}</div>
        </div>
      )
    })
  }
 
  render() {
    let data = this.props.itemData
    return (
      <div className = 'r-item-content scale-1px'>
        <img className = 'item-img' src = {data.pic_url} />
        {this.renderBrand(data)}
        <div className = 'item-info-content'>
          <p className = 'item-title'>{data.name}</p>
          <div className = 'item-desc clearfix'>
            <div className = 'item-score'>{this.renderScore(data)}</div>
            <div className = 'item-count'>月售{this.renderMonthNum(data)}</div>
            <div className = 'item-distance'>&nbsp;{data.distance}</div>
            <div className = 'item-time'>{data.mt_delivery_time}&nbsp;|</div>
          </div>
          <div className = 'item-price'>
            <div className = 'item-pre-price'>{data.min_price_tip}</div>
            {this.renderMeituanFlag(data)}
          </div>
          <div className = 'item-others'>
            {this.renderOthers(data)}
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