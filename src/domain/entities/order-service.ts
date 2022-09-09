import { History } from './history'
import { Equipment } from './equipment'
import { Unit } from './unit'

export type OrderService = {
  id: string

  date: Date

  description: string

  authorId: string

  sender: string

  equipmentSnapshot: any

  senderFunctionalNumber: string

  createdAt: Date

  updatedAt: Date

  equipment: Equipment

  history: History

  destination: Unit
}
