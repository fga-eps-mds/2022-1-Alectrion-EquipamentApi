import { AcquisitionRepository } from '../../repository/acquisitionRepository'
import { FindAllAcquisitionUseCase } from '../../useCases/findAcquisition/findAllAcquisitionUseCase'

export const makeFindAllAcquisitions = () => {
  const acquisitionRepository = new AcquisitionRepository()
  return new FindAllAcquisitionUseCase(acquisitionRepository)
}
