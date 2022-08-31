import { ScreenType } from './equipamentEnum/screenType'
import { Status } from './equipamentEnum/status'
import { StorageType } from './equipamentEnum/storageType'
import { Type } from './equipamentEnum/type'

export type Equipament = {
  id: string

  tippingNumber: string

  acquision: string

  type: Type

  status: Status

  model: string

  unitId: string

  description?: string

  brand: string

  initialUseDate: string

  screenSize?: string

  invoiceNumber?: string

  power?: string

  screenType?: ScreenType

  processador?: string

  storageType?: StorageType

  storageAmount?: string

  createdAt: Date

  updatedAt: Date
}
