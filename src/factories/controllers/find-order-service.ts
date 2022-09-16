import { FindOrderServiceController } from "../../presentation/controller/find-orders-service"
import { makeFindOrdersServicesUseCase } from "../useCases/find-order-service"


export const makeFindOrderServiceController = () => {
    return new FindOrderServiceController(makeFindOrdersServicesUseCase())
}