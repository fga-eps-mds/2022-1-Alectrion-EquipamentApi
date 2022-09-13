import { Equipment } from '../../db/entities/equipment'
import { EquipmentRepositoryProtocol } from '../../repository/protocol/equipmentRepositoryProtocol'

import { UseCase, UseCaseReponse } from '../protocol/useCase'

export class NotFoundEquipment extends Error {
  constructor() {
    super('Equipamento(s) não econtrado(s).')
    this.name = 'NotFoundEquipment'
  }
}

export interface GetEquipmentInput {
  id?: string

  tippingNumber?: string

  serialNumber?: string

  acquision?: string

  type?: string

  status?: string

  model?: string

  unit?: string

  brand?: string

  initialUseDate?: string

  screenSize?: string

  invoiceNumber?: string

  power?: string

  screenType?: string

  processador?: string

  storageType?: string

  storageAmount?: string

  createdAt?: Date
}

class GetEquipmentUseCase implements UseCase<GetEquipmentInput, Equipment[]> {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly equipmentRepository: EquipmentRepositoryProtocol
  ) {}

  async execute(
    query: GetEquipmentInput
  ): Promise<UseCaseReponse<Equipment[]>> {
    if (query.tippingNumber !== undefined || query.serialNumber !== undefined) {
      const id = query.tippingNumber ?? query.serialNumber ?? ''
      const equipment =
        await this.equipmentRepository.findByTippingNumberOrSerialNumber(id)
      if (!equipment) {
        return {
          isSuccess: false,
          error: new NotFoundEquipment()
        }
      }
      return {
        isSuccess: true,
        data: [equipment]
      }
    }

    const equipaments = await this.equipmentRepository.genericFind(query)

    if (equipaments.length === 0) {
      return {
        isSuccess: false,
        error: new NotFoundEquipment()
      }
    }

    return {
      isSuccess: true,
      data: equipaments
    }
  }
}

export { GetEquipmentUseCase }
