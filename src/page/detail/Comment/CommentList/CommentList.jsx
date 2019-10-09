import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentItem from './CommentItem/CommentItem'

class CommentList extends Component {
  renderList() {
    const list = this.props.commentList

    return list.map((item, index) => {
      return (<CommentItem key = {index} data = {item}></CommentItem>)
    })
  }

  render() {
    return (
      <div className = 'comment-list'>
        {this.renderList()}
      </div>
    )
  }
}

export default connect(
  state => ({
    commentList: state.commentReducer.commentList,
  })
)(CommentList)