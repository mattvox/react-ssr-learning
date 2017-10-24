import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

import reducers from './reducers'

const axiosInstance = axios.create({ baseURL: '/api' })

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(axiosInstance)),
  ),
)

export default store
