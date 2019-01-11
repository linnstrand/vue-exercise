const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 8081))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', api)
app.use(express.static('static'))

app.use(morgan('dev'))

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/gym')
mongoose.connect('mongodb://localhost:27017/gym')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('connected to MongoDB')

  app.listen(8081, () => console.log('Server listening on port ' + app.get('port') + '!'))
})
