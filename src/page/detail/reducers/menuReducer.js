import { GET_LIST_DATA } from '../actions/actionTypes'

const initState = {
  listData: {}
}

const getListData = (state, action) => {
  return {...state, listData: action.obj.data}
}

const menuReducer = (state = initState, action) => {
  switch(action.type) {
    case GET_LIST_DATA:
      return getListData(state, action)
    default: 
      return state
  }
}

export default menuReducer