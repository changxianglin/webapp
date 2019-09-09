import axios from 'axios'
import { GET_LIST_DATA } from './actionTypes'

export const getListData = (obj) => async (dispatch, getState) => {
  let url = '/json/list.json'
  if(obj.filterData || getState().contentListReducer.filterData) {
    url = '/json/listparams.json'
  }
  let resp =  await axios({
    method: 'get',
    url: url
  })

  dispatch({
    type: GET_LIST_DATA,
    currentPage: obj.filterData,
    toFirstPage: obj.toFirstPage,
    obj: resp.data
  })
}