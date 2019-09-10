import React from 'react'

import './Main.scss'

import NavHeader from 'component/NavHeader/NavHeader.jsx'


class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className = 'content'>
        <NavHeader title = '评价' />
        <div className = 'eva-content'>
          <div className = 'star-area'>

          </div>
          <div className = 'comment'>
            <textarea maxLength = '140' placeholder = '亲,菜品的味道如何，商机网少的发舒服点.' className = 'comment-input'></textarea>
          </div>
          <p className = 'one-line product-name'>+1243哦啊设计的佛啊惊世毒妃</p>
        </div>
        <div className = 'submit'>提交评价</div>
      </div>
    )
  }
}

export default Main