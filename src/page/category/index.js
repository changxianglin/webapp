import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';

import Container from './Main/Main.jsx'

import store from './store'

ReactDom.render(
  <Provider store = {store}><Container /></Provider>,
  document.getElementById('root')
)