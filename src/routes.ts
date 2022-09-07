import { Router } from 'express'
import { adaptExpressRoute as adapt } from './adapters/express-router'
import { makeCreateOrderController } from './factories/controllers/create-order-service'
import { makeCreateEquipmentController } from './factories/controllers/createEquipment'
import { makeFindAllUnitsController } from './factories/controllers/findAllUnits'
import { makeFindAllUnits } from './factories/useCases/findAllUnits'

const routes = Router()

routes.post(
  '/create-order-service/:equipmentId',
  adapt(makeCreateOrderController())
)
routes.post(
  '/createEquipment',
  adapt(makeCreateEquipmentController())
)
routes.get(
  '/getAllUnits',
  adapt(makeFindAllUnitsController())
)



export default routes
