import { FindAllBrandsController } from '../../presentation/controller/findAllBrandsController'
import { makeFindAllBrands } from '../useCases/findAllBrands'

export const makeFindAllBrandsController = () => {
  return new FindAllBrandsController(makeFindAllBrands())
}
