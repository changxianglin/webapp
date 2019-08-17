import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <div className = 'header'>
        <SearchBar />
        <img className = 'banner-img' src = '//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' />
      </div>
    )
  }
}
