import { ListOrderServiceRepository } from '../../repository/order-service/list-order-service'
import { FindOrderService } from '../../useCases/find-order-service/find-order-service'

export const makeFindOrdersServicesUseCase = () => {
  const repository = new ListOrderServiceRepository()
  return new FindOrderService(repository)
}
