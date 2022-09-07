import { AcquisitionRepository } from "../../repository/acquisitionRepository"
import { BrandRepository } from "../../repository/brandRepository"
import { EquipmentRepository } from "../../repository/equipamentRepository"
import { UnitRepository } from "../../repository/unitRepository"
import { CreateEquipmentUseCase } from "../../useCases/createEquipment/createEquipmentUseCase"


export const  makeCreateEquipment = () => {
    const equipmentRepository = new EquipmentRepository()
    const unitRepository = new UnitRepository()
    const brandRepository = new BrandRepository()
    const acquisitionRepository = new AcquisitionRepository()
    return new CreateEquipmentUseCase(equipmentRepository, unitRepository, brandRepository, acquisitionRepository)
}