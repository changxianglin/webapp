import { GET_LIST_DATA, LEFT_CLICK } from './actionTypes'
import axios from 'axios'

export const itemClick = (obj) => {
  return {
    type: LEFT_CLICK,
    obj: obj
  }
}

export const getListData = () => async(dispatch) => {
  let resp = await axios({
    method: 'get',
    url: '/json/food.json'
  })

  dispatch({
    type: GET_LIST_DATA,
    obj: resp.data
  })
}