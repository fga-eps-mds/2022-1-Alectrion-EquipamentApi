import { Router } from 'express'
import { adaptExpressRoute as adapt } from './adapters/express-router'
import { makeCreateOrderController } from './factories/controllers/create-order-service'
import { makeCreateEquipmentController } from './factories/controllers/createEquipment'

const routes = Router()

routes.post(
  '/create-order-service/:equipmentId',
  adapt(makeCreateOrderController())
)
routes.post(
  '/createEquipment',
  adapt(makeCreateEquipmentController())
)

export default routes
