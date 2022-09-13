import { FindAllAcquisitionsController } from '../../presentation/controller/findAllAcquisitionsController'
import { makeFindAllAcquisitions } from '../useCases/findAllAcquisitions'

export const makeFindAllAcquisitionsController = () => {
  return new FindAllAcquisitionsController(makeFindAllAcquisitions())
}
