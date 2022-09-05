import { CreateOrderServiceUseCase } from '../../useCases/create-order-service/create-order-service'
import {
  EquipmentNotFoundError,
  InvalidAuthorError,
  InvalidSenderError,
  InvalidUnitError,
  UnitNotFoundError
} from '../../useCases/create-order-service/errors'
import { notFound, ok, badRequest, serverError } from '../helpers'
import { Controller } from '../protocols/controller'

type HttpRequest = {
  equipmentId: string
  authorId: string
  authorFunctionalNumber: string
  destination: string
  senderName: string
  senderFunctionalNumber: string
}

export class CreateOrderServiceController extends Controller {
  constructor(private createOrderServiceUseCase: CreateOrderServiceUseCase) {
    super()
  }

  async perform(params: HttpRequest) {
    const response = await this.createOrderServiceUseCase.execute({
      equipmentId: params.equipmentId,
      authorId: params.authorId,
      authorFunctionalNumber: params.authorFunctionalNumber,
      destination: params.destination,
      senderName: params.senderName,
      senderFunctionalNumber: params.senderFunctionalNumber
    })

    if (
      !response.isSuccess &&
      response.error instanceof EquipmentNotFoundError
    ) {
      return notFound(response.error)
    }

    if (!response.isSuccess && response.error instanceof InvalidAuthorError) {
      return badRequest(response.error)
    }

    if (!response.isSuccess && response.error instanceof InvalidUnitError) {
      return badRequest(response.error)
    }

    if (!response.isSuccess && response.error instanceof InvalidSenderError) {
      return badRequest(response.error)
    }

    if (!response.isSuccess && response.error instanceof UnitNotFoundError) {
      return badRequest(response.error)
    }

    if (response.isSuccess && response.data) {
      return ok(response.data)
    } else return serverError()
  }
}
