import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import mainReducer from './reducers/main.js'

// import createHistory from 'history/createHashHistory'
import { createHashHistory as createHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'

const history = createHistory()

// install tab
history.replace('home')

const historyMiddl = routerMiddleware(history)

const store = createStore(mainReducer, applyMiddleware(thunk, historyMiddl))

if(module.hot) {
  module.hot.accept('./reducers/main', () => {
    const nextRootReducer = require('./reducers/main').default
    store.replaceReducer(nextRootReducer)
  })
}

module.exports = {
  store,
  history,
}