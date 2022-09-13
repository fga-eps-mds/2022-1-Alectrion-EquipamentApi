import { Equipment } from '../../db/entities/equipment'
import { History } from '../../domain/entities/history'
import { OrderService } from '../../domain/entities/order-service'
import { Unit } from '../../domain/entities/unit'

export type CreateOrderServiceData = {
  equipment: Equipment
  history: History
  equipmentSnapshot: any
  description: string
  authorId: string
  authorFunctionalNumber: string
  destination: Unit
  senderName: string
  senderFunctionalNumber: string
  date: Date
}

export interface CreateOrderServiceRepository {
  create(data: CreateOrderServiceData): Promise<OrderService>
}
