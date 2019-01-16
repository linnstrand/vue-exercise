const mongoose = require('mongoose')

const Schema = mongoose.Schema
const EquipmentSchema = new Schema({
  name: { type: String, required: true, unique: true }
})

const Equipment = mongoose.model('Equipment', EquipmentSchema)

module.exports = Equipment
