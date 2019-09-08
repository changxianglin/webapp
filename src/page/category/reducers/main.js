// import { combineReducer } from 'redux'

// import tabReducer from './tabReducer'

// const reducers = combineReducer({
//   tabReducer
// })

// export default reducers

import { combineReducers } from 'redux'

import headerReducer from './headerReducer'
import contentListReducer from './contentListReducer'

const reducers = combineReducers({
  headerReducer,
  contentListReducer,
})

export default reducers