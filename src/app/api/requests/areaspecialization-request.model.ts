import { CarProductModel } from "../models/car-product.model";
import { SpecializationAreaModel } from "../models/specialization-area.mode";
import { UserModel } from "../models/user.model";

export class AreaSpecializationRequest {

    id: number;
    user_id: UserModel;
    specialization_area_id: SpecializationAreaModel;
    car_product_id: CarProductModel;
}