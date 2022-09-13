// import { Unit } from '../../domain/entities/unit'
// import { FindAllUnitUseCase } from '../../useCases/findUnit/findAllUnitUseCase'
// import { HttpResponse, ok, serverError } from '../helpers'
// import { Controller } from '../protocols/controller'

import { EquipmentAcquisition } from '../../domain/entities/equipment-acquisition'
import { FindAllAcquisitionUseCase } from '../../useCases/findAcquisition/findAllAcquisitionUseCase'
import { HttpResponse, ok, serverError } from '../helpers'
import { Controller } from '../protocols/controller'

type Model = Error | EquipmentAcquisition[]

export class FindAllAcquisitionsController extends Controller {
  constructor(private readonly findAllAcquisitions: FindAllAcquisitionUseCase) {
    super()
  }

  async perform(): Promise<HttpResponse<Model>> {
    const response = await this.findAllAcquisitions.execute()
    if (response.isSuccess && response.data) {
      return ok(response.data)
    } else {
      return serverError(response.error)
    }
  }
}
