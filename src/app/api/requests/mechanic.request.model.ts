import { UserModel } from "../models/user.model";

export class MechanicRequest{
    
    id:number;
    user_id:UserModel;
    status:string;
    years_experiance:number;
}