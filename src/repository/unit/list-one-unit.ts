import { Unit } from '../../domain/entities/unit'

export interface ListOneUnitRepository {
  listOne(unitId: string): Promise<Unit | undefined>
}
