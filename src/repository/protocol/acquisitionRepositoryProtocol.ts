import { EquipmentAcquisition } from '../../db/entities/equipment-acquisition'

export interface AcquisitionRepositoryProtocol {
  create(
    acqusition: EquipmentAcquisition
  ): Promise<EquipmentAcquisition | undefined>
  findOne(acqusitionId: string): Promise<EquipmentAcquisition | null>
  findAll(): Promise<EquipmentAcquisition[] | null>
}

export default AcquisitionRepositoryProtocol
