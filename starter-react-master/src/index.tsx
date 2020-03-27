import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import App from './modules/app'
import * as serviceWorker from './serviceWorker'
import store from './logic/helpers/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
