import { EquipmentAcquisition } from '../../domain/entities/equipment-acquisition'
import { AcquisitionRepository } from '../../repository/acquisitionRepository'
import { UseCase, UseCaseReponse } from '../protocol/useCase'

export class NotAcquisitionsFound extends Error {
  constructor() {
    super('Não Encontrado formas de aquisições disponiveis.')
    this.name = 'NotAcquisitionsFound'
  }
}

export class FindAllAcquisitionUseCase
  implements UseCase<any, EquipmentAcquisition[]>
{
  constructor(private readonly acquisitionRepository: AcquisitionRepository) {}

  async execute(): Promise<UseCaseReponse<EquipmentAcquisition[]>> {
    const acquisitions = await this.acquisitionRepository.findAll()

    if (acquisitions !== null) {
      return {
        isSuccess: true,
        data: acquisitions
      }
    } else {
      return {
        isSuccess: false,
        error: new NotAcquisitionsFound()
      }
    }
  }
}
