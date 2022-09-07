import { UnitRepository } from '../../repository/unitRepository'
import { FindAllUnitUseCase } from '../../useCases/findUnit/findAllUnitUseCase'

export const makeFindAllUnits = () => {
  const unitRepository = new UnitRepository()
  return new FindAllUnitUseCase(unitRepository)
}
