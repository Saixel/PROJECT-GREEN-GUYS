const { UserModel } = require('../models/users.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signup = (req, res) => {
  const hashedPwd = bcrypt.hashSync(req.body.password, 10)
  UserModel
    .create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPwd
    })
    .then((user) => {
      const userData = { name: user.name, email: user.email }

      const token = jwt.sign(
        userData,
        process.env.SECRET,
        { expiresIn: '1h' }
      )
      return res.json({ token: token, ...userData })
    })
    .catch((err) => res.status(500).json({ error: err.errmsg }))
}

exports.login = (req, res) => {
  UserModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user) return res.json({ error: 'Wrong email' })

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (!result) {
          return res.json(err, { error: `Wrong password for ${req.body.email}` })
        }
        const userData = { name: user.name, email: user.email }

        const token = jwt.sign(
          userData,
          process.env.SECRET,
          { expiresIn: '1h' }
        )

        return res.json({ token: token, ...userData })
      })
    })
    .catch((err) => res.status(500).json({ error: err.errmsg }))
}

exports.whoami = (req, res) => {
  res.json({ name: res.locals.user.name, email: res.locals.user.email })
}

exports.checkAuth = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) { res.status(403).json({ error: 'Token not valid' }) }

    UserModel
      .findOne({ email: token.email })
      .then(user => {
        if (user) {
          res.locals.user = user
          next()
        } else {
          res.json({ err: 'Token not valid' })
        }
      })
  })
}

exports.checkAdmin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
    if (err) { res.status(403).json({ error: 'Token not valid' }) }

    UserModel
      .findOne({ email: token.email })
      .then(user => {
        if (user.role === 'admin') {
          res.locals.user = user
          next()
        } else {
          res.json({ err: 'Admin permissions are needed' })
        }
      })
  })
}
