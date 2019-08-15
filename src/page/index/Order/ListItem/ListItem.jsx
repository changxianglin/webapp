import React, { Component } from 'react'
import './ListItem.scss'

export default class ListItem extends Component {

  renderProduct() {

  }

  renderComment() {

  }

  render() {
    let data = this.props.itemData
    return (
      <div className = 'order-item scale-1px'>
        <div className = 'order-item-inner'>
          <img className = 'item-img' src = {data.poi_pic} />
          <div className = 'item-right'>
            <div className = 'item-top'>
              <p className = 'order-name'>XX</p>
              <div className = 'arrow'></div>
              <div className = 'order-state'>xx</div>
            </div>
            <div className = 'item-bottom'>
              {this.renderProduct()}
            </div>
          </div>
        </div>
        {this.renderComment()}
      </div>
    )
  }
}
