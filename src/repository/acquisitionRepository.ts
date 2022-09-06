import { dataSource } from '../db/config'
import { EquipmentAcquisition } from '../db/entities/equipment-acquisition'
import AcquisitionRepositoryProtocol from './protocol/acquisitionRepositoryProtocol'

export class AcquisitionRepository implements AcquisitionRepositoryProtocol {
  private readonly acquisitionRepository
  constructor() {
    this.acquisitionRepository = dataSource.getRepository(EquipmentAcquisition)
  }

  async create(
    acquisitionData: EquipmentAcquisition
  ): Promise<EquipmentAcquisition | undefined> {
    const acquisition = this.acquisitionRepository.create({
      name: acquisitionData.name
    })
    return await this.acquisitionRepository.save(acquisition)
  }

  async findOne(acquisitionId: string): Promise<EquipmentAcquisition | null> {
    const result = await this.acquisitionRepository.findOneBy({
      id: acquisitionId
    })
    return result
  }
}
