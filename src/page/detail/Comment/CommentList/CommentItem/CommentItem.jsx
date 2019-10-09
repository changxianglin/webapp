import React, { Component } from 'react'
import { connect } from 'react-redux'
import StarScore from 'component/StarScore/StarScore'

import './CommentItem.scss'

class CommentItem extends Component {
  renderImgs(item) {
    const imgs = item.comment_pics || []

    if(imgs.length) {
      return (
        <div className = 'img-content'>
        {imgs.map((ite, index) => {
          let src = ite.url
          let style = {
            backgroundImage: 'url(' + src + ')'
          }  
          return <div key = {index} style = {style} className = {'img-item'}></div>
        })}
        </div>
      )
    } else {
      return null
    }
  }

  renderTags(lable) {
    return lable.map((item) => {
      return item.content + ','
    })
  }

  formatTime(time) {
    const date = new Date(Number(time + '000'))

    return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate()
  }

  render() { 
    const item = this.props.data
    return (
      <div className = 'comment-item'>
          <div className = 'comment-time'>{this.formatTime(item.comment_time)}</div>
          <img className = 'avatar' src = {item.user_pic_url || '//upload.jianshu.io/users/upload_avatars/942697/24264bb1eb61.gif?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp'} />
          <div className = 'item-right'>
            <p className = 'nickname'>{item.user_name}</p>
            <div className = 'star-and-time'>
              <div className = 'star-content'>
                <StarScore score = {item.order_comment_score} />
                <div className = 'send-time'>{item.ship_time + '分钟送达'}</div>
              </div>
              <div className = 'comment-text'>{item.comment}</div>
              {this.renderImgs(item)}
              {item.praise_food_tip ? <div className = 'like-info'>{item.praise_food_tip}</div> : null}
              {item.comment_labels.length ? <div className = 'tag-info'>{this.renderTags(item.comment_labels)}</div> : null}
            </div>
          </div>
      </div>
    )
  }
}

export default connect()(CommentItem)