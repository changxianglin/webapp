import React, { Component } from 'react'
import StarScore from 'component/StarScore/StarScore'

import './Comment.scss'

export default class Comment extends Component {
  render() {
    return (
      <div className = 'comment-inner'>
        <div className = 'comment-score'>
          <div className = 'mail-score-content'>
            <div className = 'mail-score'>5.0</div>
            <div className = 'mail-text'>商家评价</div>
          </div>
          <div className = 'other-score-content'>
            <div className = 'taste-score'>
              <div className = 'taste-text'>口味</div>
              <div className = 'taste-star-wrap'><StarScore score = {4.5} /></div>
              <div className = 'taste-score-text'>4.7</div>
            </div>
            <div className = 'package-score'>
              <div className = 'package-text'>口味</div>
              <div className = 'package-star-wrap'><StarScore score = {4.5} /></div>
              <div className = 'package-score-text'>4.2</div>
            </div>
          </div>
          <div className = 'send-score-content'>
            <div className = 'send-score'>5.0</div>
            <div className = 'send-text'>商家评价</div>
          </div>
        </div>
      </div>
    )
  }
}
