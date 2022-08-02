import { UserTypeModel } from "./user-type.model";

 

export class UserModel{

        id:number;
        name: string;
        email:string;
        password:string;
        user_type_id:UserTypeModel;
        phone_number:string;
        image:string;
}