const { PlantModel } = require('../models/plants.model')

exports.createPlant = (req, res) => {
  PlantModel
    .create(req.body)
    .then((plant) => res.status(200).json(plant))
    .catch((err) => res.status(500).json(err))
}

exports.getAllPlants = (req, res) => {
  PlantModel
    .find()
    .then((plants) => res.status(200).json(plants))
    .catch((err) => res.status(500).json(err))
}

exports.getPlant = (req, res) => {
  PlantModel
    .findById(req.params.plantId)
    .then((plant) => res.status(200).json(plant))
    .catch((err) => res.status(500).json(err))
}

exports.getBeneficialPlants = (req, res) => {

}

exports.getHarmfulPlants = (req, res) => {

}

exports.getPlantsByMonth = (req, res) => {

}

exports.updatePlant = (req, res) => {
  PlantModel
    .findByIdAndUpdate(req.params.plantId, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err))
}

exports.deletePlant = (req, res) => {
  PlantModel
    .findByIdAndDelete(req.params.plantId)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err))
}
