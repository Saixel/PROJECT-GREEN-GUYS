const potRouter = require('express').Router()

const {
  createPot,
  addPlantPot,
  getAllPots,
  getPot,
  updatePot,
  deletePot,
  deletePlantPot
} = require('../controllers/pots.controller')

potRouter
  .post('/users/:userId/pots', createPot)
  .post('/users/:userId/pots/:potId/:plantId', addPlantPot)
  .get('/users/:userId/pots', getAllPots)
  .get('/users/:userId/pots/:potId', getPot)
  .put('/users/:userId/pots/:potId', updatePot)
  .delete('/users/:userId/pots/:potId', deletePot)
  .delete('/users/:userId/pots/:potId/plants/:plantId', deletePlantPot)

exports.potRouter = potRouter
