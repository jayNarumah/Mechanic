import { CarProductModel } from "../models/car-product.model";
import { MechanicModel } from "../models/mechanic.model";
import { UserModel } from "../models/user.model";

export class RequestRequest{

    id:number;
    user_id:UserModel;
    mechanic_id:MechanicModel;
    car_product_id:CarProductModel;
    description:string;
    request_date:Date;
    status:string;
}