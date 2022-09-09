import { Unit } from '../../db/entities/unit'

export interface ListOneUnitRepository {
  listOne(unitId: string): Promise<Unit | undefined>
}
