import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentList extends Component {
  renderList() {
    const list = this.props.commentList

    return list.map((item, index) => {
      return (<div key = {index}>{item.comment}</div>)
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