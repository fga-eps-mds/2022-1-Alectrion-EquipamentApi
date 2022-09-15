import { Equipment } from '../../db/entities/equipment'
import {
  CreateEquipmentUseCase,
  EquipmentTypeError,
  NotFoundAcquisition,
  NotFoundBrand,
  NotFoundUnit,
  NullFields
} from '../../useCases/createEquipment/createEquipmentUseCase'
import { badRequest, HttpResponse, ok, serverError } from '../helpers'
import { Controller } from '../protocols/controller'

type HttpRequest = {
  tippingNumber: string

  serialNumber: string

  type: string

  status: string

  model: string

  description?: string

  initialUseDate: string

  acquisitionDate: Date

  screenSize?: string

  invoiceNumber: string

  power?: string

  screenType?: string

  processor?: string

  storageType?: string

  storageAmount?: string

  brandName: string

  acquisitionName: string

  unitId: string

  ram_size?: string
}

type Model = Error | Equipment

export class CreateEquipmentController extends Controller {
  constructor(private readonly createEquipment: CreateEquipmentUseCase) {
    super()
  }

  async perform(params: HttpRequest): Promise<HttpResponse<Model>> {
    const response = await this.createEquipment.execute(params)
    if (response.data && response.isSuccess) {
      return ok(response.data)
    } else if (response.error instanceof NullFields) {
      return badRequest(new NullFields())
    } else if (response.error instanceof NotFoundAcquisition) {
      return badRequest(new NotFoundAcquisition())
    } else if (response.error instanceof NotFoundBrand) {
      return badRequest(new NotFoundBrand())
    } else if (response.error instanceof NotFoundUnit) {
      return badRequest(new NotFoundBrand())
    } else if (response.error instanceof EquipmentTypeError) {
      return badRequest(new EquipmentTypeError())
    } else {
      console.log('erro no controller')
      return serverError(response.error)
    }
  }
}
