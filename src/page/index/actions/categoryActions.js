import axios from 'axios'
import { HEAD_DATA } from './actionTypes'

export const getHeaderData = () => (dispatch) => {
  axios({
    method: 'get',
    url: 'json/header.json'
  }).then(resp => {
    dispatch({
      type: HEAD_DATA,
      obj: resp.data
    })
  })
}