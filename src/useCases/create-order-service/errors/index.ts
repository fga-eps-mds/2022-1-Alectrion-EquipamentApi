export class EquipmentNotFoundError extends Error {
  constructor() {
    super('Equipment Not Found')
    this.name = 'EquipmentNotFoundError'
  }
}

export class UnitNotFoundError extends Error {
  constructor() {
    super('Unit Not Found')
    this.name = 'UnitNotFoundError'
  }
}

export class InvalidAuthorError extends Error {
  constructor() {
    super('Invalid Author')
    this.name = 'InvalidAuthor'
  }
}

export class InvalidUnitError extends Error {
  constructor() {
    super('Invalid Unit')
    this.name = 'InvalidUnit'
  }
}

export class InvalidSenderError extends Error {
  constructor() {
    super('Invalid Sender')
    this.name = 'InvalidSender'
  }
}

export class CreateOrderServiceError extends Error {
  constructor() {
    super('Create Order Service Error')
    this.name = 'CreateOrderServiceError'
  }
}
