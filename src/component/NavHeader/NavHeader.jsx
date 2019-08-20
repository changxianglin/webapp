import React, { Component } from 'react'
import './NavHeader.scss'

export default class NavHeader extends Component {
  render() {
    return (
      <div className = 'nav'>
        <div className = 'back-icon'></div>
        <h4 className = 'title'>{this.props.title}</h4>
      </div>
    )
  }
}
