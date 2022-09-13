import { Equipment } from '../../domain/entities/equipment'

export interface Repository {
  create(equipment: Equipment): Promise<Equipment>
  updateOne(equipmentData: any): Promise<boolean>
  findOne(equipmentId: string): Promise<Equipment>
  genericFind(query: any): Promise<Equipment[]>
  findByTippingNumberOrSerialNumber(id: string): Promise<Equipment | null>
}
