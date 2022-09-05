import { Router } from 'express'
import { adaptExpressRoute as adapt } from './adapters/express-router'
import { makeGetEquipmentController } from './factories/controllers/getEquipment'

const routes = Router()

routes.get('/find', adapt(makeGetEquipmentController()))
export default routes
