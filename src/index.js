import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import routes from './client/routes'

const app = express()

const options = {
  proxyReqOptDecorator(opts) {
    // eslint-disable-next-line no-param-reassign
    opts.headers['x-forwarded-host'] = 'localhost:3000'
    return opts
  },
}

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', options))
app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(req)

  const promises = matchRoutes(routes, req.path).map(({ route }) => (
    route.loadData ? route.loadData(store) : null
  ))

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    context.notFound && res.status(404)

    res.send(content)
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => (
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT} \n`)
))
