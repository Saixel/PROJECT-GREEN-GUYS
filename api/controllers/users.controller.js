const { UserModel } = require('../models/users.model')

exports.createUser = (req, res) => {
  UserModel
    .create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err))
}

exports.getAllUsers = (req, res) => {
  UserModel
    .find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.json(err))
}

exports.getUser = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.json(err))
}

exports.updateUser = (req, res) => {
  UserModel
    .findByIdAndUpdate(req.params.userId, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}

exports.deleteUser = (req, res) => {
  UserModel
    .findByIdAndDelete(req.params.userId)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json(err))
}
