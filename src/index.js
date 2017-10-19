import 'babel-polyfill'
import express from 'express'
import renderer from './helpers/renderer'
import store from './helpers/store'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(renderer(req, store))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => (
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT} \n`)
))
