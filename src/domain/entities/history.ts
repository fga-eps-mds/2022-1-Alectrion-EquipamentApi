import { Dismissed } from './dismissed'
import { Equipment } from './equipment'
import { OrderService } from './order-service'
import { TypeAction } from './type-action-enum/type-action'

export type History = {
  id: string

  typeAction: TypeAction

  authorId: string

  equipament: Equipment

  date: Date

  orderService?: OrderService[]

  dismisseds?: Dismissed[]

  createdAt: Date

  updatedAt: Date
}
