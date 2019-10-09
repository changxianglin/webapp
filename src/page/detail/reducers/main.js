import { combineReducers } from 'redux'

import tabReducer from './tabReducer'
import menuReducer from './menuReducer'
import commentReducer from './commentReducer'
import restanurantReducer from './restanurantReducer'

const reducers = combineReducers({
  tabReducer,
  menuReducer,
  commentReducer,
  restanurantReducer,
})

export default reducers