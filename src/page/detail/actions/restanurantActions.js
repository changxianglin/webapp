import { 
  RESTANURANT_DATA,
 } from './actionTypes'
import axios from 'axios'

export const getRestanurantData = () => async(dispatch) => {
  let resp = await axios({
    method: 'get',
    url: '/json/restanurant.json'
  })

  dispatch({
    type: RESTANURANT_DATA,
    obj: resp.data
  })
}

