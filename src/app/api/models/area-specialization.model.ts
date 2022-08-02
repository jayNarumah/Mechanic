import { CarProductModel } from "./car-product.model";
import { SpecializationAreaModel } from "./specialization-area.mode";
import { UserModel } from "./user.model";

export class AreaSpecializationModel {
    
    id: number;
    user_id: UserModel;
    specialization_area_id:SpecializationAreaModel ;
    car_product_id: CarProductModel;
}
