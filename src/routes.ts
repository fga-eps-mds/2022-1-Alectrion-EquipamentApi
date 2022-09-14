import { Router } from 'express'
import { adaptExpressRoute as adapt } from './adapters/express-router'
import { makeCreateOrderController } from './factories/controllers/create-order-service'
import { makeCreateEquipmentController } from './factories/controllers/createEquipment'
import { makeFindOneEquipmentController } from './factories/controllers/find-one-equipment-controller'
import { makeFindOrderServiceController } from './factories/controllers/find-order-service'
import { makeFindAllUnitsController } from './factories/controllers/findAllUnits'
import { makeGetEquipmentController } from './factories/controllers/getEquipment'
import { checkAccessToken } from './middlewares/auth-middleware'

const routes = Router()

routes.post(
  '/create-order-service/:equipmentId',
  checkAccessToken,
  adapt(makeCreateOrderController())
)
routes.post('/createEquipment', adapt(makeCreateEquipmentController()))
routes.get('/getAllUnits', adapt(makeFindAllUnitsController()))
routes.get('/find', adapt(makeGetEquipmentController()))
routes.get('/listOne', adapt(makeFindOneEquipmentController()))
routes.get('/listOrderSerice', adapt(makeFindOrderServiceController()))

export default routes
