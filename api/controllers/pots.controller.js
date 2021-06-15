const { PotModel } = require('../models/pots.model')
const { UserModel } = require('../models/users.model')

exports.createPot = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      console.log('BODY:', req.body.pots)
      user.pots.push(req.body.pots)
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json(user)
      })
    })
    .catch((err) => res.status(500).json(err))
}

exports.addPlantPot = (req, res) => {

}

exports.getAllPots = (req, res) => {

}

exports.getPot = (req, res) => {

}

exports.updatePot = (req, res) => {

}

exports.deletePot = (req, res) => {

}

exports.deletePlantPot = (req, res) => {

}
