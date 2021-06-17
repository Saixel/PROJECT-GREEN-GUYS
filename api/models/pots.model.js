const mongoose = require('mongoose')

const { plantSchema } = require('../models/plants.model')

const potSchema = new mongoose.Schema({
  name: {
    type: String
  },
  totalCapacity: {
    type: Number,
    required: [true, 'Capacity is required']
  },
  leftCapacity: {
    type: Number
  },
  terrain: {
    type: String
  },
  irrigation: {
    type: Number
  },
  lastIrrigation: {
    type: String
  },
  nextIrrigation: {
    type: String
  },
  plants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'plants'
  }]
})

const PotModel = mongoose.model('pots', potSchema)

module.exports = { potSchema, PotModel }
