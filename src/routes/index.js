import express from 'express'
import signUp from './authentication.js'
import albums from './albums'

const routes = express.Router()

routes.use('/sign-up', signUp)
routes.get('/', (req, res) => res.redirect('/albums'))
routes.use('/albums', albums)

export default routes
