import { BrandRepository } from '../../repository/brandRepository'
import { FindAllBrandUseCase } from '../../useCases/findBrand/findAllBrandUseCase'

export const makeFindAllBrands = () => {
  const brandRepository = new BrandRepository()
  return new FindAllBrandUseCase(brandRepository)
}
