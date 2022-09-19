import { dataSource } from '../../config'
import { Equipment } from '../../entities/equipment'
import { History } from '../../entities/history'
import { ListOneEquipmentRepository } from './../../../repository/equipment/list-one-equipment'

export class ListOneEquipmentTypeormRepository
  implements ListOneEquipmentRepository
{
  private readonly equipmentRepository
  constructor() {
    this.equipmentRepository = dataSource.getRepository(Equipment)
  }

  async listOne(equipmentId: string) {
    const result = await this.equipmentRepository
      .createQueryBuilder()
      .select('equipment')
      .from(Equipment, 'equipment')
      .where('equipment.id = :equipmentId', { equipmentId })
      .leftJoinAndMapOne(
        'equipment.history',
        History,
        'history',
        'history.equipmentId = equipment.id'
      )
      .getOne()

    if (result) {
      return result
    } else return undefined
  }

  async findOne(data: {
    id?: string
    tippingNumber?: string
  }): Promise<Equipment | undefined> {
    const result = await this.equipmentRepository.findOne({
      where: { ...data }
    })
    if (result) {
      return result
    } else return undefined
  }
}
