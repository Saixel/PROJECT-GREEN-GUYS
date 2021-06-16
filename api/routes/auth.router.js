const authRouter = require('express').Router()

const {
  signup,
  login,
  whoami,
  checkAuth
} = require('../controllers/auth.controller')

authRouter
  .post('/signup', signup)
  .post('/login', login)
  .get('/whoami', checkAuth, whoami)

exports.authRouter = authRouter
