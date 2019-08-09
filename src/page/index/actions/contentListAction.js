import axios from 'axios'
import { LIST_DATA } from './actionTypes'

export const getListData = () => (dispatch) => {
  axios({
    method: 'get',
    url: 'json/list.json'
  }).then(resp => {
    dispatch({
      type: LIST_DATA,
      obj: resp.data
    })
  })
}