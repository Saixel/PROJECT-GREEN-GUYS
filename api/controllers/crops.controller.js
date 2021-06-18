const { UserModel } = require('../models/users.model')

// CROPS CONTROLLERS
exports.createCrop = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      user.crops.push(req.body.crops)
      user.save(err => {
        if (err) return console.log.error('Error: ', err)
        res.status(200).json({
          id: user._id,
          name: user.name,
          email: user.email,
          crops: user.crops
        })
      })
    })
    .cath((err) => res.status(500).json(err))
}

exports.addPlantCrop = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      const crop = user.crops.id(req.params.cropId)
      crop.plants.push(req.params.cropId)
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json({
          id: user._id,
          name: user.name,
          email: user.email,
          crops: user.crops
        })
      })
    })
    .catch((err) => res.status(500).json(err))
}

exports.getAllCrops = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => res.status(200).json(user.crops))
    .catch((err) => res.status(500).json(err))
}

exports.getCrop = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => res.status(200).json(user.crops.id(user.cropId)))
    .catch((err) => res.status(500).json(err))
}

exports.deleteCrop = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      user.crops.remove(user.crops.id(req.params.cropId))
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json({
          id: user._id,
          name: user.name,
          email: user.email,
          pots: user.pots
        })
      })
    })
    .catch((err) => res.status(500).json(err))
}

exports.deletePlantCrop = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      const crop = user.crops.id(req.params.cropId)
      crop.plants.remove(req.params.plantId)
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json({
          id: user._id,
          name: user.name,
          email: user.email,
          pots: user.pots
        })
      })
    })
    .catch((err) => res.status(500).json(err))
}
