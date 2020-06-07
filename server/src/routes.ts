import express from 'express'

import ItemController from './controllers/ItemController'
import PointController from './controllers/PointController'

const routes = express.Router()

routes.get('/items', ItemController.index)

routes.post('/points', PointController.store)
routes.get('/points/:id', PointController.show)
routes.get('/points', PointController.index)

export default routes
