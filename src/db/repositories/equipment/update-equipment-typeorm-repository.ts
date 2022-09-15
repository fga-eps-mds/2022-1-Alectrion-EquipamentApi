import {
  EditPayload,
  UpdateEquipmentRepository
} from '../../../repository/equipment/update-equipment'
import { dataSource } from '../../config'
import { Equipment } from '../../entities/equipment'

export class UpdateEquipmentTypeorm implements UpdateEquipmentRepository {
  private readonly equipmentRepository
  constructor() {
    this.equipmentRepository = dataSource.getRepository(Equipment)
  }

  async updateEquipment(
    equipmentId: string,
    editPayload: EditPayload
  ): Promise<void> {
    await this.equipmentRepository.update(equipmentId, { ...editPayload })
  }
}
