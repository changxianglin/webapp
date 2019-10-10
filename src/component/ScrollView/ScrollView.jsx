import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from 'component/Loading/Loading.jsx'

import './ScrollView.scss'

class ScrollView extends Component {
    constructor(props) {
      super(props)

      this._onLoadPage = this.onLoadPage.bind(this)
    }

    onLoadPage() {
      let clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.body.scrollHeight
      let scrollTop = document.documentElement.scrollTop

      let proLoadDis = 30

      if((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {

        if(!this.props.isend) {
          if(!this.props.readyToLoad) {
            return 
          }
          this.props.loadCallback && this.props.loadCallback()
        }
        
    }
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('scroll', this._onLoadPage)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onLoadPage)
  }

  render() {
    return (
      <div className = 'scrollview'>
        {this.props.children}
        <Loading isend = {this.props.isend} />
      </div>
    )
  }
}

export default connect(
  state => ({
    readyToLoad: state.scrollViewReducer.readyToLoad
  })
)(ScrollView)