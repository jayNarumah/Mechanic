import { UserModel } from "./user.model";

export class MechanicModel{
    
    id:number;
    user_id:UserModel;
    status:string;
    years_experiance:number;
}