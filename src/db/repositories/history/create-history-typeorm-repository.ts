import { CreateHistoryData } from './../../../repository/history/create-history-repository'
import { CreateHistoryRepository } from '../../../repository/history/create-history-repository'
import { dataSource } from '../../config'
import { History } from '../../entities/history'

export class CreateHistoryTypeOrmRepository implements CreateHistoryRepository {
  private readonly historyRepository
  constructor() {
    this.historyRepository = dataSource.getRepository(History)
  }

  async create(data: CreateHistoryData) {
    const result = this.historyRepository.create({
      equipment: data.equipment,
      equipmentSnapshot: data.equipmentSnapshot
    })

    await this.historyRepository.save(result)

    return result
  }
}
