import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";   
import { environment } from "../../../environments/environment.prod";  
import { RequestModel } from "../models/request.model";
@Injectable({
    providedIn: 'root',
})
export class RequestEndpoint {
    baseUrl = `${environment.apiUrl}api/request`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<RequestModel[] >(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: RequestModel }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: RequestModel }>(`${this.baseUrl}`, data);
    }
         
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: RequestModel }>(`${this.baseUrl}/${id}`, data);
    }
}