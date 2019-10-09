import { combineReducers } from 'redux'

import tabReducer from './tabReducer'
import menuReducer from './menuReducer'
import commentReducer from './commentReducer'

const reducers = combineReducers({
  tabReducer,
  menuReducer,
  commentReducer,
})

export default reducers