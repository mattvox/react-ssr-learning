import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../client/reducers'

const store = createStore(
  reducers,
  /* preloadedState, */
  compose(applyMiddleware(thunk)),
)

export default store
