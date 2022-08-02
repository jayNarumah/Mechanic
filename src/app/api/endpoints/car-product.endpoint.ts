import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";   
import { environment } from "../../../environments/environment.prod"; 
import { CarProductModel } from "../models/car-product.model";
@Injectable({
    providedIn: 'root',
})
export class CarProductEndpoint {
    baseUrl = `${environment.apiUrl}api/car-product`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<CarProductModel[] >(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: CarProductModel }>(`${this.baseUrl}/${id}`);
    }

    create(data) {
        return this.httpClient.post<{ data: CarProductModel }>(`${this.baseUrl}`, data);
    }
         
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data) {
        return this.httpClient.put<{ data: CarProductModel }>(`${this.baseUrl}/${id}`, data);
    }
}