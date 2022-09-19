import { mock } from 'jest-mock-extended'
import { badRequest, notFound, ok, serverError } from '../helpers'
import {
  CreateEquipmentController,
  CreateEquipmentHttpRequest
} from './createEquipmentController'
import {
  CreateEquipmentUseCase,
  EquipmentTypeError,
  InvalidTippingNumber,
  NotFoundUnit,
  NullFields
} from '../../useCases/createEquipment/createEquipmentUseCase'
import { Equipment } from '../../domain/entities/equipment'

import { Status } from '../../domain/entities/equipamentEnum/status'
import { Type } from '../../domain/entities/equipamentEnum/type'

const useCaseMocked = mock<CreateEquipmentUseCase>()
const createEquipmentController = new CreateEquipmentController(useCaseMocked)

const mockedEquipment: Equipment = {
  id: 'id',
  acquisitionDate: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
  status: Status.ACTIVE,
  tippingNumber: 'any',
  model: 'DELL G15',
  serialNumber: 'any',
  type: Type.CPU,
  initialUseDate: new Date().toISOString(),
  invoiceNumber: 'any'
}

const request: CreateEquipmentHttpRequest = {
  acquisitionDate: new Date(),
  acquisitionName: 'any_acquisition',
  brandName: 'any_brand_name',
  initialUseDate: new Date().toISOString(),
  invoiceNumber: 'any_invoice',
  model: 'any_model',
  serialNumber: '12345678',
  status: Status.ACTIVE,
  tippingNumber: '123123123123',
  type: Type.CPU,
  unitId: 'any_unit_id'
}

describe('Should test CreateEquipmentController', () => {
  it('should create equipment with success', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true,
      data: mockedEquipment
    })

    const response = await createEquipmentController.perform(request)

    expect(response).toEqual(ok(response.data))
    expect(useCaseMocked.execute).toHaveBeenCalledWith(request)
  })

  it('should return bad request if usecase returns NullFields', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true,
      error: new NullFields()
    })

    const response = await createEquipmentController.perform(request)

    expect(response).toEqual(badRequest(new NullFields()))
  })

  it('should return bad request if usecase returns InvalidTippingNumber', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true,
      error: new InvalidTippingNumber()
    })

    const response = await createEquipmentController.perform(request)

    expect(response).toEqual(badRequest(new InvalidTippingNumber()))
  })

  it('should not found request if usecase returns NotFoundUnit', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true,
      error: new NotFoundUnit()
    })

    const response = await createEquipmentController.perform(request)

    expect(response).toEqual(notFound(new NotFoundUnit()))
  })

  it('should return not found if usecase returns EquipmentTypeError', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true,
      error: new EquipmentTypeError()
    })

    const response = await createEquipmentController.perform(request)

    expect(response).toEqual(notFound(new EquipmentTypeError()))
  })

  it('should server error if success without data', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true
    })

    const response = await createEquipmentController.perform(request)

    expect(response).toEqual(serverError())
  })
})
