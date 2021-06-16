const { UserModel } = require('../models/users.model')

exports.createUser = (req, res) => {
  UserModel
    .create(req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err))
}

exports.getAllUsers = (req, res) => {
  UserModel
    .find()
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err))
}

exports.getUser = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err))
}

exports.updateUser = (req, res) => {
  UserModel
    .findByIdAndUpdate(req.params.userId, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err))
}

exports.updateProfile = (req, res) => {

}

exports.deleteUser = (req, res) => {
  UserModel
    .findByIdAndDelete(req.params.userId)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err))
}

exports.addFavourite = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      console.log('User: ', user)
      user.favourites.push(req.params.plantId)
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json(user)
      })
    })
    .catch((err) => res.status(500).json(err))
}

exports.getFavourites = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .populate('favourites')
    .then(user => res.status(200).json(user.favourites))
    .catch(err => res.status(500).json(err))
}

exports.deleteFavourite = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      user.favourites.remove(req.params.plantId)
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json(user)
      })
    })
    .catch((err) => res.status(500).json(err))
}
