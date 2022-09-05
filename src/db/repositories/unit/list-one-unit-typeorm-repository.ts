import { ListOneUnitRepository } from '../../../repository/unit/list-one-unit'
import { dataSource } from '../../config'
import { Unit } from '../../entities/unit'

export class ListOneUnitTypeormRepository implements ListOneUnitRepository {
  private readonly unitRepository
  constructor() {
    this.unitRepository = dataSource.getRepository(Unit)
  }

  async listOne(unitId: string): Promise<Unit | undefined> {
    const result = await this.unitRepository.findOne({
      where: { id: unitId }
    })

    if (result) {
      return result
    } else return undefined
  }
}
