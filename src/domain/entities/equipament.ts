/* eslint-disable no-unused-vars */
export enum Status {
  ACTIVE = 'active',
  ACTIVE_BY_DEMISE = 'activeByDemise',
  INACTIVE = 'inactive',
  MAINTENANCE = 'maintenance',
  DOWNGRADED = 'downgraded',
  TECHNICAL_RESERVE = 'technicalReserve'
}

export enum Type {
  CPU = 'cpu',
  NOBREAK = 'nobreak',
  SCANNER = 'scanner',
  WEBCAM = 'webcam',
  MONITOR = 'monitor',
  STABILIZER = 'stabilizer'
}

export enum ScreenType {
  LCD = 'lcd',
  OLED = 'oled',
  LED = 'led',
  TN = 'twistedNematic',
  VA = 'verticalAlignment',
  IPS = 'in-PlaneSwitching'
}

export enum StorageType {
  HD = 'hardDisk',
  SSD = 'solidStateDrive'
}

export type Equipament = {
  id: string

  tipping_number: string

  acquision: string

  type: Type

  status: Status

  model: string

  unit_id: string

  description?: string

  brand: string

  initial_use_date: string

  screen_size?: string

  invoice_number?: string

  power?: string

  screen_type?: ScreenType

  processador?: string

  storage_type?: StorageType

  storage_amount?: string

  createdAt: Date

  updatedAt: Date
}
