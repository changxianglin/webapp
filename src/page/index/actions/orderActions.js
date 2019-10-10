import axios from 'axios'
import { ORDER_DATA } from './actionTypes'
import { CHANGEREADYSTATE } from 'component/ScrollView/scrollViewTypes'

export const getOrderData = (page) => (dispatch) => {
  dispatch({
    type: CHANGEREADYSTATE,
    obj: false,
  })

  axios({
    method: 'get',
    url: 'json/orders.json'
  }).then(resp => {
    dispatch({
      type: ORDER_DATA,
      currentPage: page,
      obj: resp.data
    })
    dispatch({
      type: CHANGEREADYSTATE,
      obj: true,
    })
  })
}