import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavHeader from 'component/NavHeader/NavHeader'
import Header from '../Header/Header'
import ContentList from '../ContenList/ContentList'

import 'component/common.scss'

class Main extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className = 'category'>
        <NavHeader title = '分类' />
        <Header />
        <ContentList />
      </div>
    )
  }
}

export default connect()(Main)