// import { EquipmentAcquisition } from "../../domain/entities/equipment-acquisition";
// import { AcquisitionRepository } from "../../repository/acquisitionRepository";
// import { UseCase, UseCaseReponse } from "../protocol/useCase";

import { EquipmentBrand } from '../../domain/entities/brand'
import { BrandRepository } from '../../repository/brandRepository'
import { UseCase, UseCaseReponse } from '../protocol/useCase'

export class NotBrandsFound extends Error {
  constructor() {
    super('Não Encontrada marcas disponiveis.')
    this.name = 'NotBrandsFound'
  }
}

export class FindAllBrandUseCase implements UseCase<any, EquipmentBrand[]> {
  constructor(private readonly equipmentBrandRepository: BrandRepository) {}

  async execute(): Promise<UseCaseReponse<EquipmentBrand[]>> {
    const brands = await this.equipmentBrandRepository.findAll()

    if (brands !== null) {
      return {
        isSuccess: true,
        data: brands
      }
    } else {
      return {
        isSuccess: false,
        error: new NotBrandsFound()
      }
    }
  }
}
