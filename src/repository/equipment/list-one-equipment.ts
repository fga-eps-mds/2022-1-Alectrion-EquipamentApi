import { Equipment } from '../../domain/entities/equipment'

export interface ListOneEquipmentRepository {
  listOne(equipmentId: string): Promise<Equipment | undefined>
}
