import { mock } from 'jest-mock-extended'
import { Equipment } from '../../db/entities/equipment'
import {
  GetEquipmentUseCase,
  NotFoundEquipment
} from '../../useCases/getEquipment/getEquipmentUseCase'
import { GetEquipmentController } from './getEquipmentController'
import { datatype } from 'faker'
import { notFound, ok, serverError } from '../helpers'

const useCaseMocked = mock<GetEquipmentUseCase>()
const getEquipmentController = new GetEquipmentController(useCaseMocked)

const mockedEquipmentBase = {
  id: datatype.string(),
  tippingNumber: datatype.string(),
  serialNumber: datatype.string(),
  type: 'CPU',
  status: 'ACTIVE',
  model: datatype.string(),
  description: datatype.string(),
  initialUseDate: datatype.string(),
  screenSize: null,
  invoiceNumber: datatype.string(),
  power: null,
  screenType: null,
  processor: datatype.string(),
  storageType: datatype.string(),
  storageAmount: datatype.number().toString(),
  ram_size: datatype.number().toString(),
  createdAt: datatype.datetime(),
  updatedAt: datatype.datetime()
} as unknown as Equipment

describe('Should test GetEquipmentController', () => {
  it('should find equipment with success', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true,
      data: [mockedEquipmentBase]
    })
    const query = { id: mockedEquipmentBase.id }
    const response = await getEquipmentController.perform(query)
    expect(response).toEqual(ok(response.data))
    expect(useCaseMocked.execute).toHaveBeenCalled()
    expect(useCaseMocked.execute).toHaveBeenCalledWith(query)
  })

  it('should not find equipment', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: true,
      error: new NotFoundEquipment()
    })
    const query = { id: datatype.string() }
    const response = await getEquipmentController.perform(query)
    expect(response).toEqual(notFound())
    expect(useCaseMocked.execute).toHaveBeenCalled()
    expect(useCaseMocked.execute).toHaveBeenCalledWith(query)
  })

  it('should return server error', async () => {
    useCaseMocked.execute.mockResolvedValue({
      isSuccess: false,
      error: new Error()
    })
    const query = { id: datatype.string() }
    const response = await getEquipmentController.perform(query)
    expect(response).toEqual(serverError(''))
    expect(useCaseMocked.execute).toHaveBeenCalled()
    expect(useCaseMocked.execute).toHaveBeenCalledWith(query)
  })
})
