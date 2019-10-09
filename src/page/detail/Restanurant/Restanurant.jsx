import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getRestanurantData } from '../actions/restanurantActions'

class Restanurant extends Component {
  constructor(props) {
    super(props)
    this.props.dispatch(getRestanurantData())
  }

  renderPayType(types) {
    let array = types || []

    return array.map((item, index) => {
      return <p key = {index} className = 'restanurant-pay-type'><img src = {item.icon_url} />{item.icon_info}</p>
    })
  }

  render() {
    const data = this.props.resData
    return (
      <div className = 'restanurant-content'>
        <div className = 'restanurant-basic'>
          <p className = 'restanurant-tel'>{data.call_center}</p>
          <p className = 'restanurant-addr'>
            <div className = 'addr-arao'>
              <div className = 'addr-name'>商家地址：</div>
              <p className = 'add-text'>{data.address}</p>
            </div>
          </p>
        </div>
        <div className = 'restanurant-basic'>
          <p className = 'restanurant-send-time'>配送时间: {data.shipping_time}</p>
          <p className = 'restanurant-send-type'>配送服务: {data.delivery_type === 1 ? <span><span className = 'meituan-send'>美团专送</span>提供高质量配送服务</span> : '商家配送'}</p>
        </div>
        <div className = 'restanurant-basic'>
            {this.renderPayType(data.discounts2)}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    resData: state.restanurantReducer.resData,
  })
)(Restanurant)