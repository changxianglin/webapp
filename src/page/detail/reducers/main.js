import { combineReducers } from 'redux'

import tabReducer from './tabReducer'
import menuReducer from './menuReducer'

const reducers = combineReducers({
  tabReducer,
  menuReducer
})

export default reducers