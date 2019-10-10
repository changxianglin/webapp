import axios from 'axios'
import { HEAD_DATA } from './actionTypes'

export const getHeaderData = () => async (dispatch) => {

  let resp = await axios({
    method: 'get',
    url: 'json/header.json'
  })

  // let resp = await axios({
  //   method: 'post',
  //   url: 'http://localhost:5000/api',
  //   data: {
  //     url: 'https://i.waimai.meituan.com/openh5/homepage/poilist?_=1570688232611&X-FOR-WITH=zXyODZi0uQUGSxgxu0W6WgdHos%2BO7Y4TcJ4iQBc8UCIfwDxsNGsxJCcbU7Pz4sBvbOJpjSpqEq2IOt9C%2F9QHgr9d%2Bb94bYdYPqnbM0HJZnK3V6ixqL2lnR%2BGJoXOHBIQan7ZJHRzN1Tvjq6iPCoyHQ%3D%3D',
  //     params: {
  //       not_need_primary_filter: false,
  //       userid: 280770501
  //     }
  //   }
  // })

  dispatch({
    type: HEAD_DATA,
    obj: resp.data
  })
}