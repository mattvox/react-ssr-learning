import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'

import renderer from './helpers/renderer'
import store from './helpers/store'
import routes from './client/routes'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const promises = matchRoutes(routes, req.path).map(({ route }) => (
    route.loadData ? route.loadData(store) : null
  ))

  Promise.all(promises).then(() => {
    res.send(renderer(req, store))
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => (
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT} \n`)
))
