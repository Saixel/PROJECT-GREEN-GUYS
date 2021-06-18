const plantRouter = require('express').Router()
const { checkAdmin } = require('../controllers/auth.controller')

const {
  createPlant,
  getAllPlants,
  getPlant,
  getBeneficialPlants,
  getHarmfulPlants,
  getPlantsByMonth,
  updatePlant,
  deletePlant
} = require('../controllers/plants.controller')

plantRouter
  .post('/', checkAdmin, createPlant)
  .get('/', getAllPlants)
  .get('/:plantId', getPlant)
  .get('/:plantId/beneficial', getBeneficialPlants)
  .get('/:plantId/harmful', getHarmfulPlants)
  .get('/sown/:month', getPlantsByMonth)
  .put('/:plantId', checkAdmin, updatePlant)
  .delete('/:plantId', checkAdmin, deletePlant)

exports.plantRouter = plantRouter
