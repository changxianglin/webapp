import { combineReducers } from 'redux'

import tabReducer from './tabReducer'
import categoryReducer from './categoryReducer'

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
})

export default reducers