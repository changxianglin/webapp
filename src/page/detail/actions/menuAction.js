import { GET_LIST_DATA } from './actionTypes'
import axios from 'axios'

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