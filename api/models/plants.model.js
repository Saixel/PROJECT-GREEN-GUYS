const mongoose = require('mongoose')

// PLANTS MODEL
const plantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Plant name is required'],
    unique: [true, 'The plant already exists']
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
  harvest: {
    type: Number,
    required: [true, 'Harvest is required']
  },
  typeSown: {
    type: String,
    enum: ['Directa', 'De asiento', 'En semillero', '34 semillas por golpe']
  },
  germination: Number,
  repotting: String,
  capacity: {
    type: Number,
    required: [true, 'Capacity is required']
  },
  irrigation: {
    type: Number,
    required: [true, 'Irrigation is required']
  },
  distanceRows: Number,
  distanceOthersPlants: Number,
  distancebBetweenPlants: Number,
  plantingDepth: Number,
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
