import { CreateEquipmentController } from '../../presentation/controller/createEquipmentController'
import { makeCreateEquipment } from '../useCases/createEquipment'

export const makeCreateEquipmentController = () => {
  return new CreateEquipmentController(makeCreateEquipment())
}
