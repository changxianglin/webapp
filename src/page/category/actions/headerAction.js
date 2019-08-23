import { CHANGE_TAB } from './actionTypes'

export const changeTab = (obj) => (dispatch) => {
  dispatch({
    type: CHANGE_TAB,
    obj: obj
  })
}