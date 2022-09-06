import { dataSource } from '../db/config'
import { EquipmentBrand } from '../db/entities/equipment-brand'
import { BrandRepositoryProtocol } from './protocol/brandRepositoryProtocol'

export class BrandRepository implements BrandRepositoryProtocol {
  private readonly brandRepository
  constructor() {
    this.brandRepository = dataSource.getRepository(EquipmentBrand)
  }

  async create(brandData: EquipmentBrand): Promise<EquipmentBrand> {
    const brand = this.brandRepository.create({
      name: brandData.name
    })
    return await this.brandRepository.save(brand)
  }

  async findOne(brandId: string): Promise<EquipmentBrand | null> {
    const result = await this.brandRepository.findOneBy({
      id: brandId
    })
    return result
  }
}
