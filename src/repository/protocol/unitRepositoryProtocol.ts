import { Unit } from '../../db/entities/unit'

export interface UnitRepositoryProcol {
  create(unit: Unit): Promise<Unit | undefined>
  findOne(unitId: string): Promise<Unit | null>
  findAll(): Promise<Unit[] | null>
}
