import { FindOneEquipmentController } from '../../presentation/controller/find-one-equipment-controller'
import { makeListOneEquipmentUseCase } from '../useCases/list-one-equipment-factory'

export const makeFindOneEquipmentController = () => {
  return new FindOneEquipmentController(makeListOneEquipmentUseCase())
}
