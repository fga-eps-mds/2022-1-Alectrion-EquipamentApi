import { CreateOrderServiceController } from '../../presentation/controller/create-order-service-controller'
import { makeOrderService } from '../useCases/create-order-service-factory'

export const makeCreateOrderController = () => {
  return new CreateOrderServiceController(makeOrderService())
}
