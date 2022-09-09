import { OrderService } from './../../entities/order-service'
import {
  CreateOrderServiceData,
  CreateOrderServiceRepository
} from './../../../repository/order-service/create-order-service'
import { dataSource } from '../../config'

export class CreateOrderServiceTypeOrmRepository
  implements CreateOrderServiceRepository
{
  private readonly historyRepository
  constructor() {
    this.historyRepository = dataSource.getRepository(OrderService)
  }

  async create(data: CreateOrderServiceData) {
    const result = this.historyRepository.create({
      authorId: data.authorId,
      date: data.date,
      history: data.history,
      description: data.description,
      sender: data.senderName,
      destination: data.destination,
      equipment: data.equipment,
      equipmentSnapshot: data.equipmentSnapshot,
      senderFunctionalNumber: data.senderFunctionalNumber
    })

    await this.historyRepository.save(result)

    return result
  }
}
