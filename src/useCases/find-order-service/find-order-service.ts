import { OrderService } from '../../domain/entities/order-service'
import { OrderServiceRepositoryProtocol } from '../../repository/protocol/orderServiceRepositoryProtocol'
import { UseCase, UseCaseReponse } from '../protocol/useCase'

export class NotOSFoundError extends Error {
  constructor() {
    super('Order Service not found')
    this.name = 'NotOSFoundError'
  }
}

export type FindOrderServiceUseCaseData = {
  equipmentId: string
  authorId: string
  authorFunctionalNumber: string
  destination: string
  senderName: string
  senderFunctionalNumber: string
  date: string
}

export class FindOrderService
  implements UseCase<FindOrderServiceUseCaseData, OrderService[]>
{
  constructor(private readonly osReposiory: OrderServiceRepositoryProtocol) {}
  async execute(
    query: FindOrderServiceUseCaseData
  ): Promise<UseCaseReponse<OrderService[]>> {
    const ordersServices = await this.osReposiory.findOrderServiceGeneric(query)
    if (ordersServices !== null) {
      return {
        isSuccess: true,
        data: ordersServices
      }
    } else {
      return {
        isSuccess: false,
        error: new NotOSFoundError()
      }
    }
  }
}
