import { CreateOrderServiceTypeOrmRepository } from './../../db/repositories/order-service/create-order-service-typeorm-repository'
import { ListOneEquipmentTypeormRepository } from '../../db/repositories/equipment/list-one-equipment-typeorm-repository'
import { CreateHistoryTypeOrmRepository } from '../../db/repositories/history/create-history-typeorm-repository'
import { ListOneUnitTypeormRepository } from '../../db/repositories/unit/list-one-unit-typeorm-repository'
import { CreateOrderServiceUseCase } from '../../useCases/create-order-service/create-order-service'

export const makeOrderService = () => {
  const listOneEquipmentRepository = new ListOneEquipmentTypeormRepository()
  const listOneUnitRepository = new ListOneUnitTypeormRepository()
  const createHistoryRepository = new CreateHistoryTypeOrmRepository()
  const createOrderServiceRepository = new CreateOrderServiceTypeOrmRepository()
  return new CreateOrderServiceUseCase(
    listOneEquipmentRepository,
    listOneUnitRepository,
    createHistoryRepository,
    createOrderServiceRepository
  )
}
