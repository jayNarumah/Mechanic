import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";   
import { environment } from "../../../environments/environment.prod";  
import { MechanicModel } from "../models/mechanic.model";
@Injectable({
    providedIn: 'root',
})
export class MechanicEndpoint {
    baseUrl = `${environment.apiUrl}api/mechanic`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<MechanicModel[] >(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: MechanicModel }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: MechanicModel }>(`${this.baseUrl}`, data);
    }
         
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: MechanicModel }>(`${this.baseUrl}/${id}`, data);
    }
}