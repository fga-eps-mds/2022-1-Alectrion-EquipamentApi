import { Equipment } from './../../domain/entities/equipment'
import { HttpResponse, ok, serverError } from '../helpers'
import { Controller } from '../protocols/controller'
import { FindOneEquipmentUseCase } from '../../useCases/findOneEquipment/find-one-equipment-usecase'

type Model = Error | Equipment

type HttpRequest = {
  equipmentId: string
  tippingNumber: string
}

export class FindOneEquipmentController extends Controller {
  constructor(
    private readonly findOneEquipmentUseCase: FindOneEquipmentUseCase
  ) {
    super()
  }

  async perform(params: HttpRequest): Promise<HttpResponse<Model>> {
    const { equipmentId, tippingNumber } = params

    const response = await this.findOneEquipmentUseCase.execute({
      id: equipmentId,
      tippingNumber
    })
    if (response.isSuccess && response.data) {
      return ok(response.data)
    } else {
      return serverError(response.error)
    }
  }
}
