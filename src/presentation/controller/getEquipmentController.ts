import {
  GetEquipmentInput,
  GetEquipmentUseCase,
  NotFoundEquipment
} from '../../useCases/getEquipment/getEquipmentUseCase'

import { HttpResponse, notFound, ok, serverError } from '../helpers'
import { Controller } from '../protocols/controller'

type HttpRequest = GetEquipmentInput
type Model = Error | any

export class GetEquipmentController extends Controller {
  constructor(private getEquipmentUseCase: GetEquipmentUseCase) {
    super()
  }

  async perform(params: HttpRequest): Promise<HttpResponse<Model>> {
    const response = await this.getEquipmentUseCase.execute(params)
    if (response.isSuccess && response.data) {
      return ok(response.data)
    } else {
      if (response.error instanceof NotFoundEquipment) {
        return notFound()
      }
      return serverError(response.error)
    }
  }
}
