import axios from 'axios'
import { GET_LIST_DATA } from './actionTypes'

export const getListData = (page) => (dispatch) => {
  axios({
    method: 'get',
    url: 'json/list.json'
  }).then(resp => {
    dispatch({
      type: GET_LIST_DATA,
      currentPage: page,
      obj: resp.data
    })
  })
}