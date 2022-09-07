import { EquipmentBrand } from '../../domain/entities/brand'
import { FindAllBrandUseCase } from '../../useCases/findBrand/findAllBrandUseCase'
import { HttpResponse, ok, serverError } from '../helpers'
import { Controller } from '../protocols/controller'

type Model = Error | EquipmentBrand[]

export class FindAllBrandsController extends Controller {
  constructor(private readonly findAllBrands: FindAllBrandUseCase) {
    super()
  }

  async perform(): Promise<HttpResponse<Model>> {
    const response = await this.findAllBrands.execute()

    if (response.isSuccess && response.data) {
      return ok(response.data)
    } else {
      return serverError(response.error)
    }
  }
}
