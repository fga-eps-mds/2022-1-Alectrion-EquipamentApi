import { FindAllUnitsController } from "../../presentation/controller/findAllUnitsController";
import { makeFindAllUnits } from "../useCases/findAllUnits";

export const makeFindAllUnitsController = () => {
  return new FindAllUnitsController(makeFindAllUnits());
};
