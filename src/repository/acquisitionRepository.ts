import { dataSource } from '../db/config'
import { EquipmentAcquisition } from '../db/entities/equipment-acquisition'
import AcquisitionRepositoryProtocol from './protocol/acquisitionRepositoryProtocol'

export class AcquisitionRepository implements AcquisitionRepositoryProtocol {
  private readonly acquisitionRepository
  constructor() {
    this.acquisitionRepository = dataSource.getRepository(EquipmentAcquisition)
  }

  async findAll(): Promise<EquipmentAcquisition[] | null> {
    const acquisitions = this.acquisitionRepository.find()
    return acquisitions
  }

  async create(
    acquisitionData: EquipmentAcquisition
  ): Promise<EquipmentAcquisition | null> {
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

  async findOneByName(
    acquisitionName: string
  ): Promise<EquipmentAcquisition | null> {
    const result = await this.acquisitionRepository.findOne({
      where: { name: acquisitionName }
    })
    return result
  }
}
