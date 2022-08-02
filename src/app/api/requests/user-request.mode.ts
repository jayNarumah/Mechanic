import { UserTypeModel } from "../models/user-type.model";
import { UserTypeRequest } from "./user-type-request.model";

export class UserRequest{

        id:number;
        name: string;
        email:string;
        password:string;
        user_type_id:UserTypeModel;
        phone_number:string;
        image:string;
}