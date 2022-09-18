import { EquipmentRepository } from '../../repository/equipamentRepository'
import { GetEquipmentUseCase } from '../../useCases/getEquipment/getEquipmentUseCase'

export const makeGetEquipmentUseCase = () => {
  const repository = new EquipmentRepository()
  return new GetEquipmentUseCase(repository)
}
