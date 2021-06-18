const authRouter = require('express').Router()

const {
  signup,
  login,
  checkAuth,
  whoami
} = require('../controllers/auth.controller')

authRouter
  .post('/signup', signup)
  .post('/login', login)
  .get('/whoami', checkAuth, whoami)

exports.authRouter = authRouter
