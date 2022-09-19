import { EquipmentBrand } from '../../db/entities/equipment-brand'

export interface BrandRepositoryProtocol {
  create(brand: { name: string }): Promise<EquipmentBrand | null>
  findOne(brandId: String): Promise<EquipmentBrand | null>
  findOneByName(brandName: String): Promise<EquipmentBrand | null>
  findAll(): Promise<EquipmentBrand[] | null>
}
