const mongoose = require('mongoose')

const potSchema = new mongoose.Schema({
  name: {
    type: String
  },
  totalCapacity: {
    type: Number,
    required: [true, 'Capacity us required']
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
  fertilizer: {
    type: String
  },
  lastFertilized: {
    type: String
  },
  nextFertilized: {
    type: String
  },
  plants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'plants'
    }
  ]
  // pots: [potSchema],
  // crops: [cropSchema]
})

exports.PotModel = mongoose.model('pots', potSchema)
