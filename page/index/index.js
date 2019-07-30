import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Main from './Main/Main.jsx'

ReactDOM.render(
  <Provider store = {store}><Main /></Provider>,
  document.getElementById('root')
)
