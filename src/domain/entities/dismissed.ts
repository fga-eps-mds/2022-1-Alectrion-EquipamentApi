import { Equipment } from './equipment'
import { History } from './history'

export type Dismissed = {
  id: string

  date: Date

  description: string

  equipament: Equipment

  history: History

  equipamentSnapshot: any

  authorId: string

  createdAt: Date

  updatedAt: Date
}
