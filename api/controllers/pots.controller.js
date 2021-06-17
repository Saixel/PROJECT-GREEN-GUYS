// const { PotModel } = require('../models/pots.model')
// const { PlantModel } = require('../models/plants.model')
const { UserModel } = require('../models/users.model')

exports.createPot = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      user.pots.push(req.body.pots)
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json(user)
      })
    })
    .catch((err) => res.status(500).json(err))
}

exports.addPlantPot = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      const pot = user.pots.id(req.params.potId)
      pot.plants.push(req.params.plantId)
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json(user)
      })
    })
    .catch((err) => res.status(500).json(err))
}

exports.getAllPots = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => res.status(200).json(user.pots))
    .catch((err) => res.status(500).json(err))
}

exports.getPot = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => res.status(200).json(user.pots.id(req.params.potId)))
    .catch((err) => res.status(500).json(err))
}

exports.deletePot = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      user.pots.remove(user.pots.id(req.params.potId))
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json(user)
      })
    })
    .catch((err) => res.status(500).json(err))
}

exports.deletePlantPot = (req, res) => {
  UserModel
    .findById(req.params.userId)
    .then(user => {
      const pot = user.pots.id(req.params.potId)
      pot.plants.remove(req.params.plantId)
      user.save(err => {
        if (err) return console.error('Error: ', err)
        res.status(200).json(user)
      })
    })
    .catch((err) => res.status(500).json(err))
}

// exports.addPlantPot = (req, res) => {
//   UserModel
//     .findById(req.params.userId)
//     .then(user => {
//       PlantModel
//         .findById(req.params.plantId)
//         .then(plant => {
//           const pot = user.pots.id(req.params.potId)
//           pot.plants.push(plant)
//           user.save(err => {
//             if (err) return console.error('Error: ', err)
//             res.status(200).json(user)
//           })
//         })
//         .catch((err) => res.status(500).json(err))
//     })
//     .catch((err) => res.status(500).json(err))
// }
