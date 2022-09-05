import { Equipment } from '../../domain/entities/equipment'
import { History } from '../../domain/entities/history'

export type CreateHistoryData = {
  equipment: Equipment
  equipmentSnapshot: any
}

export interface CreateHistoryRepository {
  create(data: CreateHistoryData): Promise<History>
}
