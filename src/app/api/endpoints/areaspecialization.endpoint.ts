import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";   
import { environment } from "../../../environments/environment.prod";
import { AreaSpecializationModel } from "../models/area-specialization.model"; 
@Injectable({
    providedIn: 'root',
})
export class AreaSpecializationEndpoint {
    baseUrl = `${environment.apiUrl}api/areaspecialization`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<AreaSpecializationModel[] >(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: AreaSpecializationModel }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: AreaSpecializationModel }>(`${this.baseUrl}`, data);
    }
         
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: AreaSpecializationModel }>(`${this.baseUrl}/${id}`, data);
    }
}