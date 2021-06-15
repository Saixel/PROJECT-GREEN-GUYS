const { CropModel } = require('../models/crops.model')

exports.createCrop = (req, res) => {
  CropModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
}

exports.addPlantCrop = (req, res) => {
  CropModel
    .find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.json(err))
}

exports.getAllCrops = (req, res) => {
  CropModel
    .findById(req.params.userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.json(err))
}

exports.getCrop = (req, res) => {
  CropModel
    .findByIdAndUpdate(req.params.userId, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}

exports.updateCrop = (req, res) => {
  CropModel
    .findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}

exports.deleteCrop = (req, res) => {
  CropModel
    .findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}

exports.deletePlantCrop = (req, res) => {
  CropModel
    .findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}
