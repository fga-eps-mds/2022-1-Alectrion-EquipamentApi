import { dataSource } from '../db/config'
import { EquipmentBrand } from '../db/entities/equipment-brand'
import { BrandRepositoryProtocol } from './protocol/brandRepositoryProtocol'

export class BrandRepository implements BrandRepositoryProtocol {
  private readonly brandRepository
  constructor() {
    this.brandRepository = dataSource.getRepository(EquipmentBrand)
  }

  async findAll(): Promise<EquipmentBrand[] | null> {
    const brands = await this.brandRepository.find()
    return brands
  }

  async create(brandData: { name: string }): Promise<EquipmentBrand> {
    const brand = await this.brandRepository.create({
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

  async findOneByName(brandName: string): Promise<EquipmentBrand | null> {
    const result = await this.brandRepository.findOneBy({
      name: brandName
    })
    return result
  }
}
