import { CHANGEREADYSTATE } from './scrollViewTypes'

const initState = {
  readyToLoad: true
}

const changeState = (state, action) => {
  return {...state, readyToLoad: action.obj}
}

const scrollViewReducer = (state = initState, action) => {
  switch(action.type) {
    case CHANGEREADYSTATE:
      return changeState(state, action)
      return {
        ...state,

      }
    default:
      return state
  }
}

export default scrollViewReducer