import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from '../client/reducers'

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' },
  })

  const store = createStore(
    reducers,
    /* preloadedState, */
    compose(applyMiddleware(thunk.withExtraArgument(axiosInstance))),
  )

  return store
}
