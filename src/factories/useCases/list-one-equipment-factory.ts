import { ListOneEquipmentTypeormRepository } from './../../db/repositories/equipment/list-one-equipment-typeorm-repository'
import { FindOneEquipmentUseCase } from '../../useCases/findOneEquipment/find-one-equipment-usecase'

export const makeListOneEquipmentUseCase = () => {
  const listOneEquipmentRepository = new ListOneEquipmentTypeormRepository()
  return new FindOneEquipmentUseCase(listOneEquipmentRepository)
}
