import { Dismissed } from './dismissed'
import { Equipment } from './equipment'
import { OrderService } from './order-service'

export type History = {
  id: string

  equipment: Equipment

  orderService?: OrderService[]

  dismisseds?: Dismissed[]

  createdAt: Date

  updatedAt: Date
}
