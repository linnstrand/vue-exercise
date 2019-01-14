const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
  name: { type: String, required: true },
  mainMuscle: String,
  equipment: String
})

const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = Exercise
