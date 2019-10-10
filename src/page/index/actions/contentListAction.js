import axios from 'axios'
import { LIST_DATA } from './actionTypes'
import { CHANGEREADYSTATE  } from 'component/ScrollView/scrollViewTypes'

export const getListData = (page) => (dispatch) => {
  dispatch({
    type: CHANGEREADYSTATE,
    obj: false,
  })
  axios({
    method: 'get',
    url: 'json/list.json'
  }).then(resp => {
    dispatch({
      type: LIST_DATA,
      currentPage: page,
      obj: resp.data
    })
    dispatch({
      type: CHANGEREADYSTATE,
      obj: false,
    })
  })
}