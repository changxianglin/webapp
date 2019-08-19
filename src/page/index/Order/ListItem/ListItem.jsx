import React, { Component } from 'react'
import './ListItem.scss'

export default class ListItem extends Component {

  renderTotalPrice(data, index) {
    return (
      <div key = {index} className = 'product-item'>
        <span>...</span>
        <div className = 'p-total-count'>
          总计{data.product_count}个菜,实付
          <span className = 'total-price'>￥{data.total}</span>
        </div>
      </div>
    )
  }

  renderProduct(data) {
    let list = data.product_list
    list.push({type: 'more'})

    return list.map((item, index) => {
      if(item.type === 'more') {
        return this.renderTotalPrice(item, data)
      }
      return <div className = 'product-item' key = {index}>{item.product_name}<div className = 'p-count'>x{item.product_count}</div></div>
    })
  }

  renderComment(data) {
    let evaluation = !data.is_comment
    if(evaluation) {
        return (
          <div className = 'evalution clearfix'>
            <div className = 'evalution-btn'>评价</div>
          </div>
        )
    }
    
    return null
  }

  render() {
    let data = this.props.itemData
    return (
      <div className = 'order-item scale-1px'>
        <div className = 'order-item-inner'>
          <img className = 'item-img' src = {data.poi_pic} />
          <div className = 'item-right'>
            <div className = 'item-top'>
              <p className = 'order-name one-line'>{data.poi_name}</p>
              <div className = 'arrow'></div>
              <div className = 'order-state'>{data.status_description}</div>
            </div>
            <div className = 'item-bottom'>
              {this.renderProduct(data)}
            </div>
          </div>
        </div>
        {this.renderComment(data)}
      </div>
    )
  }
}
