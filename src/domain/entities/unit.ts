import { OrderService } from './order-service'

export type Unit = {
  id: string

  name: string

  localization: string

  createdAt: Date

  updatedAt: Date

  orderServices: OrderService[]
}
