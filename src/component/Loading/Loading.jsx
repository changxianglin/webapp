import React, { Component } from 'react'
import './loading.scss'

export default class loading extends Component {
  render() {
    let str = '加载中'
    if(this.props.isend) {
      str = '已完成'
    }
    return <div className = 'loading'>{str}</div>
  }
}
