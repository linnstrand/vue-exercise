const express = require('express')
const app = express()
const api = require('./api')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// start api with express
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

// connect to database
const mongoose = require('mongoose')
const Exercise = require('./models/exercise')
const seeds = require('./workouts')
// mongoose.connect('mongodb://localhost:27017/gym')
mongoose.connect('mongodb://localhost:27017/gym')

const connection = mongoose.connection

connection.on('error', console.error.bind(console, 'connection error:'))
connection.once('open', () => {
  console.log('connected to MongoDB')

  // seed if needed
  connection.db.listCollections({ name: 'exercises' }).next((err, result) => {
    if (err) console.log('Database error ' + err)
    if (!result) {
      console.log('Starting seeding.')
      let exercises = seeds.map(w => w.exercises)
        .reduce((acc, curr) => acc.concat(curr))
      exercises.forEach(e => {
        let exercise = new Exercise(e)
        // console.log(exercise.name)
        exercise.save((err, result) => {
          if (err) {
            console.log('Seeding error: ' + err)
          } else {
            console.log(`Saved exercise ${result.name}`)
          }
        })
      })
    }
  })

  app.listen(8081, () => console.log('Server listening on port ' + app.get('port') + '!'))
})
