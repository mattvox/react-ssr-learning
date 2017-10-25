import React from 'react'
import { renderRoutes } from 'react-router-config'

import { fetchCurrentUser } from './actions'

import Header from './components/Header'

const App = ({ route }) => (
  <div>
    <Header />
    <div className='container'>
      {renderRoutes(route.routes)}
    </div>
  </div>
)

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
}
