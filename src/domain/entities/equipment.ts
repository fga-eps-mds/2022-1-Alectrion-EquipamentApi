import { EquipmentBrand } from './brand'
import { Dismissed } from './dismissed'
import { ScreenType } from './equipamentEnum/screenType'
import { Status } from './equipamentEnum/status'
import { StorageType } from './equipamentEnum/storageType'
import { Type } from './equipamentEnum/type'
import { EquipmentAcquisition } from './equipment-acquisition'
import { OrderService } from './order-service'
import { Unit } from './unit'

export type Equipment = {
  id: string

  tippingNumber: string

  acquision: EquipmentAcquisition

  type: Type

  status: Status

  model: string

  unit?: Unit

  description?: string

  brand?: EquipmentBrand

  initialUseDate: string

  screenSize?: string

  invoiceNumber?: string

  power?: string

  screenType?: ScreenType

  processador?: string

  storageType?: StorageType

  storageAmount?: string

  orderService?: OrderService[]

  dismisseds?: Dismissed[]

  createdAt: Date

  updatedAt: Date
}
