import { EquipmentBrand } from '../../db/entities/equipment-brand'

export interface BrandRepositoryProtocol {
  create(brand: EquipmentBrand): Promise<EquipmentBrand | undefined>
  findOne(brandId: String): Promise<EquipmentBrand | null>
}
