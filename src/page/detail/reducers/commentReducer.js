import { COMMENT_LIST_DATA } from '../actions/actionTypes'

const initState = {
  commentData: {},
  commentList: []
}

const getListData =  (state, action) => {

  return {...state, commentData: action.obj.data, commentList: action.obj.data.comments}
}

const commentReducer = (state = initState, action) => {
  switch(action.type) {
    case COMMENT_LIST_DATA:
      return getListData(state, action)
    default:
      return state
  }
}

export default commentReducer