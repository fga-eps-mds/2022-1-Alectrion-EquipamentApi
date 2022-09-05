import { History } from '../../domain/entities/history'
import { OrderService } from '../../domain/entities/order-service'
import { CreateHistoryRepository } from '../../repository/history/create-history-repository'
import { CreateOrderServiceRepository } from '../../repository/order-service/create-order-service'
import { ListOneUnitRepository } from '../../repository/unit/list-one-unit'
import { ListOneEquipmentRepository } from './../../repository/equipment/list-one-equipment'
import { UseCase } from './../protocol/useCase'
import {
  EquipmentNotFoundError,
  InvalidAuthorError,
  InvalidUnitError,
  InvalidSenderError,
  UnitNotFoundError,
  CreateOrderServiceError
} from './errors'

type CreateOrderServiceUseCaseData = {
  equipmentId: string
  authorId: string
  authorFunctionalNumber: string
  destination: string
  senderName: string
  senderFunctionalNumber: string
}

export class CreateOrderServiceUseCase
  implements UseCase<CreateOrderServiceUseCaseData, OrderService>
{
  private history: null | History = null

  constructor(
    private readonly equipmentRepository: ListOneEquipmentRepository,
    private readonly unitRepository: ListOneUnitRepository,
    private readonly historyRepository: CreateHistoryRepository,
    private readonly createOrderServiceRepository: CreateOrderServiceRepository
  ) {}

  async execute(data: CreateOrderServiceUseCaseData) {
    if (!data.authorId || !data.authorFunctionalNumber) {
      return {
        isSuccess: false,
        error: new InvalidAuthorError()
      }
    }

    if (!data.destination) {
      return {
        isSuccess: false,
        error: new InvalidUnitError()
      }
    }

    if (!data.senderName || !data.senderFunctionalNumber) {
      return {
        isSuccess: false,
        error: new InvalidSenderError()
      }
    }

    const equipment = await this.equipmentRepository.listOne(data.equipmentId)

    if (equipment === undefined) {
      return {
        isSuccess: false,
        error: new EquipmentNotFoundError()
      }
    }

    const unit = await this.unitRepository.listOne(data.destination)

    if (unit === undefined) {
      return {
        isSuccess: false,
        error: new UnitNotFoundError()
      }
    }

    if (!equipment.history) {
      this.history = await this.historyRepository.create({
        equipment,
        equipmentSnapshot: equipment
      })
    } else this.history = equipment.history

    if (this.history !== null) {
      console.log(this.history)

      const orderService = await this.createOrderServiceRepository.create({
        authorId: data.authorId,
        authorFunctionalNumber: data.authorFunctionalNumber,
        description: 'teste',
        destination: unit,
        equipment,
        history: this.history,
        equipmentSnapshot: equipment,
        senderName: data.senderName,
        senderFunctionalNumber: data.senderFunctionalNumber
      })

      return {
        isSuccess: true,
        data: orderService
      }
    } else
      return {
        isSuccess: false,
        error: new CreateOrderServiceError()
      }
  }
}
