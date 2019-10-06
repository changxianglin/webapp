import React, { Component } from 'react'
import './MenuItem.scss'

class MenuItem extends Component {
  render() {
    let item = this.props.data
    return (
      <div className = 'menu-item'>
        <img className = 'img' src = {item.picture} />
        <div className = 'menu-item-right'>
          <p className = 'item-title'>{item.name}</p>
          <p className = 'item-desc two-line'>{item.description}</p>
          <p className = 'item-zan'>{item.praise_content}</p>
          <p className = 'item-price'>￥{item.min_price}/<span className = 'unit'>{item.unit}</span></p>
        </div>
        <div className = 'select-content'>
          <div className = 'plus'></div>
        </div>
      </div>
    )
  }
}

export default MenuItem