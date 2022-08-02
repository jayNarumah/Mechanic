import { UserModel } from "./user.model";

export class feedBackModel {

    id: number;
    user_id: UserModel;
    message: string;
    status: string;

}