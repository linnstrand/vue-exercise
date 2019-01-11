const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: { type: String, required: true },
  mainMuscle: String,
  equipment: String,
  exercises: Array
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
