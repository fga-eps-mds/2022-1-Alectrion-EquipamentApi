export interface UseCaseReponse<T> {
  isSuccess: boolean
  data?: T
  error?: Error
}

export interface UseCase<R, T> {
  execute(data: R): Promise<UseCaseReponse<T>>
}
