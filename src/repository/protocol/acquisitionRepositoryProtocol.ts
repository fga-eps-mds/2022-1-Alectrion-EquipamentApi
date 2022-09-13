import { EquipmentAcquisition } from '../../db/entities/equipment-acquisition'

export interface AcquisitionRepositoryProtocol {
  create(acqusition: EquipmentAcquisition): Promise<EquipmentAcquisition | null>
  findOne(acqusitionId: string): Promise<EquipmentAcquisition | null>
  findAll(): Promise<EquipmentAcquisition[] | null>
  findOneByName(acquisitionName: string): Promise<EquipmentAcquisition | null>
}
export default AcquisitionRepositoryProtocol
