import { CreateEquipmentUseCase } from "../../useCases/createEquipment/createEquipmentUseCase";
import { badRequest, HttpResponse, ok, serverError } from "../helpers";
import { Controller } from "../protocols/controller";

type HttpRequest = {
  tippingNumber: string;

  serialNumber: string;

  type: string;

  status: string;

  model: string;

  description?: string;

  initialUseDate: Date;

  screenSize?: string;

  invoiceNumber: string;

  power?: string;

  screenType?: string;

  processor?: string;

  storageType?: string;

  storageAmount?: string;

  brandId: string;

  acquisitionId: string;

  unitId: string;

  ram_size?: string;
};

type Model =
  | Error
  | {
      tippingNumber: string;

      serialNumber: string;

      type: string;

      status: string;

      model: string;

      description?: string;

      initialUseDate: Date;

      screenSize?: string;

      invoiceNumber: string;

      power?: string;

      screenType?: string;

      processor?: string;

      storageType?: string;

      storageAmount?: string;

      brandId: string;

      acquisitionId: string;

      unitId: string;

      ram_size?: string;
    };
export class CreateEquipmentController extends Controller {
  constructor(private readonly createEquipment: CreateEquipmentUseCase) {
    super();
  }
  async perform(params: HttpRequest): Promise<any> {
    const response = await this.createEquipment.execute(params);
    if (response.isSuccess) {
      if (response.data !== null) {
        return ok(response.data);
      } else {
        return badRequest;
      }
    } else {
      return badRequest;
    }
  }
}

// export class CreateEquipmentController extends Controller{
//     constructor(private readonly createEquipment: CreateEquipmentUseCase){
//         super();
//     }
//     async perform(params: HttpRequest):Promise<HttpResponse<Model>> {
//         const response = await this.createEquipment.execute(params)
//         if(!response.isSuccess && response.data===null){
//             console.log(response.data)
//             return  serverError(response.error)

//         }
//         else{
//             return serverError(response.error)
//         }
//     }

// }
