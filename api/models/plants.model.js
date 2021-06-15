const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  type: {
    type: String,
    enum: ['consumo', 'ornamental'],
    default: 'consumo',
    required: [true, 'Type is required']
  },
  recommendedSown: {
    type: Array,
    required: [true, 'Name is required']
  },

  typeSown: {
    type: String,
    enum: ['Directa', 'De asiento', 'En semillero', '34 semillas por golpe'],
    required: [true, 'Type sown is required']

  },
  germination: {
    type: Number,
    required: [true, 'Name is required']

  },
  repotting: {
    type: [String, Number]
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required']
  },
  irrigation: {
    type: Number,
    required: [true, 'Irrigation is required']
  },
  distanceRequired: {
    type: Number,
    required: [true, 'Distance is required']
  },
  betweenPlants: {
    type: Number,
    required: [true, 'Distance is required']
  },
  plantingDepth: {
    type: Number,
    required: [true, 'Depth is required']
  },
  beneficial: {
    type: [String]
  },
  harmful: {
    type: [String]
  }
})

exports.PlantModel = mongoose.model('plants', plantSchema)
