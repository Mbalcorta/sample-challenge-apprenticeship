import express from 'express'
import signUp from '../actions/signUp.js'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('hello')
  // signUp(user)
})

router.post('/', (req, res, next) => {
  signUp(name, email, password)
    .then(signUp => res.redirect('/'))
    .catch(next)
})

export default router