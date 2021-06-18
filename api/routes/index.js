const router = require('express').Router()
const { authRouter } = require('./auth.router')
const { userRouter } = require('./users.router')
const { plantRouter } = require('./plants.router')

router
  .use('/auth', authRouter)
  .use('/users', userRouter)
  .use('/plants', plantRouter)

exports.router = router
