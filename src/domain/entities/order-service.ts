import { History } from './history'
import { Equipment } from './equipment'

export type OrderService = {
  id: string

  date: Date

  description: string

  author: string

  destination: string

  equipmentSnapshot: any

  equipament: Equipment

  history: History

  sender: string

  senderFunctionalNumber: string

  authorFunctionalNumber: string

  createdAt: Date

  updatedAt: Date
}
