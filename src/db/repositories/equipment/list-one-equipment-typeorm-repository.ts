import { dataSource } from '../../config'
import { Equipment } from '../../entities/equipment'
import { History } from '../../entities/history'
import { ListOneEquipmentRepository } from './../../../repository/equipment/list-one-equipment'

export class ListOneEquipmentTypeormRepository {
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
}
