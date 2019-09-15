import React from 'react'

import './Main.scss'

import NavHeader from 'component/NavHeader/NavHeader.jsx'


class Main extends React.Component {
  constructor(props) {
    super(props)

    this.maxCount = 140

    this.state = {
      count: this.maxCount,
      startIndex: 0,
    }
  }

  componentDidMount() {
    this.commentInput.addEventListener('compositionstart', () => {
      this.chineseInputing = true
    })

    this.commentInput.addEventListener('compositionend', (e) => {
      this.chineseInputing = false
      this.onInput(e.target.value)
    })
  }

  onInput(value) {
    let num = value.length
    if(!this.chineseInputing) {
      this.setState({
        count: this.maxCount - num
      })
    }
  }

  doEva(i) {
    this.setState({
      startIndex: i + 1,
    })
  }

  renderStar() {
    let array = []

    for(let i = 0; i < 5; i++) {
      let cls = i >= this.state.startIndex ?  'star-item' : 'start-item light'
      array.push(<div onClick = {() => this.doEva(i)} key = {i} className = {cls}></div>)
    }

    return array 
  } 

  render() { 
    return ( 
    <div className = 'content'> <NavHeader title = '评价' /> <div className = 'eva-content'><div className = 'star-area'>
            {this.renderStar()}
      </div>
        <div className = 'comment'>
          <textarea ref = {(ref) => {this.commentInput = ref}} onChange = {(e) => this.onInput(e.target.value)} maxLength = '140' placeholder = '亲,菜品的味道如何，商机网少的发舒服点.' className = 'comment-input'></textarea>
          <span className = 'count'>{this.state.count}</span>
        </div>
          <p className = 'one-line product-name'>+1243哦啊设计的佛啊惊世毒妃</p>
        </div>
        <div className = 'submit'>提交评价</div>
      </div>
    )
  }
}

export default Main