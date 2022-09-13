import { EquipmentBrand } from '../../db/entities/equipment-brand'

export interface BrandRepositoryProtocol {
  create(brand: EquipmentBrand): Promise<EquipmentBrand | null>
  findOne(brandId: String): Promise<EquipmentBrand | null>
  findOneByName(brandName: String): Promise<EquipmentBrand | null>
  findAll(): Promise<EquipmentBrand[] | null>
}
