import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className = 'header'>
        <SearchBar />
        <img className = 'banner-img' src = '//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg' />
      </div>
    )
  }
}