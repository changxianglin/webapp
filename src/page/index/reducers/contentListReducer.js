import { LIST_DATA } from '../actions/actionTypes'

const initState = {
  list: []
}

const getListData = (state, action) => {
  return {...state, list: action.obj.data.primary_filter}
}

const contentListReducer = (state = initState, action) => {
  switch(action.type) {
    case LIST_DATA:
      return getListData(state, action)
    default:
      return state
  }
}

export default contentListReducer