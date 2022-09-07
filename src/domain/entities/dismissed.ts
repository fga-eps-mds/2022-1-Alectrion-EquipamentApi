import { Equipment } from './equipment'
import { History } from './history'
import { Unit } from './unit'

export type Dismissed = {
  id: string

  date: Date

  description: string

  authorId: string

  equipmentSnapshot: any

  createdAt: Date

  updatedAt: Date

  equipment: Equipment

  history: History

  destination: Unit
}
