import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import mainReducer from './reducers/main.js'

const store = createStore(mainReducer, applyMiddleware(thunk))

if(module.hot) {
  module.hot.accept('./reducers/main', () => {
    const nextRootReducer = require('./reducers/main').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store