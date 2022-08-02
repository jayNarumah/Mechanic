import { CarProductModel } from "./car-product.model";
import { MechanicModel } from "./mechanic.model";
import { UserModel } from "./user.model";

export class RequestModel{
    
    id:number;
    user_id:UserModel;
    mechanic_id:MechanicModel;
    car_product_id:CarProductModel;
    description:string;
    request_date:Date;
    status:string;
}