import { Repository } from './protocol/repository'
import { dataSource } from '../db/config'
import { Equipment } from '../db/entities/equipament'

class EquipmentRepository implements Repository {
  private readonly repository
  constructor() {
    this.repository = dataSource.getRepository(Equipment)
  }

  create(equipment: any): Promise<Equipment> {
    throw new Error('Method not implemented.')
  }

  updateOne(equipmentData: any): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  findOne(equipmentId: string): Promise<Equipment> {
    throw new Error('Method not implemented.')
  }

  async genericFind(query: any): Promise<Equipment[]> {
    console.log('Query repository: ', query)
    const equipments = await this.repository.find({
      where: {
        ...query
      }
    })
    return equipments
  }

  async findByTippingNumberOrSerialNumber(
    id: string
  ): Promise<Equipment | null> {
    const equipment = await this.repository.findOne({
      where: [{ tippingNumber: id }, { serialNumber: id }]
    })
    return equipment
  }
}

export { EquipmentRepository }
