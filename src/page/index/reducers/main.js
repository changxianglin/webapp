import { combineReducers } from 'redux'

import tabReducer from './tabReducer'
import categoryReducer from './categoryReducer'
import contentListReducer from './contentListReducer'
import orderReducer from './orderReducer'
import scrollViewReducer from 'component/ScrollView/scrollViewReducer'

import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  tabReducer,
  categoryReducer,
  contentListReducer,
  orderReducer,
  scrollViewReducer,
  router: routerReducer
})

export default reducers