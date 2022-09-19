import { Equipment } from '../../domain/entities/equipment'

export interface ListOneEquipmentRepository {
  listOne(equipmentId: string): Promise<Equipment | undefined>
  findOne(data: {
    id?: string
    tippingNumber?: string
  }): Promise<Equipment | undefined>
}
