import { GetEquipmentController } from '../../presentation/controller/getEquipmentController'
import { makeGetEquipmentUseCase } from '../useCases/getEquipmentFactory'

export const makeGetEquipmentController = () => {
  return new GetEquipmentController(makeGetEquipmentUseCase())
}
