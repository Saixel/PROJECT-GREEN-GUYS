const userRouter = require('express').Router()

const { checkAdmin } = require('../controllers/auth.controller')

const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  updateProfile,
  deleteUser,
  addFavourite,
  getFavourites,
  deleteFavourite
} = require('../controllers/users.controller')

const {
  createPot,
  addPlantPot,
  getAllPots,
  getPot,
  updatePot,
  deletePot,
  deletePlantPot
} = require('../controllers/pots.controller')

const {
  createCrop,
  addPlantCrop,
  getAllCrops,
  getCrop,
  updateCrop,
  deleteCrop,
  deletePlantCrop
} = require('../controllers/crops.controller')

userRouter
  // USERS CONTROLERS
  .post('/', checkAdmin, createUser)
  .get('/', checkAdmin, getAllUsers)
  .get('/:userId', checkAdmin, getUser)
  .put('/:userId', checkAdmin, updateUser)
  .put('/me', updateProfile)
  .delete('/:userId', checkAdmin, deleteUser)
  // FAVOURITES CONTROLERS
  .post('/:userId/favourites/:plantId', addFavourite)
  .get('/:userId/favourites', getFavourites)
  .delete('/:userId/favourites/:plantId', deleteFavourite)
  // POTS CONTROLERS
  .post('/:userId/pots', createPot)
  .post('/:userId/pots/:potId/:plantId', addPlantPot)
  .get('/:userId/pots', getAllPots)
  .get('/:userId/pots/:potId', getPot)
  .put('/:userId/pots/:potId', updatePot)
  .delete('/:userId/pots/:potId', deletePot)
  .delete('/:userId/pots/:potId/plants/:plantId', deletePlantPot)
  // CROPS CONTROLERS
  .post('/:userId/crops', createCrop)
  .post('/:userId/crops/:cropId/:plantId', addPlantCrop)
  .get('/:userId/crops', getAllCrops)
  .get('/:userId/crops/:cropId', getCrop)
  .put('/:userId/crops/:cropId', updateCrop)
  .delete('/:userId/crops/:cropId', deleteCrop)
  .delete('/:userId/crops/:cropId/plants/:plantId', deletePlantCrop)

exports.userRouter = userRouter
