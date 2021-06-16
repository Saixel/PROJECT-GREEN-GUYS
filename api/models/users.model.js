const mongoose = require('mongoose')

const { potSchema } = require('../models/pots.model')
const { cropSchema } = require('../models/crops.model')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)
      }
    },
    unique: [true, 'This email is registered']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    enum: ['member', 'seller', 'admin'],
    required: false,
    default: 'member'
  },
  favourites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'plants'
  }],
  pots: [potSchema],
  crops: [cropSchema]
})

exports.UserModel = mongoose.model('users', userSchema)
