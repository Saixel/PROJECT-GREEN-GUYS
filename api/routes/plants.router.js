const plantRouter = require('express').Router()

const {
  createPlant,
  getAllPlants,
  getPlant,
  // getBeneficialPlants,
  // getHarmfulPlants,
  // getPlantsByMonth,
  updatePlant,
  deletePlant
} = require('../controllers/plants.controller')

plantRouter
  .post('/', createPlant)
  .get('/', getAllPlants)
  .get('/:plantId', getPlant)
  // .get('/:plantId/beneficial', getBeneficialPlants)
  // .get('/:plantId/harmful', getHarmfulPlants)
  // .get('/plants/sown/:month', getPlantsByMonth)
  .put('/:plantId', updatePlant)
  .delete('/:plantId', deletePlant)

exports.plantRouter = plantRouter
