import { Router } from 'express'
import { adaptExpressRoute as adapt } from './adapters/express-router'
import { makeCreateOrderController } from './factories/controllers/create-order-service'
import { makeCreateEquipmentController } from './factories/controllers/createEquipment'
import { makeFindAllAcquisitionsController } from './factories/controllers/findAllAcquisitions'
import { makeFindAllBrandsController } from './factories/controllers/findAllBrands'
import { makeFindAllUnitsController } from './factories/controllers/findAllUnits'

const routes = Router()

routes.post(
  '/create-order-service/:equipmentId',
  adapt(makeCreateOrderController())
)
routes.post('/createEquipment', adapt(makeCreateEquipmentController()))
routes.get('/getAllUnits', adapt(makeFindAllUnitsController()))
routes.get('/getAllBrands', adapt(makeFindAllBrandsController()))
routes.get('/getAllAcquisitions', adapt(makeFindAllAcquisitionsController()))

export default routes
