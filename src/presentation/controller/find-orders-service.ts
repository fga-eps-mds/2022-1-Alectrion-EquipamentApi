import { Controller } from "../protocols/controller";
import { FindOrderService, FindOrderServiceUseCaseData } from "../../useCases/find-order-service/find-order-service";
import { HttpResponse, ok , serverError} from "../helpers";
import { OrderService } from '../../domain/entities/order-service';

type HttpRequest = FindOrderServiceUseCaseData
type Model = Error | OrderService[]

export class FindOrderServiceController extends Controller {
    constructor(
        private readonly FindOrderService: FindOrderService
    ) {
        super()
    }

    async perform(params: HttpRequest): Promise<HttpResponse<Model>> {

        const response = await this.FindOrderService.execute(params)
        if(response.isSuccess && response.data){
            return ok(response.data)
        }else {
            return serverError(response.error)
        }
    }
}