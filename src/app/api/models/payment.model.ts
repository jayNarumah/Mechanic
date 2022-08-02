import { RequestModel } from "./request.model";

export class MechanicModel {

    id: number;
    request_id: RequestModel;
    mechanic_id: MechanicModel;
    amount: string;
}