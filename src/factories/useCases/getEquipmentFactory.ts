import { EquipmentRepository } from '../../repository/equipmentRepository'
import { GetEquipmentUseCase } from '../../useCases/getEquipment/getEquipmentUseCase'

export const makeGetEquipmentUseCase = () => {
  const repository = new EquipmentRepository()
  return new GetEquipmentUseCase(repository)
}
