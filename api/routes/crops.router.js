const cropRouter = require('express').Router()

const {
  createCrop,
  addPlantCrop,
  getAllCrops,
  getCrop,
  updateCrop,
  deleteCrop,
  deletePlantCrop
} = require('../controllers/crops.controller')

cropRouter
  .post('/users/:userId/crops', createCrop)
  .post('/users/:userId/crops/:cropId/:plantId', addPlantCrop)
  .get('/users/:userId/crops', getAllCrops)
  .get('/users/:userId/crops/:cropId', getCrop)
  .put('/users/:userId/crops/:cropId', updateCrop)
  .delete('/users/:userId/crops/:cropId', deleteCrop)
  .delete('/users/:userId/crops/:cropId/plants/:plantId', deletePlantCrop)

exports.cropRouter = cropRouter
