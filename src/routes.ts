import { Router } from 'express'
import { adaptExpressRoute as adapt } from './adapters/express-router'
import { makeCreateOrderController } from './factories/controllers/create-order-service'

const routes = Router()

routes.post(
  '/create-order-service/:equipmentId',
  adapt(makeCreateOrderController())
)

export default routes
