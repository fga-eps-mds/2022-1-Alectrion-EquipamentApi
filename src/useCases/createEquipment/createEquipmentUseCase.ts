import { Equipment } from '../../db/entities/equipment'
import { ScreenType } from '../../domain/entities/equipamentEnum/screenType'
import { Status } from '../../domain/entities/equipamentEnum/status'
import { StorageType } from '../../domain/entities/equipamentEnum/storageType'
import { Type } from '../../domain/entities/equipamentEnum/type'
import AcquisitionRepositoryProtocol from '../../repository/protocol/acquisitionRepositoryProtocol'
import { BrandRepositoryProtocol } from '../../repository/protocol/brandRepositoryProtocol'
import { EquipmentRepositoryProtocol } from '../../repository/protocol/equipmentRepositoryProtocol'
import { UnitRepositoryProcol } from '../../repository/protocol/unitRepositoryProtocol'
import { UseCase, UseCaseReponse } from '../protocol/useCase'

export interface CreateEquipmentInterface {
  tippingNumber: string

  serialNumber: string

  type: string

  status: string

  model: string

  description?: string

  initialUseDate: Date

  screenSize?: string

  invoiceNumber: string

  power?: string

  screenType?: string

  processor?: string

  storageType?: string

  storageAmount?: string

  brandId: string

  acquisitionId: string

  unitId: string

  ram_size?: string
}

export class EquipmentTypeError extends Error {
  constructor() {
    super('Tipo de equipamento não encontrado.')
    this.name = 'EquipmentTypeError'
  }
}

export class NotFoundUnit extends Error {
  constructor() {
    super('Não encontrada unidade.')
    this.name = 'NotFoundUnit'
  }
}
export class NotFoundBrand extends Error {
  constructor() {
    super('Não encontrada marca.')
    this.name = 'NotFoundBrand'
  }
}
export class NotFoundAcquisition extends Error {
  constructor() {
    super('Não econtrada meio de aquisição.')
    this.name = 'NotFoundAcquisition'
  }
}

export class CreateEquipmentUseCase
  implements UseCase<CreateEquipmentInterface, Equipment>
{
  constructor(
    private readonly equipmentRepository: EquipmentRepositoryProtocol,
    private readonly unitRepository: UnitRepositoryProcol,
    private readonly brandRepository: BrandRepositoryProtocol,
    private readonly acquisitionRepository: AcquisitionRepositoryProtocol
  ) {}

  async execute(
    equipmentData: CreateEquipmentInterface
  ): Promise<UseCaseReponse<Equipment>> {
    const equipment = new Equipment()
    equipment.tippingNumber = equipmentData.tippingNumber
    equipment.serialNumber = equipmentData.serialNumber
    equipment.status = 'ACTIVE' as Status 
    equipment.model = equipmentData.model
    equipment.description = equipmentData.description ?? ''
    equipment.initialUseDate = equipmentData.initialUseDate
    equipment.invoiceNumber = equipmentData.invoiceNumber
    equipment.type = equipmentData.type as Type;

    switch (equipmentData.type) {
      case Type.CPU:
        equipment.processor = equipmentData.processor ?? ''
        equipment.storageAmount = equipmentData.storageAmount ?? ''
        equipment.storageType = equipmentData.storageType as StorageType
        equipment.ram_size = equipmentData.ram_size ?? ''
        break
      case Type.MONITOR:
        equipment.screenType = equipmentData.screenType as ScreenType
        equipment.screenSize = equipmentData.screenSize ?? ''
        break
      case Type.NOBREAK:
        equipment.power = equipmentData.power ?? ''
        break
      case Type.SCANNER:
        equipment.power = equipmentData.power ?? ''
        break
      case Type.STABILIZER:
        equipment.power = equipmentData.power ?? ''
        break
      case Type.WEBCAM:
        break

      default:
        console.log('Tipo de equipamento não cadastrado')
        return {
          isSuccess: false,
          error: new EquipmentTypeError()
        }
    }
    const unit = await this.unitRepository.findOne(equipmentData.unitId)
    const brand = await this.brandRepository.findOne(equipmentData.brandId)
    const acquisition = await this.acquisitionRepository.findOne(
      equipmentData.acquisitionId
    )

    if (!unit) {
      return {
        isSuccess: false,
        error: new NotFoundUnit()
      }
    }
    if (!brand ) {
      return {
        isSuccess: false,
        error: new NotFoundBrand()
      }
    }
    if (!acquisition) {
      return {
        isSuccess: false,
        error: new NotFoundAcquisition()
      }
    }

    equipment.acquisition = acquisition
    equipment.unit = unit
    equipment.brand = brand

    await this.equipmentRepository.create(equipment)

    return {
      isSuccess: true,
      data: equipment
    }
  }
}


