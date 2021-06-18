const mongoose = require('mongoose')
// const { plantSchema } = require('../models/plants.model')

// CROPS MODEL
const cropSchema = new mongoose.Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  size: {
    type: Number,
    required: [true, 'Size of the crop is required']
  },
  numberSectors: {
    type: Number,
    required: [true, 'Number of sectors is required']
  },
  sectors: [{
    rows: {
      plants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'plants'
      }],
      irrigation: {
        type: Number
      },
      lastIrrigation: {
        type: String
      },
      nextIrrigation: {
        type: String
      },
      sown: {
        type: String
      },
      harvest: {
        type: String
      }
    }
  }]
})

const CropModel = mongoose.model('crops', cropSchema)

module.exports = { cropSchema, CropModel }
