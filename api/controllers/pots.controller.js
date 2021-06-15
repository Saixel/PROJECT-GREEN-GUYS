const { PotModel } = require('../models/pots.model')

exports.createPot = (req, res) => {
  PotModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
}

exports.addPlantPot = (req, res) => {
  PotModel
    .find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.json(err))
}

exports.getAllPots = (req, res) => {
  PotModel
    .findById(req.params.userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.json(err))
}

exports.getPot = (req, res) => {
  PotModel
    .findByIdAndUpdate(req.params.userId, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}

exports.updatePot = (req, res) => {
  PotModel
    .findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}

exports.deletePot = (req, res) => {
  PotModel
    .findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}

exports.deletePlantPot = (req, res) => {
  PotModel
    .findByIdAndDelete(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}
