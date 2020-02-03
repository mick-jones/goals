import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './redux/reducers'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
