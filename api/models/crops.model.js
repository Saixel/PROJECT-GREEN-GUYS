const mongoose = require('mongoose')

// const { PotModel } = require('../models/users.model')
// const { CropModel } = require('../models/users.model')

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
    type: Number
  },
  sectors: [
    {
      rows: {
        plants: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'plants',
          required: [true, 'The plant is required']
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
        sown: {
          type: String
        },
        harvest: {
          type: String
        }
      }
    }
  ]
})

exports.CropModel = mongoose.model('crops', cropSchema)
