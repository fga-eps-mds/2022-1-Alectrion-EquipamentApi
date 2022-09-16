import { dataSource } from '../db/config'
import { Equipment } from '../db/entities/equipment'
import { EquipmentRepositoryProtocol } from './protocol/equipmentRepositoryProtocol'

export class EquipmentRepository implements EquipmentRepositoryProtocol {
  private readonly equipmentRepository
  constructor() {
    this.equipmentRepository = dataSource.getRepository(Equipment)
  }

  async create(equipmentData: Equipment): Promise<Equipment> {
    const equipment = await this.equipmentRepository.save(equipmentData)
    return equipment
  }

  updateOne(equipmentData: any): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  async findOne(equipmentId: string): Promise<Equipment | null> {
    const equipment = await this.equipmentRepository.findOneBy({
      id: equipmentId
    })
    return equipment
  }

  genericFind(query: any): Promise<Equipment[]> {
    throw new Error('Method not implemented.')
  }

  findByTippingNumberOrSerialNumber(id: string): Promise<Equipment | null> {
    throw new Error('Method not implemented.')
  }

  async findByTippingNumber(tippingNumber: string): Promise<Equipment | null> {
    const result = await this.equipmentRepository.findOneBy({
      tippingNumber
    })
    return result
  }
}
