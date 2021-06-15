const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  type: {
    type: String,
    enum: ['consumo', 'ornamental'],
    default: 'consumo'
  },
  recommendedSown: [{
    type: Number,
    required: [true, 'Recommended sown is required']
  }],
  typeSown: {
    type: String,
    enum: ['Directa', 'De asiento', 'En semillero', '34 semillas por golpe']
  },
  germination: {
    type: Number,
    required: [true, 'Name is required']
  },
  repotting: [String, Number],
  capacity: {
    type: Number,
    required: [true, 'Capacity is required']
  },
  irrigation: {
    type: Number,
    required: [true, 'Irrigation is required']
  },
  distanceRequired: {
    type: Number
  },
  betweenPlants: {
    type: Number
  },
  plantingDepth: {
    type: Number
  },
  beneficial: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'plants'
  }],
  harmful: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'plants'
  }]
})

const PlantModel = mongoose.model('plants', plantSchema)

module.exports = { plantSchema, PlantModel }
